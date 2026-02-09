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
    <section
    id='about'
      ref={sectionRef}
      className="min-h-screen bg-[#f3d9b9] flex items-center py-12 md:py-20 px-4 md:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Content */}
          <div className="w-full lg:w-3/5 flex items-center justify-center">
            <div
              className={`flex flex-col space-y-6 md:space-y-8 max-w-2xl transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#B4846C] leading-tight">
                Hi, I'm Dr. Maya Reynolds, PsyD
              </h2>

              <div className="text-base md:text-lg lg:text-xl text-[#B4846C] leading-relaxed font-light space-y-4">
                <p>
                  I'm a licensed clinical psychologist based in Santa Monica, California. I work with adults who feel overwhelmed by anxiety, trauma, burnout, and the long-term effects of chronic stress.
                </p>
                <p>
                  My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still allowing space for reflection and depth. I integrate evidence-based practices including CBT, EMDR, mindfulness, and body-oriented techniques to address both emotional and physiological experiences.
                </p>
                <p>
                  My goal is not just symptom relief, but helping you build insight, resilience, and a stronger relationship with yourself over time.
                </p>
              </div>

              <div>
                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-[#B4846C] text-[#B4846C] font-medium tracking-wide hover:bg-[#B4846C] hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  LET'S CHAT
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

        
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <div
              className={`relative transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-112.5 lg:h-112.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#c8d5d9] shadow-lg flex items-center justify-center">
                  <img
                    src="Dr.Maya-Reynolds.png"
                    alt="Dr. Maya Reynolds"
                    className="w-full h-full object-cover object-center scale-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}