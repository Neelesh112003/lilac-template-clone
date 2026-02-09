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
      className="bg-[#f3d9b9] flex items-center min-h-screen lg:h-[85vh]"
    >
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-8 lg:py-0 lg:mt-20">
          <div
            className={`flex flex-col space-y-6 max-w-xl w-full
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-[#B4846C] leading-tight">
              You can look "fine" on the outside and still feel overwhelmed inside.
            </h2>

            <p className="text-lg md:text-xl text-[#B4846C] leading-relaxed font-light">
              Many of my clients are thoughtful, capable, and successful—yet feel constantly tense, exhausted, or stuck in overthinking. You may be functioning well on the surface while privately dealing with anxiety, panic, poor sleep, or a lingering sense of unease.<br /><br />
              Therapy can help you slow down, understand what's happening beneath the surface, and develop ways to feel more grounded and regulated in your daily life.
            </p>

            <div className="pt-6 border-t border-[#B4846C]/30">
              <button
                className="
                  w-full
                  text-[#B4846C]
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

        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden flex items-end">
          <div
            className={`w-full h-full transition-all duration-1000 ease-out delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
          >
            <img
              src="HeroSection2new.jpg"
              alt="Coffee, notebook, and lilac flowers on a desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}