"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const vvLinks = [
  { label: "Episodes", href: "/varsity-voices/episodes" },
  { label: "Schedule", href: "/varsity-voices/schedule" },
  { label: "Watch", href: "/varsity-voices/watch" },
];

export function VVNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-vv-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-vv-navy/60 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/varsity-voices" className="flex-shrink-0 relative w-10 h-10 md:w-12 md:h-12" onClick={() => setMenuOpen(false)}>
              <Image
                src="/assets/varsityVocalsLogo.png"
                alt="Varsity Voices"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/varsity-voices"
                className="px-3 py-2 text-xs tracking-widest uppercase font-sans font-medium text-vv-off-white/70 hover:text-vv-off-white transition-colors duration-150"
              >
                Home
              </Link>
              {vvLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-xs tracking-widest uppercase font-sans font-medium text-vv-off-white/70 hover:text-vv-off-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              {/* SCRN link */}
              <Link
                href="/"
                className="ml-2 px-3 py-2 text-xs tracking-widest uppercase font-sans font-medium border border-scrn-red/50 text-scrn-red hover:bg-scrn-red hover:text-white transition-all duration-150"
              >
                SCRN
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/varsity-voices/episodes"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-vv-gold text-vv-navy text-xs tracking-widest uppercase font-sans font-semibold transition-all duration-200 hover:bg-vv-gold-light active:scale-95"
              >
                Subscribe
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span className={`block w-6 h-0.5 bg-vv-off-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-vv-off-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-vv-off-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-vv-navy transition-all duration-300 flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          <div className="w-12 h-0.5 bg-vv-gold mb-8" />
          <nav className="flex flex-col gap-2 flex-1">
            <Link
              href="/varsity-voices"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-editorial text-vv-off-white hover:text-vv-gold transition-colors py-2"
            >
              Home
            </Link>
            {vvLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-editorial text-vv-off-white hover:text-vv-gold transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-editorial text-scrn-red hover:text-scrn-red-bright transition-colors py-2"
            >
              State Championships Radio Network
            </Link>
          </nav>
          <Link
            href="/varsity-voices/episodes"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-vv-gold text-vv-navy text-sm tracking-widest uppercase font-semibold mt-auto"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </>
  );
}
