"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function GetStarted() {
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
      className=" bg-[#eee18b] flex items-center justify-center py-20 px-4"
    >
      <div
        className={`w-2/5 text-center items-center mt-15 transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-8">
          Get started today.
        </h2>

        <p className="text-lg md:text-xl lg:text-xl text-black font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          If you’re ready to explore therapy in a supportive, grounded space, I invite you to reach out. Finding the right therapist matters—and it’s okay to take the first step at your own pace.
        </p>

        <div className="flex justify-center">
          <button className="px-8 py-4 border-2 border-black text-black font-medium tracking-wide hover:bg-white hover:text-[#7a7d5c] transition-all duration-300 flex items-center gap-2 group">
            REQUEST A CONSULTATION
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}