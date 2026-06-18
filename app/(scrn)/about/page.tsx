import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About — State Championships Radio Network",
  description: "Mississippi broadcasters covering the MHSAA high school football state championships statewide.",
};

const stats = [
  { value: "35,968", label: "Avg. listeners per hour", context: "Championship weekend" },
  { value: "17,027", label: "MPB Radio", context: "Avg. hourly listeners" },
  { value: "8,679", label: "ESPN 1059", context: "Avg. hourly listeners" },
  { value: "145.7k", label: "YouTube impressions", context: "2024 championship week" },
  { value: "23,736", label: "Live viewers", context: "YouTube peak 2024" },
  { value: "5,100", label: "Watch hours", context: "Live + archive 2024" },
];

const testimonials = [
  {
    quote:
      "Really good radio call. I was traveling and could listen the whole way. That's what you want from statewide coverage.",
    name: "Rick Cleveland",
    title: "11-time MS Sports Writer of the Year · MS Sports Hall of Fame",
  },
  {
    quote:
      "The best broadcasters in the business. Every kid in this state deserves to hear their championship game on the radio, and these guys make that happen.",
    name: "Reid Vance",
    title: "Voice of the Mississippi College Choctaws · MC Communication Chair",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 led-texture opacity-15" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95))" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="red-rule mb-6" />
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight leading-none">
            About State Championships Radio Network
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-sans text-white text-lg md:text-xl leading-relaxed border-l-4 border-scrn-red pl-6">
            A few of us were calling high school games before these kids ever put on a varsity jersey. The
            MHSAA state championships are the biggest three days in Mississippi football — and we&apos;ve
            been on the other end of the radio for several years now, trying to do them right. This network
            didn&apos;t come from a corporate plan. It started with a group of Mississippi broadcasters who
            figured someone should be covering these games statewide.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mt-8">
          <p className="font-sans text-scrn-silver text-base leading-relaxed">
            State Championships Radio Network is produced by{" "}
            <span className="text-white font-medium">Shotts Media, LLC</span>, a Mississippi-based sports
            media company. Every December, we put together a crew of the best broadcasters in the state
            and send them to Southern Miss&apos;s Carlisle-Faulkner Field to cover all seven MHSAA football
            championship games — from 1A through 6A — live on the radio and online.
          </p>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <section className="bg-scrn-dark border-y border-white/10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <div className="red-rule mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
              2024 By the Numbers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80}>
                <div className="bg-scrn-dark p-6 md:p-8">
                  <p className="font-display text-4xl md:text-5xl text-scrn-red leading-none">
                    {stat.value}
                  </p>
                  <p className="font-sans font-semibold text-white text-sm uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                  <p className="text-scrn-silver text-xs mt-1">{stat.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10">
          <div className="red-rule mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
            What They&apos;re Saying
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <blockquote className="border-l-4 border-scrn-red pl-6 py-2">
                <p className="font-sans text-white text-lg leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-sans font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-scrn-silver text-xs mt-1">{t.title}</p>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-scrn-dark border-t border-white/10 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <div className="red-rule mb-4" />
            <h2 className="font-display text-4xl text-white uppercase tracking-tight">Contact</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-scrn-dark-2 border border-white/10 p-6 md:p-8 max-w-sm">
              <p className="font-sans font-semibold text-white text-base">Shotts Media, LLC</p>
              <div className="mt-4 flex flex-col gap-2 text-scrn-silver text-sm">
                <p>136 Katherine Pointe Dr.</p>
                <p>Madison, MS 39110</p>
                <a href="tel:6015727755" className="hover:text-white transition-colors mt-2">
                  (601) 572-7755
                </a>
                <a href="mailto:shottsmedia@gmail.com" className="hover:text-white transition-colors">
                  shottsmedia@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-5">
                <a
                  href="https://twitter.com/StateChampRadio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-scrn-silver hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
                <a
                  href="https://www.youtube.com/@StateChampRadio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-scrn-silver hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
