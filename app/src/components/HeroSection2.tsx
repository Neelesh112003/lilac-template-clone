"use client";

import React, { useEffect, useState, useRef } from "react";

export default function FulfillingLife() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#e8e4df] flex items-center h-[85vh]"
    >
      <div className="w-full h-full flex">
        <div className="w-1/2 flex items-center justify-center px-12 lg:px-20 mt-20">
          <div
            className={`flex flex-col space-y-6 max-w-xl h-full py-16
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d4a3e] leading-tight">
              Live a fulfilling life.
            </h2>

            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              It's easy to feel like you're alone in facing these challenges, but
              I want you to know that I'm here to help.
            </p>

            <div className="pt-6 mt-auto border-t">
              <button
                className="
                  w-full
                  text-[#2d4a3e]
                  py-4
                  font-medium
                  tracking-wide
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  hover:bg-[#2d4a3e]
                  hover:text-white
                  group
                "
              >
                GET IN TOUCH
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full overflow-hidden flex items-end">
          <div
            className={`w-full h-full transition-all duration-1000 ease-out delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
          >
            <img
              src="/HeroSection2.webp"
              alt="Coffee, notebook, and lilac flowers on a desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
