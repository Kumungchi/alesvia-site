'use client';
import { useEffect, useState } from 'react';

export default function NavbarShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`nav-shrink w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto border-b border-alesvia-muted/10 sticky top-0 z-50 relative ${scrolled ? 'scrolled bg-alesvia-bg/90 backdrop-blur-xl' : 'bg-alesvia-bg/80 backdrop-blur-md'}`}>
      {children}
    </nav>
  );
}
