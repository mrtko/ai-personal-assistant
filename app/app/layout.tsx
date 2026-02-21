import type { Metadata } from "next";
import { DM_Sans, League_Spartan } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = League_Spartan({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KI-Team",
  description: "KI-gestützte Produkte und Assistenten für deinen Alltag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-[family-name:var(--font-dm-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
