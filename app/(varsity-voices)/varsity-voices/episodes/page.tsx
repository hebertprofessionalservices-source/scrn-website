import type { Metadata } from "next";
import Image from "next/image";
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
            Every Varsity Voices episode — ever.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-4">
          {sorted.map((ep, i) => (
            <AnimatedSection key={ep.id} delay={i * 40}>
              <article className="group bg-vv-navy-light border border-white/10 hover:border-vv-gold/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-vv-gold/50 to-transparent" />
                <div className="flex items-stretch gap-0">
                  {/* Thumbnail */}
                  {ep.thumbnailUrl ? (
                    <a
                      href={ep.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 relative w-32 md:w-44 overflow-hidden"
                      aria-label={`Watch ${ep.title} on YouTube`}
                    >
                      <Image
                        src={ep.thumbnailUrl}
                        alt={ep.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 128px, 176px"
                      />
                      <div className="absolute inset-0 bg-vv-navy/30 group-hover:bg-vv-navy/10 transition-colors flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-vv-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-vv-navy border-b-[6px] border-b-transparent ml-0.5" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex-shrink-0 w-14 h-auto bg-vv-navy flex items-center justify-center border-r border-white/10 px-4">
                      <span className="font-display text-xl text-vv-gold leading-none">
                        {String(ep.number).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0 p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-vv-gold/50 text-xs font-display">
                          {String(ep.number).padStart(2, "0")}
                        </span>
                        <span className="text-vv-off-white/20 text-xs">&middot;</span>
                        <span className="text-vv-off-white/30 text-xs">{ep.duration}</span>
                      </div>
                      <h2 className="font-editorial text-lg md:text-xl text-vv-off-white leading-snug group-hover:text-vv-gold transition-colors">
                        {ep.title}
                      </h2>
                      <p className="text-vv-off-white/50 text-xs mt-1.5 leading-relaxed line-clamp-2 hidden sm:block">
                        {ep.description}
                      </p>
                      <p className="text-vv-off-white/30 text-xs mt-2">{ep.date}</p>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2">
                      {ep.youtubeUrl && (
                        <a
                          href={ep.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs tracking-wider uppercase text-vv-off-white/40 hover:text-vv-gold transition-colors px-3 py-1.5 border border-white/10 hover:border-vv-gold/30 whitespace-nowrap"
                        >
                          Watch
                        </a>
                      )}
                      {ep.spotifyUrl && (
                        <a
                          href={ep.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs tracking-wider uppercase text-vv-off-white/40 hover:text-vv-gold transition-colors px-3 py-1.5 border border-white/10 hover:border-vv-gold/30"
                        >
                          Spotify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@StateChampRadio/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-vv-gold/40 text-vv-gold text-xs tracking-widest uppercase font-sans hover:bg-vv-gold hover:text-vv-navy transition-all active:scale-95"
          >
            Full Archive on YouTube &rarr;
          </a>
        </AnimatedSection>
      </div>
    </>
  );
}
