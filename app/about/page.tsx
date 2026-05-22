import type { Metadata } from "next";
import { ArrowUpRight, Code2, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { timeline } from "@/lib/timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Builder story, philosophy, and AI-native product direction for airplanestar_."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A developer identity shaped by experiments, shipping, and taste."
        description="The site is intentionally not a classic CV. It is a place for product signals, lab notes, and collaboration energy."
      />
      <section className="container-shell grid gap-8 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        {/* Builder lens card */}
        <div className="rounded-xl border border-white/6 bg-[#141414] p-6">
          <div className="mb-6 relative inline-flex size-12 items-center justify-center rounded-xl overflow-hidden shadow-[0_0_18px_rgba(255,107,0,0.4)]">
            <span className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF4500]" />
            <Sparkles className="relative z-10 size-5 text-white" aria-hidden />
          </div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Builder lens</h2>
          <p className="mt-4 leading-7 text-white/55">
            airplanestar_ focuses on the space where AI systems become usable products: clean interfaces,
            tight feedback loops, and experiments that make technical ideas easier to understand.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/45">
            <div className="flex items-center gap-2">
              <Rocket className="size-4 text-orange-500" aria-hidden />
              Ships small, learns fast.
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="size-4 text-orange-500" aria-hidden />
              Builds with developer taste.
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid gap-4">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-5 transition-all duration-300 hover:border-orange-500/25"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">
                {item.year}
              </p>
              <h2 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">{item.body}</p>
              <div className="absolute bottom-0 inset-x-0 h-px bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_32px_rgba(255,107,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
        >
          Collaborate <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
      </section>
    </main>
  );
}
