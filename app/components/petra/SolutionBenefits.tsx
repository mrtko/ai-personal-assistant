import { petra } from "@/content/petra";

const { solution } = petra;

export default function SolutionBenefits() {
  return (
    <section className="relative py-28 px-6 sm:px-10 overflow-hidden" style={{ background: "#0C0C0C" }}>
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #E84C19 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16">
          <div
            aria-hidden="true"
            className="hidden md:block text-[6rem] font-[family-name:var(--font-playfair)] font-black leading-none select-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            02
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {solution.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              {solution.heading}
            </h2>
          </div>
        </div>

        {/* Main grid: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Die Lösung */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-white font-semibold text-lg mb-2">{solution.solutionHeading}</h3>
            {solution.description && (
              <p className="text-white/45 text-sm leading-relaxed mb-6">{solution.description}</p>
            )}

            {/* Solution checkmarks */}
            <ul className="space-y-3 mb-8">
              {solution.solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(232,76,25,0.15)", border: "1px solid rgba(232,76,25,0.3)" }}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#E84C19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Highlight box */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(232,76,25,0.08)",
                border: "1px solid rgba(232,76,25,0.20)",
                borderLeft: "3px solid #E84C19",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#E84C19" }}>
                {solution.highlightLabel}
              </p>
              <p className="text-white/75 text-sm leading-relaxed">{solution.highlight}</p>
            </div>
          </div>

          {/* Right: Benefits */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{solution.benefitsHeading}</h3>
            <div className="space-y-4">
              {solution.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-5 rounded-2xl hover:border-white/15 transition-colors duration-200"
                  style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg"
                    style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)" }}
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{benefit.description}</p>
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
