"use client"
import React, { useEffect, useState, useRef } from "react";

export default function ProfessionalBackground() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const backgroundItems = [
    {
      title: "Education",
      content:
        "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
      title: "Licensure",
      content:
        "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
      title: "Certifications",
      content:
        "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#e8e4df] flex items-center justify-center py-20"
    >
      <div
        className={`w-2/5 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2d4a3e] text-center mb-16">
          My Professional Background
        </h2>

        <div className="space-y-0">
          {backgroundItems.map((item, index) => (
            <div
              key={index}
              className="border-t border-[#2d4a3e] last:border-b"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity"
              >
                <span className="text-2xl md:text-3xl font-light text-[#2d4a3e] pr-8">
                  {item.title}
                </span>
                <span className="text-3xl text-[#2d4a3e] shrink-0 transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-lg md:text-xl text-[#3d4a42] font-light">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
