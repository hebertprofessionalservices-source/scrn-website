import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { radioStations, streamPlatforms } from "@/data/broadcasts";

export const metadata: Metadata = {
  title: "Broadcasts — State Championships Radio Network",
  description: "Radio stations and streaming platforms carrying SCRN's live coverage of the MHSAA football state championships.",
};

const amStations = radioStations.filter((s) => s.band === "AM");
const fmStations = radioStations.filter((s) => s.band === "FM");

export default function BroadcastsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 led-texture opacity-15" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95))" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="red-rule mb-6" />
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight leading-none">
            Broadcasts
          </h1>
          <p className="text-scrn-silver mt-4 text-base md:text-lg max-w-xl">
            Find SCRN live on the radio or stream online during championship week.
          </p>
        </div>
      </section>

      {/* ===== RADIO / AUDIO SECTION ===== */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-scrn-red animate-live" aria-hidden="true" />
            <p className="text-xs tracking-widest uppercase text-scrn-red font-sans font-medium">Live Game Audio</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
            Radio Stations
          </h2>
          <p className="text-scrn-silver text-sm mt-2 max-w-xl">
            These stations carry live play-by-play audio of MHSAA championship games during championship week. Find your local station below.
          </p>
        </AnimatedSection>

        {/* FM Stations */}
        <AnimatedSection className="mt-10 mb-4" delay={50}>
          <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-5">FM</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {fmStations.map((station, i) => (
              <div
                key={`${station.callSign}-${station.frequency}`}
                className="bg-scrn-dark p-4 flex items-center justify-between group hover:bg-scrn-dark-2 transition-colors"
                style={{ animationDelay: `${i * 20}ms` }}
              >
                <div>
                  <p className="font-display text-xl text-white leading-none">{station.callSign}</p>
                  <p className="text-scrn-silver text-xs mt-1">{station.market}</p>
                </div>
                <span className="font-display text-scrn-red text-lg">{station.frequency} FM</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* AM Stations */}
        <AnimatedSection className="mt-10" delay={100}>
          <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-5">AM</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {amStations.map((station) => (
              <div
                key={`${station.callSign}-${station.frequency}-am`}
                className="bg-scrn-dark p-4 flex items-center justify-between group hover:bg-scrn-dark-2 transition-colors"
              >
                <div>
                  <p className="font-display text-xl text-white leading-none">{station.callSign}</p>
                  <p className="text-scrn-silver text-xs mt-1">{station.market}</p>
                </div>
                <span className="font-display text-scrn-red text-lg">{station.frequency} AM</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ===== VIDEO STREAMING SECTION ===== */}
      <section className="bg-scrn-dark border-y border-white/10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <div className="red-rule mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
              Video Streaming
            </h2>
            <p className="text-scrn-silver text-sm mt-2 max-w-xl">
              Watch championship games live on these platforms. Select games air simultaneously on multiple platforms.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {streamPlatforms.map((platform, i) => (
              <AnimatedSection key={platform.id} delay={i * 60}>
                <div className="group bg-scrn-dark-2 border border-white/10 p-6 hover:border-scrn-red/40 transition-colors duration-200 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-2xl text-white uppercase">{platform.name}</h3>
                    {platform.url && (
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest uppercase text-scrn-red hover:text-scrn-red-bright transition-colors"
                        aria-label={`Watch on ${platform.name}`}
                      >
                        Watch &rarr;
                      </a>
                    )}
                  </div>
                  <p className="text-scrn-silver text-sm leading-relaxed flex-1">{platform.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
