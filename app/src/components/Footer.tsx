"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-[#f3d9b9] py-12 px-8"
    >
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6">
          <a 
            href="#privacy" 
            className="text-base md:text-lg text-[#B4846C] font-light hover:text-[#2d4a3e] transition-colors underline"
          >
            Privacy & Cookies Policy
          </a>
          <a 
            href="#good-faith" 
            className="text-base md:text-lg text-[#B4846C] font-light hover:text-[#2d4a3e] transition-colors underline"
          >
            Good Faith Estimate
          </a>
          <a 
            href="#terms" 
            className="text-base md:text-lg text-[#B4846C] font-light hover:text-[#2d4a3e] transition-colors underline"
          >
            Website Terms & Conditions
          </a>
          <a 
            href="#disclaimer" 
            className="text-base md:text-lg text-[#B4846C] font-light hover:text-[#2d4a3e] transition-colors underline"
          >
            Disclaimer
          </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-base md:text-lg text-[#B4846C] font-light">
            Website Template Credits:{' '}
            <a 
              href="https://gobloomcreative.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B4846C] hover:text-[#2d4a3e] transition-colors underline"
            >
              Go Bloom Creative
            </a>
          </p>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-[#B4846C] font-light">
            All Rights Reserved © 2026
          </p>
        </div>
      </div>
    </div>
  );
}