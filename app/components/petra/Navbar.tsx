"use client";
import Image from "next/image";
import { petra } from "@/content/petra";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: "rgba(12, 12, 12, 0.72)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)",
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/petra" className="flex items-center flex-shrink-0">
          <div className="bg-white rounded-lg px-3 py-1.5">
            <Image
              src="/logo.jpg"
              alt="STEP2 Martin Kompan"
              width={150}
              height={42}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
        </a>

        {/* Nav Links – hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {[
            { label: "Über Petra", href: "#petra" },
            { label: "Module", href: "#module" },
            { label: "Wie es funktioniert", href: "#workflow" },
            { label: "Technik", href: "#tech" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={petra.cta.href}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#E84C19] hover:bg-[#F05A25] transition-colors duration-200"
        >
          {petra.cta.button}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
