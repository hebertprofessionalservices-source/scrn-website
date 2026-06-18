import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { teamMembers } from "@/data/team";
import { diamondSponsors, platinumSponsors } from "@/data/sponsors";

const stats = [
  { value: "35,968", label: "Avg. listeners per hour", sub: "Championship weekend 2024" },
  { value: "40+", label: "Radio stations", sub: "Corinth to Gulfport" },
  { value: "7", label: "Championships broadcast", sub: "3 days, every title game" },
];

export default function HomePage() {
  const featured = articles[0];
  const secondary = articles.slice(1, 3);
  const featuredTeam = teamMembers.filter((m) => m.featured);
  const restTeam = teamMembers.filter((m) => !m.featured).slice(0, 4);
  const homeSponsors = [...diamondSponsors, ...platinumSponsors.slice(0, 3)];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* LED texture background */}
        <div className="absolute inset-0 led-texture opacity-30" aria-hidden="true" />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Red glow from bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(204,0,0,0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* SCRN Logo */}
          <div className="animate-fade-up flex justify-center mb-6 md:mb-8">
            <div className="relative w-28 h-28 md:w-40 md:h-40">
              <Image
                src="/assets/scrnLogo.png"
                alt="State Championships Radio Network"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <h1 className="animate-fade-up delay-100 font-display text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] leading-none text-white uppercase tracking-tight">
            3 Days.
            <br />
            <span className="text-scrn-red">7 Champions.</span>
          </h1>

          <p className="animate-fade-up delay-200 font-sans text-scrn-silver text-base sm:text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
            We put Mississippi high school football on the radio. All seven games.
          </p>

          {/* Event date badge */}
          <div className="animate-fade-up delay-300 inline-flex items-center gap-3 mt-8 px-5 py-2.5 border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-scrn-red animate-live" aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-sans text-white/80">
              December 3–5, 2026 · Location TBA
            </span>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Button href="/broadcasts" variant="primary" className="w-full sm:w-auto">
              <span className="w-2 h-2 rounded-full bg-white animate-live" aria-hidden="true" />
              Listen Live
            </Button>
            <Button href="/broadcasts" variant="outline" className="w-full sm:w-auto">
              Our Broadcasts
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-scrn-red mx-auto" />
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-scrn-dark border-y border-white/10 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center py-4 sm:py-0 sm:px-6">
                <p className="font-display text-5xl md:text-6xl text-scrn-red leading-none">
                  {stat.value}
                </p>
                <p className="font-sans font-semibold text-white text-sm uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
                <p className="font-sans text-scrn-silver text-xs mt-1">{stat.sub}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LATEST ARTICLES ==================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <AnimatedSection className="mb-10">
          <div className="red-rule mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
            Latest from State Championships Radio Network
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured article */}
          <AnimatedSection className="lg:col-span-2">
            <article className="group relative bg-scrn-dark border border-white/10 overflow-hidden h-full min-h-60 flex flex-col justify-end p-6 hover:border-scrn-red/50 transition-colors duration-300">
              {/* Background texture hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-scrn-dark via-scrn-dark/60 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-scrn-red via-scrn-red/50 to-transparent" />

              <div className="relative">
                <span className="inline-block px-2.5 py-1 bg-scrn-red text-white text-xs tracking-widest uppercase font-sans mb-3">
                  {featured.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase leading-tight group-hover:text-scrn-red transition-colors">
                  <Link href={`/articles#${featured.id}`}>{featured.title}</Link>
                </h3>
                <p className="text-scrn-silver text-sm mt-3 leading-relaxed line-clamp-2">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs text-scrn-silver/60 uppercase tracking-wider">
                  <span>{featured.author}</span>
                  <span>&middot;</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Secondary articles */}
          <div className="flex flex-col gap-6">
            {secondary.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 100}>
                <article className="group bg-scrn-dark border border-white/10 p-5 hover:border-scrn-red/50 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-scrn-red/60 to-transparent" />
                  <div className="pl-4">
                    <span className="inline-block px-2 py-0.5 bg-white/10 text-scrn-silver text-xs tracking-widest uppercase font-sans mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-display text-xl text-white uppercase leading-tight group-hover:text-scrn-red transition-colors">
                      <Link href={`/articles#${article.id}`}>{article.title}</Link>
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-scrn-silver/60 uppercase tracking-wider">
                      <span>{article.author}</span>
                      <span>&middot;</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={200}>
              <Link
                href="/articles"
                className="flex items-center justify-center gap-2 py-4 border border-white/20 text-scrn-silver hover:text-white hover:border-white/40 transition-all text-xs tracking-widest uppercase font-sans"
              >
                All Articles
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== TEAM PREVIEW ==================== */}
      <section className="bg-scrn-dark border-y border-white/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <div className="red-rule mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
              The Voice of Mississippi Football
            </h2>
            <p className="text-scrn-silver mt-3 max-w-lg">
              Nine broadcasters. Decades of Mississippi games between them. Every one of them from here.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...featuredTeam, ...restTeam].map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 60}>
                <div className="group flex flex-col items-center text-center p-4 hover:bg-white/5 transition-colors duration-200">
                  {/* Headshot */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-scrn-dark-2 border-2 border-white/10 group-hover:border-scrn-red/60 transition-colors mb-3 relative overflow-hidden flex items-center justify-center">
                    {member.headshotFile ? (
                      <Image
                        src={`/assets/${member.headshotFile}`}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <span className="font-display text-2xl text-scrn-red">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    )}
                  </div>
                  <p className="font-display text-sm text-white uppercase leading-tight">
                    {member.name}
                  </p>
                  <p className="text-scrn-silver text-xs mt-1">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8">
            <Button href="/our-team" variant="outline">
              Meet the Full Team
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== SPONSORS STRIP ==================== */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <AnimatedSection className="mb-8">
          <div className="red-rule mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
            Proudly Supported By
          </h2>
          <p className="text-scrn-silver text-sm mt-2">
            These are the businesses that made statewide radio coverage of the championships possible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/10">
          {homeSponsors.map((sponsor, i) => {
            const tile = (
              <div className="flex items-center justify-center bg-scrn-dark p-5 min-h-[80px] hover:bg-scrn-dark-2 transition-colors w-full h-full">
                {sponsor.logoFile ? (
                  <div className="relative w-full h-10">
                    <Image
                      src={`/assets/${sponsor.logoFile}`}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, 15vw"
                    />
                  </div>
                ) : (
                  <span className="font-sans font-semibold text-scrn-silver text-xs text-center leading-tight">
                    {sponsor.name}
                  </span>
                )}
              </div>
            );
            return (
              <AnimatedSection key={sponsor.id} delay={i * 40}>
                {sponsor.website ? (
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block w-full h-full" aria-label={`Visit ${sponsor.name}`}>
                    {tile}
                  </a>
                ) : tile}
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-8 flex items-center gap-4">
          <Button href="/our-sponsors" variant="outline">
            All Sponsors
          </Button>
          <a
            href="mailto:shottsmedia@gmail.com"
            className="text-scrn-silver hover:text-white text-sm transition-colors underline underline-offset-4"
          >
            Become a Sponsor
          </a>
        </AnimatedSection>
      </section>

      {/* ==================== VV CROSSLINK ==================== */}
      <section className="relative overflow-hidden bg-scrn-dark border-t border-white/10">
        <div className="absolute inset-0 led-texture opacity-10" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(10,10,10,0.6) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-28 h-28 flex-shrink-0">
              <Image
                src="/assets/varsityVocalsLogo.png"
                alt="Varsity Voices"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-xs tracking-widest uppercase text-scrn-silver mb-2 font-sans">
                Powered by State Championships Radio Network
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
                Varsity Voices
              </h2>
              <p className="text-scrn-silver mt-3 max-w-lg">
                Mississippi&apos;s podcast for high school football. Rankings, analysis, all-state picks — year-round.
              </p>
            </div>
            <Button href="/varsity-voices" variant="gold" className="flex-shrink-0">
              Go to Varsity Voices
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
