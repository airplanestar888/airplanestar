import type { Metadata } from "next";
import { Bot, BrainCircuit, Gauge, MessagesSquare, Workflow } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AI Lab",
  description: "Experimental AI agents, automations, prompts, and product probes by airplanestar_."
};

const experiments = [
  {
    icon: Bot,
    title: "Agent delegation",
    copy: "Give AI the messy work. Keep humans in the review seat."
  },
  {
    icon: MessagesSquare,
    title: "Prompt libraries",
    copy: "Reusable prompt patterns that actually survive real workflows."
  },
  {
    icon: Workflow,
    title: "Automation loops",
    copy: "Small scripts that eliminate the same 10 minutes every day."
  },
  {
    icon: BrainCircuit,
    title: "AI memory",
    copy: "Context that compounds. Notes that feed the next session."
  },
  {
    icon: Gauge,
    title: "Eval habits",
    copy: "Is it getting sharper or just bigger? Test before you ship."
  }
];

export default function LabPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI Lab"
        title="Small experiments. Real product surfaces."
      />
      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/5"
            >
              {/* icon box — orange logo style */}
              <div className="mb-6 relative inline-flex size-12 items-center justify-center rounded-xl overflow-hidden shadow-[0_0_18px_rgba(255,107,0,0.4)]">
                <span className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF4500]" />
                <Icon className="relative z-10 size-5 text-white" aria-hidden />
              </div>

              {/* title */}
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                {title}
              </h2>

              {/* body */}
              <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>

              {/* hover bottom glow line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
