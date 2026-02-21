import { petra } from "@/content/petra";

const { testimonials } = petra;

export default function Testimonials() {
  return (
    <section
      className="section-surface relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#E84C19" }}>
            {testimonials.label}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            {testimonials.heading}
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">{testimonials.subheading}</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.items.map((item, i) => (
            <figure
              key={item.author}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: "#161616",
                border: i === 0
                  ? "1px solid rgba(232,76,25,0.25)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Orange accent on featured card */}
              {i === 0 && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: "#E84C19" }}
                />
              )}

              {/* Quote icon */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-5 text-base"
                style={{
                  background: i === 0 ? "rgba(232,76,25,0.15)" : "#1E1E1E",
                  border: i === 0 ? "1px solid rgba(232,76,25,0.25)" : "1px solid rgba(255,255,255,0.08)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className="flex-1 mb-6">
                <p className="text-white/65 text-sm leading-relaxed italic">
                  {item.quote}
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#E84C19" }}
                  aria-hidden="true"
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.author}</div>
                  <div className="text-white/35 text-xs">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
