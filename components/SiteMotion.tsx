'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Progressive enhancement: server HTML and failed/disabled JavaScript stay visible.
export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById('main-content');
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<HTMLElement>();
    const pending = new Set<HTMLElement>();
    const animations = new Set<Animation>();
    let disposed = false;

    const reveal = (element: HTMLElement, entrance = false) => {
      element.dataset.motionState = 'revealed';
      pending.delete(element);
      if (preference.matches || !element.animate) return;
      const animation = element.animate([
        { opacity: entrance ? .65 : .8, transform: `translateY(${entrance ? 18 : 12}px)` },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: entrance ? 650 : 600, easing: 'cubic-bezier(.16,1,.3,1)' });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
      animation.oncancel = () => animations.delete(animation);
    };

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        reveal(element);
        observer.unobserve(element);
      }
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    const discover = () => {
      if (disposed) return;
      root.querySelectorAll<HTMLElement>('.content-section, [data-motion="section"], .page-header, [data-article-header]').forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        if (preference.matches) return;
        const bounds = element.getBoundingClientRect();
        const entrance = element.matches('.page-header, [data-article-header]');
        if (entrance && bounds.bottom > 0 && bounds.top < window.innerHeight) {
          reveal(element, true);
        } else if (!entrance && bounds.top > window.innerHeight * .85) {
          pending.add(element);
          element.dataset.motionState = 'pending';
          observer.observe(element);
        }
      });
    };

    const stopMotion = () => {
      if (!preference.matches) return;
      animations.forEach(animation => animation.cancel());
      pending.forEach(element => { element.dataset.motionState = 'revealed'; });
      pending.clear();
      observer.disconnect();
    };

    const frame = requestAnimationFrame(discover);
    // Also covers streamed route content without turning server pages into client components.
    const mutations = new MutationObserver(discover);
    mutations.observe(root, { childList: true, subtree: true });
    preference.addEventListener('change', stopMotion);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutations.disconnect();
      preference.removeEventListener('change', stopMotion);
      animations.forEach(animation => animation.cancel());
      pending.forEach(element => { element.dataset.motionState = 'revealed'; });
    };
  }, [pathname]);

  return null;
}
