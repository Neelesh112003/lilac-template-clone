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
      title: "Self-Esteem",
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/Specialties1.webp",
      delay: "delay-0",
    },
    {
      title: "Relationships",
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/Specialties2.webp",
      delay: "delay-200",
    },
    {
      title: "Burnout",
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/Specialties3.webp",
      delay: "delay-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#fbf6f1] py-20 px-2 md:px-6"
    >
      <div className="max-w-350 mx-auto">
        <h2
          className={`text-5xl md:text-6xl lg:text-6xl font-light text-[#2d4a3e] text-center mb-16
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          My Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-stretch">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className={`bg-[#d4cfc9] border border-[#2d4a3e] p-8 flex flex-col h-full
              transition-all duration-1000 ease-out ${specialty.delay}
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              <h3 className="text-2xl md:text-3xl font-light text-[#2d4a3e] mb-6">
                {specialty.title}
              </h3>

              <p className="text-base md:text-lg text-[#3d4a42] leading-relaxed font-light mb-10 grow">
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
