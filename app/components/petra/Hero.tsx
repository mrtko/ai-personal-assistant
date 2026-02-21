"use client";
import Image from "next/image";
import { petra } from "@/content/petra";
import ShaderBackground from "@/components/ui/shader-background";

const { hero } = petra;

export default function Hero() {
  return (
    <section
      id="petra"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Subtle background radial glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle at 70% 30%, #E84C19 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle at 30% 80%, #E84C19 0%, transparent 60%)",
          }}
        />
      </div>

      {/* WebGL shader – orange plasma lines, screen blend */}
      <ShaderBackground />

      {/* Grid texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 xl:gap-24 items-center">

          {/* ── Left Column ── */}
          <div>
            {/* Badge */}
            <div className="tag-pill mb-8 w-fit">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#E84C19]"
                style={{ boxShadow: "0 0 8px #E84C19" }}
                aria-hidden="true"
              />
              {hero.badge}
            </div>

            {/* Headline */}
            <div className="mb-6">
              <h1
                className="font-[family-name:var(--font-playfair)] leading-[1.0] tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700 }}
              >
                {hero.headline}
              </h1>
              <p
                className="mt-5 font-semibold tracking-[0.08em]"
                style={{ color: "#E84C19", fontSize: "1.1rem" }}
              >
                {hero.tagline}
              </p>
            </div>

            {/* Subline */}
            <p className="text-white/65 text-xl sm:text-2xl font-light leading-relaxed max-w-xl mb-4">
              {hero.subline}
            </p>

            {/* Description */}
            <p className="text-white/40 text-base leading-relaxed max-w-lg mb-10">
              {hero.description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    className="font-[family-name:var(--font-playfair)] text-xl font-bold"
                    style={{ color: "#E84C19" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-xs mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#module"
                className="btn-brand inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#E84C19",
                  boxShadow: "0 8px 32px rgba(232, 76, 25, 0.35)",
                }}
              >
                {hero.cta.primary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#tech"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white/60 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {hero.cta.secondary}
              </a>
            </div>
          </div>

          {/* ── Right Column: Petra Photo ── */}
          <div className="relative flex-shrink-0 hidden lg:block">
            {/* Orange frame accent behind */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #E84C19 0%, transparent 60%)",
                opacity: 0.25,
                transform: "rotate(-2deg)",
              }}
            />
            {/* Orange border frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl"
              style={{
                border: "2px solid #E84C19",
                opacity: 0.35,
                borderRadius: "1.5rem",
              }}
            />

            {/* Photo container */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                background: "#161616",
              }}
            >
              <Image
                src="/petra-business2.png"
                alt="Petra – Personal KI-Assistentin"
                width={480}
                height={560}
                className="w-full h-auto object-cover object-center"
                style={{ display: "block" }}
                priority
              />
              {/* Bottom gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #0C0C0C 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Quote overlay card */}
            <div
              className="absolute -bottom-6 -left-6 max-w-[260px] p-5 rounded-2xl"
              style={{
                background: "rgba(22, 22, 22, 0.95)",
                border: "1px solid rgba(232, 76, 25, 0.25)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <p className="text-white/70 text-xs italic leading-relaxed mb-3">
                &ldquo;{hero.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0"
                  style={{ background: "#E84C19" }}
                  aria-hidden="true"
                />
                <div>
                  <div className="text-white text-xs font-semibold">{hero.quoteAuthor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0C0C0C 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
