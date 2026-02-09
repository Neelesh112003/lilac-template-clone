"use client";

import React, { useEffect, useState, useRef } from "react";

export default function MySpecialties() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "Support for chronic worry, panic attacks, racing thoughts, and physical tension. We’ll work on both the mental patterns and the body’s stress response so anxiety no longer runs your life.",
      image: "Specialties1new.jpg",
      delay: "delay-0",
    },
    {
      title: "Trauma & EMDR Therapy",
      description:
        "Trauma-informed therapy for single-incident and complex trauma. Using EMDR, mindfulness, and body-based techniques, we move at a pace that prioritizes safety, stabilization, and nervous system regulation.",
      image: "/Specialties2new.jpg",
      delay: "delay-200",
    },
    {
      title: "Burnout, Perfectionism & High Pressure",
      description:
        "For professionals, creatives, and entrepreneurs who feel depleted after years of pushing through stress. Therapy becomes a space to reconnect with yourself and build more sustainable ways of living and working.",
      image: "/Specialties3new.jpg",
      delay: "delay-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#FAF8F5] py-20 px-2 md:px-6"
    >
      <div className="max-w-350 mx-auto">
        <h2
          className={`text-5xl md:text-6xl lg:text-6xl font-light text-[#B4846C] text-center mb-16
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          My Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-stretch">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className={`bg-[#f3d9b9] border border-[#B4846C] p-8 flex flex-col h-full
              transition-all duration-1000 ease-out ${specialty.delay}
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              <h3 className="text-2xl md:text-3xl font-light text-[#B4846C] mb-6">
                {specialty.title}
              </h3>

              <p className="text-base md:text-lg text-[#B4846C] leading-relaxed font-light mb-10 grow">
                {specialty.description}
              </p>

              <div className="flex justify-center mt-auto">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
