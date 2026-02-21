import { petra } from "@/content/petra";

const { challenge } = petra;

const accentColors = [
  { dot: "#EF4444", border: "rgba(239,68,68,0.15)", bg: "rgba(239,68,68,0.06)", num: "rgba(239,68,68,0.4)" },
  { dot: "#F59E0B", border: "rgba(245,158,11,0.15)", bg: "rgba(245,158,11,0.06)", num: "rgba(245,158,11,0.4)" },
  { dot: "#E84C19", border: "rgba(232,76,25,0.15)", bg: "rgba(232,76,25,0.06)", num: "rgba(232,76,25,0.4)" },
  { dot: "#8B5CF6", border: "rgba(139,92,246,0.15)", bg: "rgba(139,92,246,0.06)", num: "rgba(139,92,246,0.4)" },
];

export default function Challenge() {
  return (
    <section className="section-surface relative py-28 px-6 sm:px-10 overflow-hidden">
      {/* Subtle top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,76,25,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16">
          <div
            aria-hidden="true"
            className="hidden md:block text-[6rem] font-[family-name:var(--font-playfair)] font-black leading-none select-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            01
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {challenge.label}
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
            >
              {challenge.heading}
            </h2>
            {challenge.subheading && (
              <p className="text-white/40 text-base leading-relaxed max-w-2xl">
                {challenge.subheading}
              </p>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenge.items.map((item, i) => {
            const color = accentColors[i] ?? accentColors[0];
            return (
              <article
                key={item.title}
                className="relative rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(28px) saturate(220%)",
                  WebkitBackdropFilter: "blur(28px) saturate(220%)",
                  border: `1px solid ${color.border}`,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {/* Apple glossy sheen */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 100%)",
                    borderRadius: "inherit",
                  }}
                />
                {/* Hover tint */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: color.bg }}
                />

                {/* Icon circle */}
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: color.bg, border: `1px solid ${color.border}` }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3 className="relative text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="relative text-white/40 text-sm leading-relaxed">{item.description}</p>

                {/* Dot accent */}
                <div
                  aria-hidden="true"
                  className="absolute top-5 right-5 w-2 h-2 rounded-full"
                  style={{ background: color.dot, opacity: 0.6 }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
