'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-16 py-5
      transition-transform duration-300 ease-in-out z-50
      bg-[#fbf6f1]
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-350 mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#2d2d2d]"
        >
          Lilac Template
        </Link>

        <div className="flex gap-8 md:gap-12 lg:gap-16 text-[#2d2d2d]">
          <Link href="/blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
