import { petra } from "@/content/petra";

const { modules } = petra;

const moduleColors = [
  { accent: "#3B82F6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.15)" },
  { accent: "#10B981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" },
  { accent: "#E84C19", bg: "rgba(232,76,25,0.08)", border: "rgba(232,76,25,0.15)" },
  { accent: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.15)" },
  { accent: "#8B5CF6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.15)" },
  { accent: "#EC4899", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.15)" },
  { accent: "#14B8A6", bg: "rgba(20,184,166,0.08)", border: "rgba(20,184,166,0.15)" },
  { accent: "#E84C19", bg: "rgba(232,76,25,0.08)", border: "rgba(232,76,25,0.15)" },
];

export default function Modules() {
  return (
    <section
      id="module"
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Orange ambient structure */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(232,76,25,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle at 20% 90%, rgba(232,76,25,0.14) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16">
          <div
            aria-hidden="true"
            className="hidden md:block text-[6rem] font-[family-name:var(--font-playfair)] font-black leading-none select-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            04
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {modules.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {modules.heading}
            </h2>
            <p className="text-white/40 text-base leading-relaxed max-w-2xl">{modules.intro}</p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.items.map((item, i) => {
            const color = moduleColors[i] ?? moduleColors[0];
            // Feature cards: wider on lg
            const isFeature = i === 0 || i === 4;
            return (
              <article
                key={item.title}
                className={`relative rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300 overflow-hidden ${
                  isFeature ? "lg:col-span-2" : ""
                }`}
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
                {/* Hover bg tint */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: color.bg }}
                />

                {/* ZeckWelt badge */}
                <div
                  className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4 text-[10px] font-semibold tracking-wider"
                  style={{ background: color.bg, color: color.accent, border: `1px solid ${color.border}` }}
                >
                  <span aria-hidden="true">◆</span>
                  {modules.badge}
                </div>

                {/* Icon */}
                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: color.bg }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3 className="relative text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="relative text-white/40 text-sm leading-relaxed mb-4">{item.description}</p>

                {/* Highlight tag */}
                {"highlight" in item && item.highlight && (
                  <div
                    className="relative inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: color.bg, color: color.accent }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item.highlight}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-white/25 text-sm">{modules.footer}</p>
      </div>
    </section>
  );
}
