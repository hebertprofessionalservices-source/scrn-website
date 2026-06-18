import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Watch — Varsity Voices",
  description: "Watch Varsity Voices episodes on YouTube.",
};

export default function WatchPage() {
  const videoEpisodes = episodes.filter((ep) => ep.youtubeUrl);
  const hasVideos = videoEpisodes.length > 0;

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
          <h1 className="font-editorial text-6xl md:text-8xl text-vv-off-white leading-tight">Watch</h1>
          <p className="text-vv-off-white/50 mt-4 text-base max-w-lg">
            Catch Varsity Voices on YouTube — full episodes and highlights.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* YouTube Channel CTA */}
        <AnimatedSection className="mb-12">
          <div className="bg-vv-navy-light border border-white/10 p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-vv-gold via-vv-gold/40 to-transparent" />
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs tracking-widest uppercase text-vv-gold font-sans mb-2">YouTube</p>
              <h2 className="font-editorial text-3xl md:text-4xl text-vv-off-white">
                State Championships Radio Network
              </h2>
              <p className="text-vv-off-white/50 text-sm mt-3 max-w-md">
                Full episodes, championship game highlights, and analysis — all on the SCRN YouTube channel.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@StateChampRadio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-vv-gold text-vv-navy text-xs tracking-widest uppercase font-sans font-semibold hover:bg-vv-gold-light transition-all active:scale-95"
            >
              Subscribe on YouTube
            </a>
          </div>
        </AnimatedSection>

        {/* Video embed placeholder */}
        <AnimatedSection className="mb-10">
          <div className="gold-rule mb-4" />
          <h2 className="font-editorial text-4xl text-vv-off-white mb-6">Latest Video</h2>
          <div className="aspect-video bg-vv-navy-light border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-vv-gold/40 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-vv-gold/60 border-b-8 border-b-transparent ml-1" style={{ borderLeftWidth: "16px" }} />
                </div>
                <p className="text-vv-off-white/40 text-sm">
                  Video content coming soon
                </p>
                <a
                  href="https://www.youtube.com/@StateChampRadio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs tracking-widest uppercase text-vv-gold hover:text-vv-gold-light transition-colors"
                >
                  Watch on YouTube &rarr;
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* All past episodes link */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center justify-center">
            <a
              href="https://www.youtube.com/@StateChampRadio/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-vv-gold/40 text-vv-gold text-xs tracking-widest uppercase font-sans hover:bg-vv-gold hover:text-vv-navy transition-all active:scale-95"
            >
              All Past Episodes on YouTube &rarr;
            </a>
          </div>
        </AnimatedSection>

        {/* Episodes with video links */}
        {hasVideos && (
          <AnimatedSection>
            <div className="gold-rule mb-4" />
            <h2 className="font-editorial text-4xl text-vv-off-white mb-6">Episodes on Video</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videoEpisodes.map((ep, i) => (
                <AnimatedSection key={ep.id} delay={i * 60}>
                  <a
                    href={ep.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-vv-navy-light border border-white/10 p-5 hover:border-vv-gold/30 transition-colors flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-vv-gold/10 border border-vv-gold/20 flex items-center justify-center">
                      <span className="font-display text-vv-gold text-lg leading-none">
                        {String(ep.number).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-editorial text-lg text-vv-off-white leading-snug group-hover:text-vv-gold transition-colors truncate">
                        {ep.title}
                      </h3>
                      <p className="text-vv-off-white/30 text-xs mt-1">{ep.duration}</p>
                    </div>
                    <span className="text-vv-gold/50 group-hover:text-vv-gold transition-colors text-sm" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </>
  );
}
