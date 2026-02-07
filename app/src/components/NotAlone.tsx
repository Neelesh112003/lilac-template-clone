"use client"

import React, { useEffect, useState, useRef } from 'react';

export default function NotAlone() {
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

  const challenges = [
    "Persistent feelings of sadness or hopelessness",
    "Trouble focusing or making decisions",
    "Difficulty maintaining relationships",
    "Feeling constantly exhausted or unmotivated",
    "A pervasive sense of being overwhelmed"
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex items-center"
    >
      <div className="w-full flex">
        <div className="w-1/2 bg-[#b5aea5] overflow-hidden flex items-end">
          <div
            className={`w-full h-full transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
          >
            <img
              src="NotAlone.webp"
              alt="Woman looking peaceful and contemplative"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 bg-[#c4c0d1] flex items-center justify-center px-12 lg:px-20">
          <div
            className={`flex flex-col space-y-8 max-w-2xl transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            } mt-30`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a3e] leading-tight mt-15">
              You don't have to do this all <em className="italic">alone.</em>
            </h2>

            <p className="text-lg md:text-xl text-[#3d4a42] font-light">
              If you are facing any of these, there's hope:
            </p>

            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li 
                  key={index}
                  className="text-base md:text-lg text-[#3d4a42] font-light flex items-start"
                >
                  <span className="mr-3">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg md:text-xl text-[#3d4a42] leading-relaxed font-light">
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <div className="pt-6 mt-4 border-t mb-5">
              <button
                className="
                  w-full
                  text-[#2d4a3e]
                  py-4
                  font-medium tracking-wide
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  hover:bg-[#2d4a3e]
                  hover:text-white
                  group
                "
              >
                WORK WITH ME
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
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