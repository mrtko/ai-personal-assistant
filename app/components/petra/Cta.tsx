import { petra } from "@/content/petra";

const { cta } = petra;

export default function Cta() {
  return (
    <section
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Brand glow center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #E84C19 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "#E84C19" }}>
          {cta.label}
        </p>

        {/* Heading */}
        <h2
          className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {cta.heading}
        </h2>

        {cta.subheading && (
          <p className="text-white/50 text-lg mb-4">{cta.subheading}</p>
        )}

        <p className="text-white/35 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          {cta.description}
        </p>

        {/* Points list */}
        {cta.points && cta.points.length > 0 && (
          <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-10">
            {cta.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-white/55"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="#E84C19" strokeWidth="1"/>
                  <path d="M5 8l2 2 4-4" stroke="#E84C19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={cta.href}
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#E84C19",
              boxShadow: "0 8px 32px rgba(232, 76, 25, 0.4)",
            }}
          >
            {cta.button}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          {cta.buttonSecondary && (
            <a
              href="#petra"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white/50 hover:text-white font-medium text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              {cta.buttonSecondary}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
