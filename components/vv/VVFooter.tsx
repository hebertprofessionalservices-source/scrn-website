import Link from "next/link";
import Image from "next/image";

export function VVFooter() {
  return (
    <footer className="bg-vv-navy-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/assets/varsityVocalsLogo.png"
                alt="Varsity Voices"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-vv-off-white/60 text-sm leading-relaxed max-w-xs">
              Mississippi&apos;s podcast for high school football. Rankings, analysis, and conversation — year round.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest uppercase text-vv-gold mb-4 font-sans font-medium">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/varsity-voices" },
                { label: "Episodes", href: "/varsity-voices/episodes" },
                { label: "Schedule", href: "/varsity-voices/schedule" },
                { label: "Watch", href: "/varsity-voices/watch" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-widest uppercase text-vv-gold mb-4 font-sans font-medium">
              Follow
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://twitter.com/StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                Twitter / X
              </a>
              <a
                href="https://www.youtube.com/@StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576332047057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.twitch.tv/statechampradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vv-off-white/60 hover:text-vv-off-white transition-colors text-sm"
              >
                Twitch
              </a>
            </div>
          </div>
        </div>

        {/* SCRN Credit */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-vv-off-white/30 text-xs">
              &copy; {new Date().getFullYear()} Shotts Media, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 opacity-60">
                <Image
                  src="/assets/scrnLogo.png"
                  alt="State Championships Radio Network"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-vv-off-white/40 text-xs tracking-wider uppercase">
                Powered by State Championships Radio Network
              </p>
            </div>
          </div>
        </div>

        {/* HPS Credit */}
        <div className="border-t border-white/5 mt-6 pt-6 flex flex-col items-center gap-3">
          <p className="text-vv-off-white/30 text-xs tracking-wide text-center">
            Created and maintained by Hebert Professional Services, LLC
          </p>
          <div className="relative w-20 h-16 opacity-40">
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
