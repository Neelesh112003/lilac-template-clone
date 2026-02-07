"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function FAQs() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Answer goes here."
    },
    {
      question: "What are your rates?",
      answer: "Answer goes here."
    },
    {
      question: "Do you have any openings?",
      answer: "Answer goes here."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-[#fbf6f1] flex items-center py-20"
    >
      <div className="w-full flex">
        <div className="w-[50%] flex items-center justify-center pl-12">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="w-115 h-160">
              <div className="w-full h-full rounded-t-full overflow-hidden bg-[#fbf6f1]">
                <img
                  src="FAQ.webp"
                  alt="Lavender flowers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex items-center justify-center px-12 lg:px-20">
          <div
            className={`w-full max-w-3xl transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d4a3e] mb-12">
              FAQs
            </h2>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t border-[#2d4a3e] last:border-b">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center py-8 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-3xl text-[#2d4a3e] shrink-0 transition-transform duration-300">
                      {openIndex === index ? '−' : '+'}
                    </span>
                    <span className="text-xl md:text-2xl lg:text-3xl font-light text-[#2d4a3e] pr-8">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 pb-8' : 'max-h-0'
                    }`}
                  >
                    <p className="text-lg md:text-xl text-[#3d4a42] font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}