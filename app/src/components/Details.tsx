"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function Details() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fbf6f1] py-16 px-8 md:px-16 lg:px-24"
    >
      <div
        className={`w-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-16">
          

          <div className="space-y-6 max-w-sm">
            <h3 className="text-3xl md:text-4xl font-light text-[#2d4a3e]">
              Lilac Template
            </h3>
            <div className="space-y-2">
              <p className="text-lg text-[#3d4a42] font-light">123 Example Road</p>
              <p className="text-lg text-[#3d4a42] font-light">Minneapolis, MN</p>
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-lg text-[#3d4a42] font-light">email@example.com</p>
              <p className="text-lg text-[#3d4a42] font-light">(555) 555-5555</p>
            </div>
          </div>

          <div className="flex gap-24">
            
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-[#2d4a3e]">
                Hours
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-[#3d4a42] font-light">
                  Monday – Friday
                </p>
                <p className="text-lg text-[#3d4a42] font-light">
                  10am – 6pm
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-[#2d4a3e]">
                Find
              </h3>
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-lg text-[#3d4a42] font-light underline hover:text-[#2d4a3e]">
                  Home
                </a>
                <a href="#contact" className="text-lg text-[#3d4a42] font-light underline hover:text-[#2d4a3e]">
                  Contact
                </a>
                <a href="#blog" className="text-lg text-[#3d4a42] font-light underline hover:text-[#2d4a3e]">
                  Blog
                </a>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
