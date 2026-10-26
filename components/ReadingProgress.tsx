'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - innerHeight;
      const progress = distance > 0 ? Math.max(0, Math.min(1, scrollY / distance)) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(request);
    resize.observe(document.body);
    update();
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); removeEventListener('scroll', request); removeEventListener('resize', request); };
  }, [pathname]);
  return <div ref={ref} className="reading-progress" style={{ transform: 'scaleX(0)' }} aria-hidden="true" />;
}
