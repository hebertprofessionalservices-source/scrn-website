import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Episodes — Varsity Voices",
  description: "All Varsity Voices podcast episodes covering Mississippi high school football.",
};

export default function EpisodesPage() {
  const sorted = [...episodes].sort((a, b) => b.number - a.number);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #0d1b2a 0%, #0a1520 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-rule mb-6" />
          <h1 className="font-editorial text-6xl md:text-8xl text-vv-off-white leading-tight">
            Episodes
          </h1>
          <p className="text-vv-off-white/50 mt-4 text-base max-w-lg">
            Every Varsity Voices episode, newest first.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-4">
          {sorted.map((ep, i) => (
            <AnimatedSection key={ep.id} delay={i * 60}>
              <article className="group bg-vv-navy-light border border-white/10 p-5 md:p-6 hover:border-vv-gold/30 transition-colors relative overflow-hidden flex items-center gap-5">
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-vv-gold/50 to-transparent" />
                {/* Episode number */}
                <div className="flex-shrink-0 w-14 h-14 bg-vv-navy flex items-center justify-center border border-white/10">
                  <span className="font-display text-xl text-vv-gold leading-none">
                    {String(ep.number).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-editorial text-xl md:text-2xl text-vv-off-white leading-snug group-hover:text-vv-gold transition-colors">
                    {ep.title}
                  </h2>
                  <p className="text-vv-off-white/50 text-sm mt-1 leading-relaxed line-clamp-2">
                    {ep.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-vv-off-white/30 uppercase tracking-wider">
                    <span>{ep.date}</span>
                    <span>&middot;</span>
                    <span>{ep.duration}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 hidden md:flex items-center gap-2">
                  {ep.spotifyUrl && (
                    <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-vv-off-white/40 hover:text-vv-gold transition-colors px-2 py-1 border border-white/10 hover:border-vv-gold/30">
                      Spotify
                    </a>
                  )}
                  {ep.youtubeUrl && (
                    <a href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-vv-off-white/40 hover:text-vv-gold transition-colors px-2 py-1 border border-white/10 hover:border-vv-gold/30">
                      YouTube
                    </a>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
