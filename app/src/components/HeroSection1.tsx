"use client";

import React, { useEffect, useState } from "react";

export default function TherapyHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf6f1] flex items-center p-4">
      <div className="w-full flex mt-25">
        <div className="w-[50%] flex items-end ml-15">
          <div
            className={`relative w-full aspect-2/3 max-h-[120vh]
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="absolute inset-0 bg-[#c8d5d9] rounded-t-full overflow-hidden">
              <img
                src="/HeroSection1.webp"
                alt="Person holding lilac flowers"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className="w-[70%] flex items-center justify-center">
          <div
            className={`flex flex-col space-y-8 max-w-2xl px-8
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2d4a3e] leading-tight">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="text-lg md:text-xl text-[#4a5f54] font-light">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <div>
              <button className="px-8 py-4 border-2 border-[#2d4a3e] text-[#2d4a3e] font-medium tracking-wide hover:bg-[#2d4a3e] hover:text-white transition-all duration-300 flex items-center gap-2 group">
                CONNECT WITH ME
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
