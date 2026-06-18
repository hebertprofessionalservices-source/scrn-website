import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { scheduledEpisodes } from "@/data/schedule";

export const metadata: Metadata = {
  title: "Schedule — Varsity Voices",
  description: "Upcoming Varsity Voices podcast episodes and show schedule.",
};

export default function SchedulePage() {
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
            Schedule
          </h1>
          <p className="text-vv-off-white/50 mt-4 text-base max-w-lg">
            Upcoming episodes on Varsity Voices. All times Central.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-4">
          {scheduledEpisodes.map((ep, i) => (
            <AnimatedSection key={ep.id} delay={i * 80}>
              <div className="group bg-vv-navy-light border border-white/10 p-6 md:p-8 hover:border-vv-gold/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-vv-gold/50 to-transparent" />
                <div className="pl-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0 text-center md:w-36">
                    <p className="font-display text-2xl text-vv-gold leading-tight">{ep.date}</p>
                    <p className="text-vv-off-white/40 text-xs mt-1 tracking-wider">{ep.time}</p>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 bg-vv-gold/10 border border-vv-gold/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-vv-gold/60" />
                      <span className="text-vv-gold/70 text-xs uppercase tracking-widest">Upcoming</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-editorial text-2xl md:text-3xl text-vv-off-white leading-snug group-hover:text-vv-gold transition-colors">
                      {ep.title}
                    </h2>
                    <p className="text-vv-off-white/50 text-sm mt-2 leading-relaxed">{ep.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="mt-12">
          <div className="bg-vv-navy-light border border-white/10 p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vv-gold/30 to-transparent" />
            <h2 className="font-editorial text-3xl text-vv-off-white mb-3">Never Miss an Episode</h2>
            <p className="text-vv-off-white/50 text-sm mb-6 max-w-sm mx-auto">
              Subscribe on your platform of choice and get every episode when it drops.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="px-4 py-2 border border-white/20 text-vv-off-white/50 text-xs tracking-widest uppercase font-sans">
                Spotify — Coming Soon
              </span>
              <span className="px-4 py-2 border border-white/20 text-vv-off-white/50 text-xs tracking-widest uppercase font-sans">
                Apple Podcasts — Coming Soon
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
