"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Broadcasts", href: "/broadcasts" },
  { label: "Articles", href: "/articles" },
  { label: "Our Team", href: "/our-team" },
  { label: "Sponsors", href: "/our-sponsors" },
];

export function SCRNNav() {
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
            ? "bg-scrn-black/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative w-12 h-12 md:w-14 md:h-14" onClick={() => setMenuOpen(false)}>
              <Image
                src="/assets/scrnLogo.png"
                alt="State Championships Radio Network"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-xs tracking-widest uppercase font-sans font-medium text-scrn-silver hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              {/* Varsity Voices button */}
              <Link
                href="/varsity-voices"
                className="ml-2 px-3 py-2 text-xs tracking-widest uppercase font-sans font-medium border border-vv-gold/60 text-vv-gold hover:bg-vv-gold hover:text-vv-navy transition-all duration-150"
              >
                Varsity Voices
              </Link>
            </div>

            {/* Listen Live + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/broadcasts"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-scrn-red text-white text-xs tracking-widest uppercase font-sans font-medium transition-all duration-200 hover:bg-scrn-red-bright glow-red-sm hover:glow-red active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-live" aria-hidden="true" />
                Listen Live
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-scrn-black transition-all duration-300 flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          {/* Red accent line */}
          <div className="w-12 h-0.5 bg-scrn-red mb-8" />

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-display text-white hover:text-scrn-red transition-colors duration-150 py-2"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/varsity-voices"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-display text-vv-gold hover:text-vv-gold-light transition-colors duration-150 py-2"
            >
              Varsity Voices
            </Link>
          </nav>

          <Link
            href="/broadcasts"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 bg-scrn-red text-white text-sm tracking-widest uppercase font-medium mt-auto"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-live" />
            Listen Live
          </Link>

          <p className="text-scrn-silver text-xs tracking-widest mt-4 text-center">
            STATE CHAMPIONSHIPS RADIO NETWORK
          </p>
        </div>
      </div>
    </>
  );
}
