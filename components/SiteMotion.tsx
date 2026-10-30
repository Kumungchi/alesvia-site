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
    const ruleParents = new WeakMap<Element, HTMLElement>();
    const markers = new Set<HTMLElement>();
    let disposed = false;

    const reveal = (element: HTMLElement, entrance = false) => {
      element.dataset.motionState = 'revealed';
      pending.delete(element);
      if (element.hasAttribute('data-motion-rule')) return;
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
        const element = ruleParents.get(entry.target) ?? entry.target as HTMLElement;
        reveal(element);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    const discover = () => {
      if (disposed) return;
      root.querySelectorAll<HTMLElement>('.research-list > article, .policy-process li').forEach(element => { element.dataset.motionRule = 'top'; });
      root.querySelectorAll<HTMLElement>('.content-section, [data-motion="section"], .page-header, [data-article-header], [data-motion-rule]').forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        if (preference.matches) { element.dataset.motionState = 'revealed'; return; }
        const bounds = element.getBoundingClientRect();
        const rule = element.dataset.motionRule;
        const position = rule === 'bottom' ? bounds.bottom : bounds.top;
        const entrance = element.matches('.page-header, [data-article-header]');
        if (entrance && bounds.bottom > 0 && bounds.top < window.innerHeight) {
          reveal(element, true);
        } else if (!entrance && position > window.innerHeight * .85) {
          pending.add(element);
          element.dataset.motionState = 'pending';
          if (rule) {
            const marker = document.createElement('span');
            marker.setAttribute('aria-hidden', 'true');
            marker.style.cssText = `position:absolute;left:0;right:0;height:1px;pointer-events:none;${rule === 'bottom' ? 'bottom:0' : 'top:0'}`;
            element.append(marker);
            markers.add(marker);
            ruleParents.set(marker, element);
            observer.observe(marker);
          } else observer.observe(element);
        } else {
          element.dataset.motionState = 'revealed';
        }
      });
    };

    const stopMotion = () => {
      if (!preference.matches) return;
      animations.forEach(animation => animation.cancel());
      pending.forEach(element => { element.dataset.motionState = 'revealed'; });
      markers.forEach(marker => marker.remove());
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
      markers.forEach(marker => marker.remove());
    };
  }, [pathname]);

  return null;
}
