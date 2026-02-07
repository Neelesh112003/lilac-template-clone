"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function Introduction() {
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
      className="min-h-screen bg-[#e8e4df] flex items-center"
    >
      <div className="w-full flex">
        <div className="w-3/5 flex items-center justify-center px-12 lg:px-20">
          <div
            className={`flex flex-col space-y-8 max-w-xl transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d4a3e] leading-tight">
              Hi, I'm Lilac.
            </h2>

            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              I'm committed to providing a safe and supportive environment
              where we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <div>
              <button className="px-8 py-4 border-2 border-[#2d4a3e] text-[#2d4a3e] font-medium tracking-wide hover:bg-[#2d4a3e] hover:text-white transition-all duration-300 flex items-center gap-2 group">
                LET'S CHAT
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-start relative pl-0 pr-12">
          <div
            className={`relative w-full max-w-2xl transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            
            <div className="relative z-10 w-112.5 h-160 -mb-32 mt-20">
              <div className="w-full h-full rounded-t-full overflow-hidden bg-[#c8d5d9]">
                <img
                  src="Introduction1.webp"
                  alt="Purple and pink lilac flowers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="relative z-20 w-80 h-80 ml-auto mr-0 mb-5">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#c8d5d9] ">
                <img
                  src="Introduction2.webp"
                  alt="White hydrangea flowers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}