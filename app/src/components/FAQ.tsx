"use client";
import React, { useEffect, useState, useRef } from "react";

export default function FAQs() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "I am an out-of-network provider. I can provide documentation to help you seek reimbursement from your insurance company.",
    },
    {
      question: "What are your rates?",
      answer: "Rates vary depending on session type. Please contact me directly for current fees and availability.",
    },
    {
      question: "Do you have any openings?",
      answer: "Yes. I offer secure telehealth therapy for clients located anywhere in California.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF8F5] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="w-72 md:w-96 h-105 md:h-130 rounded-t-full overflow-hidden">
              <img
                src="/FAQnew.jpg"
                alt="Calming therapy space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#B4846C] mb-10">
              FAQs
            </h2>

            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-t border-[#2d4a3e] last:border-b"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center gap-6 py-6 text-left"
                  >
                    <span className="text-2xl text-[#B4846C]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                    <span className="text-lg md:text-xl lg:text-2xl font-light text-[#B4846C]">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-base md:text-lg text-[#B4846C] font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
