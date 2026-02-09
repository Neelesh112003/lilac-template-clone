"use client";

import React, { useEffect, useState } from "react";

export default function TherapyHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center p-4 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row mt-10 lg:mt-25">
        <div className="w-full lg:w-1/2 flex items-end lg:ml-15 mb-8 lg:mb-0">
          <div
            className={`relative w-full aspect-2/3 max-h-[120vh]
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="absolute inset-0 bg-[#FFFFFF] rounded-t-full overflow-hidden">
              <img
                src="HeroSection1new.jpg"
                alt="Person holding lilac flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div
            className={`flex flex-col space-y-8 max-w-2xl px-4 lg:px-8
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#B4846C] leading-tight">
              Therapy for Anxiety, Trauma & Burnout 
              <br />
              in Santa Monica, CA
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[#5D6D66] font-light">
              Work through anxiety, trauma, and chronic stress with a licensed clinical psychologist who understands the emotional cost of high-pressure lives.
            </p>

            <div>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-[#B4846C] text-[#FAF8F5] font-medium tracking-wide hover:bg-[#9A6D59] transition-all duration-300 flex items-center gap-2 group">
                SCHEDULE A CONSULTATION
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}