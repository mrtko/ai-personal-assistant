import { petra } from "@/content/petra";

const { services } = petra;

export default function Services() {
  return (
    <section className="section-tint section-sep relative py-28 px-6 sm:px-10 overflow-hidden">
      {/* Aurora accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-5 max-w-xl">
          <p className="text-orange-300/70 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
            {services.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight">
            {services.heading}
          </h2>
        </div>
        <p className="text-white/45 text-lg mb-12 max-w-xl">{services.intro}</p>

        {/* Glass service pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {services.pills.map((s) => (
            <div
              key={s.label}
              className="glass-pill flex items-center gap-2.5 rounded-full px-6 py-3 text-white/75 font-medium hover:text-white hover:bg-white/15 transition-all duration-200 cursor-default text-sm"
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>

        {/* Detailed glass card */}
        <div className="glass-card rounded-3xl p-8 lg:p-10">
          <ul className="space-y-5" role="list">
            {services.list.map((item, i) => (
              <li key={i} className="flex items-start gap-5 text-white/65">
                <span
                  className="mt-0.5 w-7 h-7 rounded-full bg-orange-500/25 border border-orange-400/25 text-orange-300 text-xs font-bold flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <p className="mt-7 text-white/35 text-sm text-center">{services.note}</p>
      </div>
    </section>
  );
}
