"use client";

import { useState } from "react";
import { petra } from "@/content/petra";

const { tips } = petra;

export default function TipsAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="section-surface relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      {/* Accent top line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,76,25,0.4), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header – centered */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
            {tips.label}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            {tips.heading}
          </h2>
          {tips.subheading && (
            <p className="text-white/40 text-base leading-relaxed max-w-2xl mx-auto">{tips.subheading}</p>
          )}
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {tips.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "#161616",
                  border: isOpen ? "1px solid rgba(232,76,25,0.25)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <button
                  className="w-full flex items-center gap-5 p-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold transition-colors duration-200"
                    style={{
                      background: isOpen ? "#E84C19" : "#1E1E1E",
                      color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span
                    className="flex-1 font-semibold text-sm transition-colors duration-200"
                    style={{ color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.65)" }}
                  >
                    {item.title}
                  </span>
                  {/* Chevron */}
                  <svg
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: isOpen ? "#E84C19" : "rgba(255,255,255,0.25)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Content */}
                {isOpen && (
                  <div
                    className="px-5 pb-5 ml-13"
                    style={{ borderTop: "1px solid rgba(232,76,25,0.12)" }}
                  >
                    <p className="text-white/50 text-sm leading-relaxed pt-4 pl-13">
                      {item.content}
                    </p>
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
