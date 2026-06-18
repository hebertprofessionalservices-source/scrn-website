import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team — State Championships Radio Network",
  description: "Meet the Mississippi broadcasters behind the State Championships Radio Network.",
};

export default function OurTeamPage() {
  const featured = teamMembers.filter((m) => m.featured);
  const rest = teamMembers.filter((m) => !m.featured);

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
            Our Team
          </h1>
          <p className="text-scrn-silver mt-4 text-base md:text-lg max-w-xl">
            Nine broadcasters. Decades of Mississippi games between them. Every one of them from here.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Featured members */}
        <AnimatedSection className="mb-4">
          <div className="red-rule mb-4" />
          <h2 className="font-display text-3xl text-white uppercase tracking-tight mb-8">Featured</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featured.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 100}>
              <div className="group bg-scrn-dark border border-white/10 p-6 md:p-8 hover:border-scrn-red/50 transition-colors relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-scrn-red via-scrn-red/40 to-transparent" />
                <div className="flex items-start gap-5">
                  {/* Headshot */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-scrn-dark-2 border-2 border-scrn-red/40">
                    {member.headshotFile ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={`/assets/${member.headshotFile}`}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-3xl text-scrn-red">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-2xl text-white uppercase leading-tight">
                      {member.name}
                    </p>
                    <p className="text-scrn-red text-xs tracking-widest uppercase font-sans mt-1">
                      {member.role}
                    </p>
                    <p className="text-scrn-silver text-sm mt-3 leading-relaxed">{member.bio}</p>
                    {member.twitter && (
                      <a
                        href={`https://twitter.com/${member.twitter.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs tracking-widest uppercase text-scrn-silver/60 hover:text-white transition-colors"
                      >
                        {member.twitter}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Rest of team */}
        <AnimatedSection className="mb-8">
          <div className="red-rule mb-4" />
          <h2 className="font-display text-3xl text-white uppercase tracking-tight">The Crew</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 60}>
              <div className="group bg-scrn-dark border border-white/10 p-5 hover:border-scrn-red/40 transition-colors h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-scrn-red/50 to-transparent" />
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-scrn-dark-2 border border-white/10">
                      {member.headshotFile ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={`/assets/${member.headshotFile}`}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-display text-sm text-scrn-red">
                            {member.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-display text-lg text-white uppercase leading-none">{member.name}</p>
                      <p className="text-scrn-red text-xs tracking-wider uppercase mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-scrn-silver text-sm leading-relaxed">{member.bio}</p>
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-scrn-silver/50 hover:text-white transition-colors"
                    >
                      {member.twitter}
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
