import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "State Championships Radio Network",
  description:
    "Mississippi's home for MHSAA high school football state championships on the radio. 7 games, 3 days, 40+ stations statewide.",
  openGraph: {
    title: "State Championships Radio Network",
    description: "Broadcasting all seven MHSAA high school football championships. Mississippi-made.",
    siteName: "SCRN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${outfit.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
