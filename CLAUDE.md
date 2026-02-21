# CLAUDE.md – Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Neue Seite anlegen – Muster
Jede Seite folgt demselben Namespace-Muster:

```
Route:        app/app/[slug]/page.tsx
Komponenten:  app/components/[slug]/*.tsx
Content:      app/content/[slug].ts
```

Neue Seite im Produkt-Index eintragen: `app/app/page.tsx` → `products`-Array ergänzen.

Beim Start einer neuen Seite immer prüfen:
1. Gibt es Brand Assets in `brand_assets/`?
2. Gibt es Fotos/Bilder in `ressources/`?
3. Public-Ordner: Bilder nach `app/public/[slug]-*.png` kopieren.

## Local Server (Next.js)
- Dev server starten: in `app/` → `npm run dev`
- Dev-URL: `http://localhost:3000/[slug]` (z.B. `/petra`)
- Server läuft bereits? Keinen zweiten starten.

## Screenshot Workflow
- Screenshot-URL: `http://localhost:3000/[slug]`
- Nach Screenshot: PNG mit Read-Tool öffnen und visuell vergleichen
- Konkret benennen: "heading ist 32px aber Referenz zeigt ~24px", "card gap ist 16px aber sollte 24px sein"
- Prüfen: Spacing/Padding, Font-Größe/-Gewicht/Line-height, Farben (exakter Hex), Ausrichtung, Border-radius, Shadows, Bildgrößen

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Projekt-Konventionen (Next.js + Tailwind v4)
- Content: `app/content/[slug].ts` – alle Texte zentral, kein CMS
- Komponenten: `app/components/[slug]/*.tsx` – eine Datei pro Sektion
- Shared UI: `app/components/ui/*.tsx` – seitenübergreifende Elemente (z.B. ShaderBackground)
- Styles: Tailwind v4 mit `@import "tailwindcss"` in `app/app/globals.css`
- Design-System: Dark (`#0C0C0C`), Surface (`#161616`), Elevated (`#1E1E1E`)
- Schriften: League Spartan (Headings, `--font-playfair`) + DM Sans (Body, `--font-dm-sans`)
- Hauptfarbe: **Orange `#E84C19`** – keine Default-Tailwind-Farben
- Mobile-first responsive

## Brand Assets
- Immer `brand_assets/` prüfen vor dem Design. Kann Logos, Farbpaletten, Style Guides enthalten.
- Vorhandene Assets verwenden, keine Platzhalter wenn echte Assets vorhanden.
- JPG-Logos auf dunklem BG: `<div className="bg-white rounded-lg px-2.5 py-1">` Container – NICHT `brightness-0 invert`

## Texte / Copy
- Kein "–" (Gedankenstrich) als Satzzeichen in Texten verwenden – wirkt KI-generiert
- Stattdessen: Komma, Punkt oder Doppelpunkt je nach Kontext
- Numerische Ranges wie "20–30" oder "1–2" sind OK

## Design-Patterns (bewährt)
Detaillierte Patterns → `memory/css-patterns.md`

**Glass Cards:**
```tsx
style={{
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(28px) saturate(220%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.4)",
}}
// + Gloss-Overlay: absolute div, linear-gradient 180deg rgba(255,255,255,0.07)→0
```

**Orange Ambient (Glass sichtbar machen):**
```css
/* In globals.css auf .page-bg und .section-surface */
background-image: radial-gradient(ellipse 1000px 700px at 8% 12%,
  rgba(232,76,25,0.055) 0%, transparent 60%), ...;
```

**Shader Background (WebGL):**
```tsx
import ShaderBackground from "@/components/ui/shader-background";
// Innerhalb einer section mit position: relative
<ShaderBackground /> // opacity: 0.09, mix-blend-mode: screen
```

## Anti-Generic Guardrails
- **Colors:** Kein Default-Tailwind-Palette. Primärfarbe: Orange, alle Ableitungen davon.
- **Shadows:** Kein flaches `shadow-md`. Layered, color-tinted shadows mit niedriger Opacity.
- **Typography:** Nie dieselbe Schrift für Headings und Body. League Spartan (Display) + DM Sans (Body). Tight tracking auf großen Headings, generous line-height (1.7) auf Body.
- **Gradients:** Mehrere radiale Gradienten übereinander. Grain/Texture via SVG Noise Filter für Tiefe.
- **Animations:** Nur `transform` und `opacity` animieren. Nie `transition-all`. Spring-style Easing.
- **Interactive States:** Jedes klickbare Element braucht hover, focus-visible und active State.
- **Images:** Gradient Overlay (`bg-gradient-to-t from-black/60`) + Color Treatment Layer mit `mix-blend-multiply`.
- **Spacing:** Intentionale, konsistente Spacing Tokens – keine zufälligen Tailwind-Steps.
- **Depth:** Surfaces haben Layering-System (base → elevated → floating).

## Hard Rules
- Keine Sektionen, Features oder Inhalte hinzufügen die nicht in der Referenz sind
- Kein "Verbessern" eines Referenz-Designs – nur nachbauen
- Nicht nach einem Screenshot-Durchgang aufhören
- Kein `transition-all`
- Kein Default-Tailwind-Blau/Indigo als Primärfarbe
