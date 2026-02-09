"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function MyOffice() {
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
      className="min-h-screen bg-[#e8e4df] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d4a3e] leading-tight">
            A Calm Space for Healing
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              My Santa Monica office is designed to feel quiet, private, and grounding. With natural light, comfortable seating, and an uncluttered environment, the space itself helps clients settle and feel more at ease when they arrive.
            </p>
            
            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              I offer in-person therapy sessions at my Santa Monica office, as well as secure telehealth sessions for clients located anywhere in California.
            </p>
            
            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              Your comfort, privacy, and sense of safety are always a priority.
            </p>
          </div>

          {/* Right Column - First Image Placeholder */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="w-full h-100 lg:h-125 rounded-lg overflow-hidden bg-[#c8d5d9]">
              <img
                src="office1.jpeg"
                alt="Therapy office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        
        <div
          className={`transition-all duration-1000 ease-out delay-400 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="w-full h-100 lg:h-125 rounded-lg overflow-hidden bg-[#c8d5d9]">
            <img
              src="office2.jpeg"
              alt="Comfortable therapy environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}