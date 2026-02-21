"use client";

import { useState } from "react";
import { petra } from "@/content/petra";

const { faq } = petra;

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-14">
          <div
            aria-hidden="true"
            className="hidden md:block text-[6rem] font-[family-name:var(--font-playfair)] font-black leading-none select-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            07
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {faq.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {faq.heading}
            </h2>
            {faq.subheading && (
              <p className="text-white/40 text-base leading-relaxed max-w-xl">{faq.subheading}</p>
            )}
          </div>
        </div>

        {/* FAQ Grid: 2 columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-6xl">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "#161616",
                  border: isOpen
                    ? "1px solid rgba(232,76,25,0.25)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <button
                  className="w-full flex items-start gap-4 p-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="flex-1 font-medium text-sm leading-relaxed transition-colors duration-200"
                    style={{ color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.7)" }}
                  >
                    {item.question}
                  </span>
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5"
                    style={{
                      background: isOpen ? "#E84C19" : "#1E1E1E",
                      border: isOpen ? "none" : "1px solid rgba(255,255,255,0.10)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 transition-transform duration-200"
                      style={{
                        color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(232,76,25,0.12)" }}
                    >
                      <p className="text-white/45 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
