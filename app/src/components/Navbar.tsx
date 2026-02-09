'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]
      transition-transform duration-300
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-[22px] md:text-[28px] lg:text-[32px] font-medium text-[#B4846C]"
        >
          Dr. Maya Reynolds
        </Link>

        <div className="hidden md:flex gap-12 text-[#2C3731]">
          <Link href="#about" className="hover:text-[#B4846C] transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-[#B4846C] transition-colors">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-[#B4846C]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FAF8F5] px-6 pb-6 flex flex-col gap-4 text-[#2C3731]">
          <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#B4846C] transition-colors">
            About
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#B4846C] transition-colors">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}