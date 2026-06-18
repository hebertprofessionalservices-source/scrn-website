import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { diamondSponsors, platinumSponsors, goldSponsors } from "@/data/sponsors";
import type { Sponsor } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Our Sponsors — State Championships Radio Network",
  description: "The businesses that make statewide radio coverage of the MHSAA championships possible.",
};

function SponsorTile({ sponsor, size }: { sponsor: Sponsor; size: "lg" | "md" | "sm" }) {
  const sizeClasses = {
    lg: "p-8 min-h-[140px]",
    md: "p-6 min-h-[110px]",
    sm: "p-5 min-h-[90px]",
  };

  const imgHeight = {
    lg: "h-16",
    md: "h-12",
    sm: "h-10",
  };

  const inner = (
    <div
      className={`flex items-center justify-center bg-scrn-dark border border-white/10 hover:border-scrn-red/40 transition-colors duration-200 group w-full h-full ${sizeClasses[size]}`}
    >
      {sponsor.logoFile ? (
        <div className={`relative w-full ${imgHeight[size]}`}>
          <Image
            src={`/assets/${sponsor.logoFile}`}
            alt={sponsor.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      ) : (
        <span className="font-sans font-semibold text-scrn-silver group-hover:text-white transition-colors text-center leading-tight text-sm">
          {sponsor.name}
        </span>
      )}
    </div>
  );

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
        aria-label={`Visit ${sponsor.name}`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export default function OurSponsorsPage() {
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
            Our Sponsors
          </h1>
          <p className="text-scrn-silver mt-4 text-base md:text-lg max-w-xl">
            These are the businesses that made statewide radio coverage of the championships possible. We&apos;re grateful.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Diamond */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="red-rule" />
            <span className="text-xs tracking-widest uppercase font-sans font-medium text-scrn-red">
              Diamond
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {diamondSponsors.map((sponsor, i) => (
              <AnimatedSection key={sponsor.id} delay={i * 60}>
                <SponsorTile sponsor={sponsor} size="lg" />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Platinum */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="red-rule" />
            <span className="text-xs tracking-widest uppercase font-sans font-medium text-scrn-silver-light">
              Platinum
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-white/10">
            {platinumSponsors.map((sponsor, i) => (
              <AnimatedSection key={sponsor.id} delay={i * 50}>
                <SponsorTile sponsor={sponsor} size="md" />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Gold */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="red-rule" />
            <span className="text-xs tracking-widest uppercase font-sans font-medium text-yellow-400">
              Gold
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10">
            {goldSponsors.map((sponsor, i) => (
              <AnimatedSection key={sponsor.id} delay={i * 40}>
                <SponsorTile sponsor={sponsor} size="sm" />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Become a Sponsor CTA */}
        <AnimatedSection>
          <div className="bg-scrn-dark border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-scrn-red to-transparent" />
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
              Become a Sponsor
            </h2>
            <p className="text-scrn-silver max-w-md mx-auto mb-8 text-sm leading-relaxed">
              Reach tens of thousands of Mississippi football fans across the state during championship week. Reach out to learn about sponsorship packages.
            </p>
            <a
              href="mailto:shottsmedia@gmail.com?subject=Sponsorship%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-scrn-red text-white text-xs tracking-widest uppercase font-sans font-medium hover:bg-scrn-red-bright glow-red-sm hover:glow-red transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
