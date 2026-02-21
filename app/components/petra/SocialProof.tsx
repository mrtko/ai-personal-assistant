import { petra } from "@/content/petra";

const { socialProof } = petra;

export default function SocialProof() {
  return (
    <section
      className="relative py-20 px-6 sm:px-10 overflow-hidden"
      style={{
        background: "#E84C19",
      }}
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-center text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-12">
          {socialProof.label}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {socialProof.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-[family-name:var(--font-playfair)] font-black text-white leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/55 text-xs leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
