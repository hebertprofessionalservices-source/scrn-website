import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles — State Championships Radio Network",
  description: "Coverage, rankings, and analysis from the State Championships Radio Network.",
};

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

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
            Articles
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Featured */}
        <AnimatedSection className="mb-12">
          <article
            id={featured.id}
            className="group relative bg-scrn-dark border border-white/10 p-6 md:p-10 hover:border-scrn-red/40 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-scrn-red via-scrn-red/40 to-transparent" />
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-2.5 py-1 bg-scrn-red text-white text-xs tracking-widest uppercase font-sans">
                    {featured.category}
                  </span>
                  {featured.source === "varsity-voices" && (
                    <span className="inline-block px-2.5 py-1 bg-vv-gold text-vv-navy text-xs tracking-widest uppercase font-sans font-semibold">
                      Varsity Voices
                    </span>
                  )}
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-tight group-hover:text-scrn-red transition-colors">
                  {featured.title}
                </h2>
                <p className="text-scrn-silver text-base mt-4 leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-5 text-xs text-scrn-silver/60 uppercase tracking-wider">
                  <span>{featured.author}</span>
                  <span>&middot;</span>
                  <span>{featured.date}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="font-display text-8xl text-white/5 leading-none select-none">01</span>
              </div>
            </div>
          </article>
        </AnimatedSection>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <AnimatedSection key={article.id} delay={i * 80}>
              <article
                id={article.id}
                className="group bg-scrn-dark border border-white/10 p-5 hover:border-scrn-red/40 transition-colors duration-200 h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-scrn-red/50 to-transparent" />
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 bg-white/10 text-scrn-silver text-xs tracking-widest uppercase font-sans">
                      {article.category}
                    </span>
                    {article.source === "varsity-voices" && (
                      <span className="inline-block px-2 py-0.5 bg-vv-gold/20 text-vv-gold text-xs tracking-widest uppercase font-sans">
                        VV
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-white uppercase leading-tight group-hover:text-scrn-red transition-colors flex-1">
                    {article.title}
                  </h3>
                  <p className="text-scrn-silver text-sm mt-3 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-scrn-silver/60 uppercase tracking-wider">
                    <span>{article.author}</span>
                    <span>&middot;</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
