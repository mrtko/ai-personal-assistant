import { petra } from "@/content/petra";

const { workflow } = petra;

export default function WorkflowExample() {
  return (
    <section
      id="workflow"
      className="section-surface relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      {/* Accent top line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,76,25,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-20">
          <div
            aria-hidden="true"
            className="hidden md:block text-[6rem] font-[family-name:var(--font-playfair)] font-black leading-none select-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            03
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {workflow.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {workflow.heading}
            </h2>
            {workflow.subheading && (
              <p className="text-white/40 text-base leading-relaxed max-w-2xl">{workflow.subheading}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[calc(12.5%-0.5px)] right-[calc(12.5%-0.5px)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(232,76,25,0.3) 20%, rgba(232,76,25,0.3) 80%, transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {workflow.steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center lg:items-center text-center">
                {/* Step number circle */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    background: i === 3 ? "#E84C19" : "#161616",
                    border: i === 3 ? "none" : "1px solid rgba(232,76,25,0.25)",
                    boxShadow: i === 3 ? "0 8px 32px rgba(232,76,25,0.35)" : "none",
                  }}
                >
                  <span
                    className="text-3xl"
                    style={{ filter: i === 3 ? "none" : undefined }}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: i === 3 ? "#FFFFFF" : "#E84C19",
                      color: i === 3 ? "#E84C19" : "#FFFFFF",
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Step number text */}
                <div
                  className="font-[family-name:var(--font-playfair)] text-xs font-bold tracking-wider mb-2"
                  style={{ color: "rgba(232,76,25,0.5)" }}
                >
                  {step.number}
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Example box */}
        {workflow.example && (
          <div
            className="mt-16 rounded-2xl p-6 sm:p-8"
            style={{
              background: "#161616",
              border: "1px solid rgba(232,76,25,0.2)",
            }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#E84C19" }}>
              {workflow.example.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-4 items-center">
              {/* Input */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#0C0C0C", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-xs text-white/30 font-medium mb-2 tracking-wider uppercase">Du sagst</div>
                <p className="text-white/70 text-sm leading-relaxed italic">{workflow.example.input}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <svg className="w-6 h-6 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Output */}
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(232,76,25,0.06)", border: "1px solid rgba(232,76,25,0.20)" }}
              >
                <div className="text-xs font-medium mb-2 tracking-wider uppercase" style={{ color: "#E84C19" }}>
                  Petra erledigt
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{workflow.example.output}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
