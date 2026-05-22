"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Boxes,
  FlaskConical,
  GitBranch,
  MessagesSquare,
  Rocket,
  Sparkles,
  ChevronRight,
  Terminal
} from "lucide-react";
import { projects } from "@/content/projects/projects";
import { timeline } from "@/lib/timeline";
import { siteConfig } from "@/lib/site";
import { FloatingStack } from "@/components/floating-stack";
import { MotionSection } from "@/components/motion-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TypingLine } from "@/components/typing-line";
import { ScrollNav } from "@/components/scroll-nav";
import { assetPath } from "@/lib/assets";

const labItems = [
  { icon: Bot, title: "AI agents", copy: "Task loops, review surfaces, memory, and tool-calling experiments." },
  { icon: MessagesSquare, title: "Prompt systems", copy: "Reusable patterns for product thinking, writing, and operator workflows." },
  { icon: GitBranch, title: "Automations", copy: "Small scripts and workflows that compress repeated builder chores." }
];

const philosophy = [
  "Ship before the idea gets too precious.",
  "Use AI as a material, not a sticker.",
  "Make small tools that teach you what to build next.",
  "Keep the interface calm even when the system is powerful."
];

export function HomePage() {
  return (
    <main>
      <ScrollNav />
      {/* ══════════════════ HERO ══════════════════ */}
      <section id="hero" className="relative isolate pt-16 min-h-screen flex items-center">
        {/* Background layers */}
        <div className="fresh-grid absolute inset-0 -z-20" aria-hidden />
        <div className="absolute inset-0 -z-20 bg-[#090909]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,107,0,0.18),transparent_50%),radial-gradient(ellipse_at_10%_80%,rgba(255,107,0,0.08),transparent_40%)]" />

        {/* Diagonal orange slash */}
        <div
          className="absolute right-0 top-0 -z-10 h-full w-[50vw] opacity-10"
          style={{
            background: "linear-gradient(135deg, transparent 40%, #FF6B00 100%)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)"
          }}
          aria-hidden
        />

        {/* Floating orb */}
        <div className="absolute right-[15%] top-[20%] -z-10 size-[300px] rounded-full bg-orange/20 blur-[80px] animate-float" aria-hidden />
        <div className="absolute left-[5%] bottom-[20%] -z-10 size-[200px] rounded-full bg-orange/10 blur-[60px] animate-float" style={{ animationDelay: "2s" }} aria-hidden />

        <div className="container-shell grid gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* LEFT: Text block */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange/30 bg-orange/8 px-4 py-2 text-xs font-semibold text-orange uppercase tracking-widest backdrop-blur"
            >
              <Sparkles className="size-3.5" aria-hidden />
              Product-first AI builder portfolio
              <span className="size-1.5 rounded-full bg-orange animate-pulse" />
            </motion.div>

            {/* Handle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-4 font-mono text-xs font-bold text-orange/70 tracking-[0.35em] uppercase"
            >
              {siteConfig.handle}
            </motion.p>

            {/* Headline */}
            <h1 className="font-display text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="mb-1 block text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">Building</span>
              <span className="block min-h-[2.25em] sm:min-h-[1.12em]">
                <TypingLine />
              </span>
              <span className="block gradient-text glow-text">with founder-grade taste.</span>
            </h1>

            {/* Body */}
            <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-white/50 md:text-xl">
              A personal lab for AI assistants, trading tools, learning products, and practical web apps that
              move from idea to shipped interface.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-orange px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,107,0,0.5)] hover:bg-orange-hot"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/lab"
                className="group inline-flex items-center gap-2 rounded-lg border border-orange/30 bg-orange/6 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-orange backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-orange/12"
              >
                Explore Lab
                <FlaskConical className="size-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white/45 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/20"
              >
                Contact
              </Link>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex gap-8 border-t border-white/6 pt-8"
            >
              {[["10+", "Projects Shipped"], ["100%", "AI Native"], ["∞", "Experiments"]].map(([val, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-black text-orange">{val}</p>
                  <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero image card — sticky so it never moves */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Floating info cards */}
            <div className="absolute -left-6 top-8 z-20 glass-orange rounded-lg px-4 py-3 shadow-dark">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange">
                Shipping mode
              </p>
              <p className="mt-1 text-sm font-bold text-white">AI + products + ops</p>
            </div>

            <div className="absolute -right-4 bottom-20 z-20 glass rounded-lg px-4 py-3 shadow-dark">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange">
                Current lab
              </p>
              <p className="mt-1 text-sm font-bold text-white">Worm, Mojiflash, POS</p>
            </div>

            {/* Terminal badge */}
            <div className="absolute left-4 bottom-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#0D0D0D]/90 px-3 py-1.5 backdrop-blur">
              <Terminal className="size-3 text-orange" />
              <span className="font-mono text-[9px] text-white/50 tracking-widest">SYSTEM::ACTIVE</span>
              <span className="size-1.5 rounded-full bg-mint animate-pulse" />
            </div>

            {/* Main card */}
            <div className="relative overflow-hidden rounded-2xl border border-orange/20 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              {/* corner accents */}
              <div className="absolute left-0 top-0 z-10 size-5 border-l-2 border-t-2 border-orange" />
              <div className="absolute right-0 top-0 z-10 size-5 border-r-2 border-t-2 border-orange" />
              <div className="absolute bottom-0 left-0 z-10 size-5 border-b-2 border-l-2 border-orange" />
              <div className="absolute bottom-0 right-0 z-10 size-5 border-b-2 border-r-2 border-orange" />

              {/* subtle top glow only — no heavy overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,0,0.12),transparent_55%)]" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent z-10" />

              <Image
                src={assetPath("/airplanestar-face.png")}
                alt="Airplanestar portrait"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="relative z-[5] aspect-[4/5] w-full object-cover object-[52%_50%]"
              />
            </div>

            {/* outer glow ring */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-orange/20 blur-sm" aria-hidden />
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] text-white/25 tracking-[0.3em] uppercase">scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-orange/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ══════════════════ PROJECTS ══════════════════ */}
      <MotionSection id="projects" className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured projects"
          title="Shipped repositories, web products, and operational apps."
          description="A showcase of experiments, automation projects, public websites, and practical web-based systems built with a product mindset."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </MotionSection>

      {/* ══════════════════ PHILOSOPHY ══════════════════ */}
      <MotionSection id="philosophy" className="relative overflow-hidden border-y border-white/6 py-20 md:py-28">
        <div className="fresh-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="container-shell relative grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <SectionHeading
            eyebrow="Builder philosophy"
            title="Calm interface, fast feedback, honest iteration."
            description="The work is guided by practical loops: build the smallest useful thing, learn from real usage, then make the next version sharper."
          />
          <div className="grid gap-3">
            {philosophy.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-lg border border-white/6 bg-white/[0.03] p-5 text-lg font-semibold text-white/80 transition-all duration-300 hover:border-orange/30 hover:bg-orange/5 hover:text-white"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-orange opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <ChevronRight className="size-4 text-orange/40 transition-colors group-hover:text-orange" aria-hidden />
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ══════════════════ STACK ══════════════════ */}
      <MotionSection id="stack" className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Stack"
          title="Tools for modern AI product loops."
          description="The stack leans practical: strong web foundations, AI APIs, data tools, and deployment paths that make small launches cheap."
        />
        <FloatingStack />
      </MotionSection>

      {/* ══════════════════ AI LAB ══════════════════ */}
      <MotionSection id="lab" className="relative overflow-hidden py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <div className="fresh-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,107,0,0.10),transparent_70%)]" />
        {/* top/bottom borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

        <div className="container-shell relative">
          <SectionHeading
            eyebrow="AI lab"
            title="A playground for agents, automations, and useful weirdness."
            description="Experiments are treated like product probes: sharp enough to demo, small enough to keep moving."
            inverted
          />
          <div className="grid gap-5 md:grid-cols-3">
            {labItems.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-white/6 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:border-orange/30 hover:bg-orange/5"
              >
                {/* corner accent */}
                <div className="absolute right-0 top-0 size-12 border-r border-t border-orange/0 transition-colors group-hover:border-orange/30" />

                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg border border-orange/20 bg-orange/10">
                  <Icon className="size-5 text-orange" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{copy}</p>

                {/* hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-orange transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ══════════════════ TIMELINE ══════════════════ */}
      <MotionSection id="timeline" className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Journey"
          title="A builder path organized around launches."
          description="The story is intentionally project-forward: experiments, feedback, public signals, and the next thing worth shipping."
        />
        <div className="relative grid gap-5 border-l-2 border-orange/20 pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-xl border border-white/6 bg-white/[0.03] p-6 transition-all duration-300 hover:border-orange/25 hover:bg-orange/4"
            >
              {/* connector dot */}
              <span className="absolute -left-[2.6rem] top-7 grid size-4 place-items-center">
                <span className="size-2 rounded-full bg-orange shadow-orange-sm group-hover:scale-125 transition-transform" />
              </span>
              {/* year */}
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      {/* ══════════════════ CTA ══════════════════ */}
      <MotionSection id="cta" className="container-shell pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-orange/20 p-8 md:p-12">
          {/* background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange/12 via-transparent to-orange/6" />
          <div className="fresh-grid absolute inset-0 opacity-40" aria-hidden />
          {/* corner accents */}
          <div className="absolute left-0 top-0 size-8 border-l-2 border-t-2 border-orange/60" />
          <div className="absolute right-0 top-0 size-8 border-r-2 border-t-2 border-orange/60" />
          <div className="absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-orange/60" />
          <div className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-orange/60" />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_auto] md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange">
                <Rocket className="size-4" aria-hidden />
                Open for useful collisions
              </div>
              <h2 className="font-display text-balance text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
                Building something AI-native?
              </h2>
              <p className="mt-5 max-w-2xl text-white/45 leading-7">
                Reach out for collaborations, prototype reviews, product experiments, or builder-community ideas.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-orange px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(255,107,0,0.55)] hover:bg-orange-hot"
            >
              Start a conversation
              <Boxes className="size-4 transition-transform group-hover:rotate-12" aria-hidden />
            </Link>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
