"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Details() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.2 }
  );

  const current = sectionRef.current;
  if (current) observer.observe(current);

  return () => {
    if (current) observer.unobserve(current);
  };
}, []);


  return (
    <section
    id="contact"
      ref={sectionRef}
      className="bg-[#FAF8F5] py-16 md:py-24"
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          <div className="space-y-6 max-w-md">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#B4846C]">
              Dr. Maya Reynolds, PsyD
              <p className="text-xl md:text-2xl lg:text-3xl mt-2">
              Licensed Clinical Psychologist 
              </p>
            </h3>

            <div className="space-y-1">
              <p className="text-base md:text-lg text-[#B4846C] font-light">
                123th Street 45 W, <br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div className="space-y-1 pt-4">
              <p className="text-base md:text-lg text-[#B4846C] font-light">
                maya@psychologist.com
              </p>
              <p className="text-base md:text-lg text-[#B4846C] font-light">
                (555) 555-5555
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#B4846C]">
                Hours
              </h3>
              <p className="text-base md:text-lg text-[#B4846C] font-light">
                Monday – Friday
              </p>
              <p className="text-base md:text-lg text-[#B4846C] font-light">
                10am – 6pm
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#B4846C]">
                Find
              </h3>
              <nav className="flex flex-col space-y-2">
                <a className="text-base md:text-lg text-[#B4846C] font-light underline hover:text-[#2d4a3e]">
                  Home
                </a>
                <a className="text-base md:text-lg text-[#B4846C] font-light underline hover:text-[#2d4a3e]">
                  Contact
                </a>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
