import Link from "next/link";
import Image from "next/image";

export function SCRNFooter() {
  return (
    <footer className="bg-scrn-dark-2 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/assets/scrnLogo.png"
                alt="State Championships Radio Network"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-scrn-silver text-sm leading-relaxed max-w-xs">
              Broadcasting all seven MHSAA high school football state championships. Mississippi-made.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5">
              <a
                href="https://twitter.com/StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                X / Twitter
              </a>
              <a
                href="https://www.youtube.com/@StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576332047057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                Facebook
              </a>
              <a
                href="https://www.twitch.tv/statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scrn-silver hover:text-white transition-colors text-sm tracking-wider uppercase"
              >
                Twitch
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-scrn-silver mb-4 font-sans font-medium">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Broadcasts", href: "/broadcasts" },
                { label: "Articles", href: "/articles" },
                { label: "Our Team", href: "/our-team" },
                { label: "Sponsors", href: "/our-sponsors" },
                { label: "Varsity Voices", href: "/varsity-voices" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-scrn-silver hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-scrn-silver mb-4 font-sans font-medium">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-scrn-silver">
              <p className="text-white font-medium">Shotts Media, LLC</p>
              <p>136 Katherine Pointe Dr.</p>
              <p>Madison, MS 39110</p>
              <a
                href="tel:6015727755"
                className="hover:text-white transition-colors mt-1"
              >
                (601) 572-7755
              </a>
              <a
                href="mailto:shottsmedia@gmail.com"
                className="hover:text-white transition-colors"
              >
                shottsmedia@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-scrn-silver text-xs">
            &copy; {new Date().getFullYear()} Shotts Media, LLC. All rights reserved.
          </p>
          <p className="text-scrn-silver/50 text-xs tracking-widest uppercase">
            State Championships Radio Network
          </p>
        </div>

        {/* HPS Credit */}
        <div className="border-t border-white/5 mt-6 pt-6 flex flex-col items-center gap-3">
          <p className="text-scrn-silver/40 text-xs tracking-wide text-center">
            Created and maintained by Hebert Professional Services, LLC
          </p>
          <div className="relative w-10 h-10 opacity-40">
            <Image
              src="/assets/hps-logo.png"
              alt="Hebert Professional Services"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
