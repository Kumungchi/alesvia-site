'use client';
import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.03;
      currentY += (mouseY - currentY) * 0.03;

      const orbs = container.querySelectorAll<HTMLElement>('.floating-orb');
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Primary accent orb */}
      <div className="floating-orb absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-gradient-to-br from-alesvia-accent/8 to-alesvia-primary/5" />
      {/* Trust blue orb */}
      <div className="floating-orb floating-orb-2 absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-alesvia-trust/6 to-transparent" />
      {/* Small accent orb */}
      <div className="floating-orb floating-orb-3 absolute bottom-[10%] right-[30%] w-[300px] h-[300px] bg-gradient-to-bl from-alesvia-accent/5 to-alesvia-primary/3" />
      {/* Morphing blob */}
      <div className="morph-blob absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-alesvia-primary/[0.03] via-alesvia-accent/[0.04] to-alesvia-trust/[0.03]" />
    </div>
  );
}
