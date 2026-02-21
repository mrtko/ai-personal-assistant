import { petra } from "@/content/petra";

const { techStack } = petra;

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Orange ambient structure */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(circle at 15% 20%, rgba(232,76,25,0.08) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(circle at 85% 80%, rgba(232,76,25,0.06) 0%, transparent 60%)" }} />
      </div>
      {/* Accent top line */}
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
            05
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
              {techStack.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {techStack.heading}
            </h2>
            {techStack.subheading && (
              <p className="text-white/40 text-base leading-relaxed max-w-2xl">{techStack.subheading}</p>
            )}
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Tech Stack */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-white font-semibold text-base mb-6">{techStack.techHeading}</h3>
            <div className="space-y-3">
              {techStack.tech.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-4 p-4 rounded-xl hover:border-white/12 transition-colors duration-200"
                  style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "#2A2A2A" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{item.desc}</div>
                    {"detail" in item && item.detail && (
                      <div className="text-white/25 text-xs mt-1 leading-relaxed">{item.detail}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Prerequisites */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-white font-semibold text-base mb-6">{techStack.prerequisitesHeading}</h3>
            <ul className="space-y-3">
              {techStack.prerequisites.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "#2A2A2A" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <span className="text-white/60 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {techStack.note && (
              <div
                className="mt-5 rounded-xl p-4"
                style={{
                  background: "rgba(232,76,25,0.06)",
                  border: "1px solid rgba(232,76,25,0.15)",
                  borderLeft: "3px solid rgba(232,76,25,0.5)",
                }}
              >
                <p className="text-white/50 text-xs leading-relaxed">{techStack.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
