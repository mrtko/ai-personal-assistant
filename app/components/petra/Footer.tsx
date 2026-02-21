import Image from "next/image";
import { petra } from "@/content/petra";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-6 sm:px-10 py-12 overflow-hidden"
      style={{ background: "#0C0C0C", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="/petra" className="flex items-center flex-shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-200">
            <div className="bg-white rounded-md px-2 py-0.5">
              <Image
                src="/logo.jpg"
                alt="STEP2 Martin Kompan"
                width={100}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </div>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-white/30 font-medium" aria-label="Footer Navigation">
            {[
              { label: "Über Petra", href: "#petra" },
              { label: "Module", href: "#module" },
              { label: "Wie es funktioniert", href: "#workflow" },
              { label: "Technisches", href: "#tech" },
              { label: "Kontakt", href: petra.cta.href },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/20 flex-shrink-0">
            © {year} STEP2 Martin Kompan
          </p>
        </div>

        {/* Divider */}
        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/15 text-center">
            Petra – Personal Assistant 2.0 · Powered by KI-Automatisierung
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse-brand"
              style={{ background: "#E84C19" }}
              aria-hidden="true"
            />
            <span className="text-xs text-white/20">System aktiv</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
