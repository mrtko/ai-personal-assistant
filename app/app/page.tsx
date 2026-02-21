/**
 * Startseite / Produkt-Index
 * Neue Seiten hier als Karte eintragen – Komponenten & Content im jeweiligen Namespace anlegen.
 *
 * Muster für eine neue Seite:
 *   Route:      app/[slug]/page.tsx
 *   Komponenten: components/[slug]/*.tsx
 *   Content:    content/[slug].ts
 */

import Link from "next/link";

const products = [
  {
    slug: "petra",
    name: "Petra",
    subtitle: "Personal Assistant",
    description:
      "KI-Assistentin für administrative Aufgaben – E-Mails, Aufgaben, Ideen. Alles via Telegram.",
    status: "live" as const,
  },
  // Nächste Seite hier eintragen:
  // { slug: "...", name: "...", subtitle: "...", description: "...", status: "soon" },
];

export default function Home() {
  return (
    <div
      style={{ background: "#0C0C0C", minHeight: "100vh" }}
      className="flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-2xl w-full">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: "#E84C19" }}
        >
          KI-Team
        </p>
        <h1
          className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-10"
        >
          Produkte
        </h1>

        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.slug}>
              {p.status === "live" ? (
                <Link
                  href={`/${p.slug}`}
                  className="flex items-center justify-between p-5 rounded-2xl group transition-colors duration-200"
                  style={{
                    background: "#161616",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">{p.name}</span>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(232,76,25,0.12)",
                          color: "#E84C19",
                        }}
                      >
                        {p.subtitle}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm">{p.description}</p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors duration-200 ml-4 flex-shrink-0">
                    →
                  </span>
                </Link>
              ) : (
                <div
                  className="flex items-center justify-between p-5 rounded-2xl opacity-50"
                  style={{
                    background: "#161616",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">{p.name}</span>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        Demnächst
                      </span>
                    </div>
                    <p className="text-white/40 text-sm">{p.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
