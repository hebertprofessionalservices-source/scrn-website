import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { episodes } from "@/data/episodes";
import { scheduledEpisodes } from "@/data/schedule";

export const metadata: Metadata = {
  title: "Varsity Voices — Mississippi High School Football",
  description: "Mississippi's podcast for high school football. Rankings, analysis, all-state picks — year-round.",
};

const latestEpisodes = episodes.slice(-4).reverse();
const nextEpisodes = scheduledEpisodes.slice(0, 3);

export default function VarsityVoicesPage() {
  const featuredEpisode = episodes[episodes.length - 1];

  return (
    <>
      {/* ==================== VV HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Deep navy gradient with texture */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, #0d1b2a 0%, #142235 40%, #0a1520 100%)",
          }}
          aria-hidden="true"
        />

        {/* Audio waveform decoration */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-24 opacity-10 pointer-events-none" aria-hidden="true">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="waveform-bar flex-shrink-0 bg-vv-gold"
              style={{
                width: "3px",
                height: `${20 + Math.sin(i * 0.4) * 40 + Math.random() * 30}px`,
                animationDelay: `${i * 30}ms`,
                animationDuration: `${800 + Math.random() * 600}ms`,
              }}
            />
          ))}
        </div>

        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-up flex justify-center mb-8">
            <div className="relative w-36 h-36 md:w-48 md:h-48">
              <Image
                src="/assets/varsityVocalsLogo.png"
                alt="Varsity Voices"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <p className="animate-fade-up delay-100 text-xs tracking-widest uppercase font-sans text-vv-gold mb-4">
            Mississippi High School Football
          </p>

          <h1 className="animate-fade-up delay-200 font-editorial text-5xl sm:text-7xl md:text-8xl text-vv-off-white leading-tight">
            Mississippi&apos;s #1 Source<br />
            <span className="text-vv-gold">for High School Football</span>
          </h1>

          <p className="animate-fade-up delay-300 text-vv-off-white/60 text-base md:text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Rankings, analysis, all-state picks, and honest conversation about Mississippi football. Year-round.
          </p>

          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/varsity-voices/episodes"
              className="flex items-center gap-2 px-6 py-3 bg-vv-gold text-vv-navy text-xs tracking-widest uppercase font-sans font-semibold hover:bg-vv-gold-light transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              All Episodes
            </Link>
            <Link
              href="/varsity-voices/schedule"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-vv-off-white text-xs tracking-widest uppercase font-sans hover:border-vv-gold/60 hover:bg-white/5 transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              Upcoming Shows
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-vv-gold mx-auto" />
        </div>
      </section>

      {/* ==================== FEATURED EPISODE ==================== */}
      <section className="bg-vv-navy-mid border-y border-white/10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <div className="gold-rule mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl text-vv-off-white">
              Latest Episode
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-vv-navy-light border border-white/10 p-6 md:p-10 relative overflow-hidden hover:border-vv-gold/30 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-vv-gold via-vv-gold/40 to-transparent" />
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Episode number */}
                <div className="flex-shrink-0 w-20 h-20 bg-vv-gold flex items-center justify-center">
                  <span className="font-display text-vv-navy text-3xl leading-none">
                    {String(featuredEpisode.number).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-widest uppercase text-vv-gold font-sans mb-2">
                    Most Recent
                  </p>
                  <h3 className="font-editorial text-3xl md:text-4xl text-vv-off-white leading-tight">
                    {featuredEpisode.title}
                  </h3>
                  <p className="text-vv-off-white/60 text-sm mt-3 leading-relaxed max-w-2xl">
                    {featuredEpisode.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-vv-off-white/40 uppercase tracking-wider">
                    <span>{featuredEpisode.date}</span>
                    <span>&middot;</span>
                    <span>{featuredEpisode.duration}</span>
                  </div>
                </div>
                <Link
                  href="/varsity-voices/episodes"
                  className="flex-shrink-0 px-6 py-3 border border-vv-gold text-vv-gold text-xs tracking-widest uppercase font-sans hover:bg-vv-gold hover:text-vv-navy transition-all active:scale-95 text-center"
                >
                  Listen &rarr;
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== UPCOMING SCHEDULE ==================== */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="mb-8 flex items-center justify-between">
          <div>
            <div className="gold-rule mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl text-vv-off-white">
              Coming Up
            </h2>
          </div>
          <Link
            href="/varsity-voices/schedule"
            className="text-xs tracking-widest uppercase text-vv-gold hover:text-vv-gold-light transition-colors hidden sm:block"
          >
            Full Schedule &rarr;
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nextEpisodes.map((ep, i) => (
            <AnimatedSection key={ep.id} delay={i * 80}>
              <div className="bg-vv-navy-light border border-white/10 p-5 hover:border-vv-gold/30 transition-colors group h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-vv-gold font-display text-sm tracking-wider">{ep.date}</span>
                  <span className="text-vv-off-white/30 text-xs">{ep.time}</span>
                </div>
                <h3 className="font-editorial text-xl text-vv-off-white leading-tight group-hover:text-vv-gold transition-colors flex-1">
                  {ep.title}
                </h3>
                <p className="text-vv-off-white/50 text-xs mt-3 leading-relaxed line-clamp-2">
                  {ep.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ==================== RECENT EPISODES ==================== */}
      <section className="bg-vv-navy-mid border-y border-white/10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 flex items-center justify-between">
            <div>
              <div className="gold-rule mb-4" />
              <h2 className="font-editorial text-4xl md:text-5xl text-vv-off-white">Episodes</h2>
            </div>
            <Link
              href="/varsity-voices/episodes"
              className="text-xs tracking-widest uppercase text-vv-gold hover:text-vv-gold-light transition-colors hidden sm:block"
            >
              All Episodes &rarr;
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latestEpisodes.map((ep, i) => (
              <AnimatedSection key={ep.id} delay={i * 60}>
                <div className="group bg-vv-navy border border-white/10 p-5 hover:border-vv-gold/30 transition-colors h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-4xl text-vv-off-white/10 leading-none">
                      {String(ep.number).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-vv-off-white/30">{ep.duration}</span>
                  </div>
                  <h3 className="font-editorial text-lg text-vv-off-white leading-snug group-hover:text-vv-gold transition-colors flex-1">
                    {ep.title}
                  </h3>
                  <p className="text-vv-off-white/40 text-xs mt-3">{ep.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL / FOLLOW ==================== */}
      <section className="bg-vv-navy-mid border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-editorial text-3xl md:text-4xl text-vv-off-white mb-4">
              Follow Along
            </h2>
            <p className="text-vv-off-white/50 text-sm mb-8">
              Rankings, scores, and quick takes all season long.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://twitter.com/StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-vv-off-white text-xs tracking-widest uppercase font-sans hover:border-vv-gold/60 hover:text-vv-gold transition-all"
              >
                Twitter / X
              </a>
              <a
                href="https://www.youtube.com/@StateChampRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-vv-off-white text-xs tracking-widest uppercase font-sans hover:border-vv-gold/60 hover:text-vv-gold transition-all"
              >
                YouTube
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
