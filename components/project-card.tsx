"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  Github,
  HeartPulse,
  Plane,
  ShoppingCart,
  Sparkles,
  Workflow
} from "lucide-react";
import type { Project, ProjectIcon } from "@/content/projects/projects";
import { assetPath } from "@/lib/assets";

// Per-accent color config
const accentConfig = {
  blue:   { tag: "border-blue/20 bg-blue/8 text-blue/80",   icon: "border-blue/25 bg-blue/10 text-blue",   glow: "rgba(47,128,237,0.5)"  },
  violet: { tag: "border-violet/20 bg-violet/8 text-violet/80", icon: "border-violet/25 bg-violet/10 text-violet", glow: "rgba(128,90,213,0.5)" },
  mint:   { tag: "border-mint/20 bg-mint/8 text-mint/80",   icon: "border-mint/25 bg-mint/10 text-mint",   glow: "rgba(40,199,111,0.5)"  },
  coral:  { tag: "border-coral/20 bg-coral/8 text-coral/80", icon: "border-coral/25 bg-coral/10 text-coral", glow: "rgba(255,107,107,0.5)" },
};

const iconMap: Record<ProjectIcon, typeof Bot> = {
  bot: Bot,
  plane: Plane,
  sparkles: Sparkles,
  store: ShoppingCart,
  wellness: HeartPulse,
  workflow: Workflow
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Icon = iconMap[project.icon];
  const thumbnail = project.thumbnail || (featured ? "/ai-lab-hero.png" : null);
  const accent = accentConfig[project.accent];

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative grid overflow-hidden rounded-2xl border border-white/8 bg-[#111111] transition-all duration-400"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.4)"
      }}
    >
      {/* ── Hover border glow ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px rgba(255,107,0,0.35), 0 0 48px rgba(255,107,0,0.10)` }}
      />

      {/* ── Corner brackets ── */}
      <span className="absolute left-3 top-3 z-20 size-4 border-l-2 border-t-2 border-orange/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-2.5 group-hover:top-2.5" />
      <span className="absolute right-3 top-3 z-20 size-4 border-r-2 border-t-2 border-orange/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-2.5 group-hover:top-2.5" />
      <span className="absolute bottom-3 left-3 z-20 size-4 border-b-2 border-l-2 border-orange/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-2.5 group-hover:left-2.5" />
      <span className="absolute bottom-3 right-3 z-20 size-4 border-b-2 border-r-2 border-orange/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-2.5 group-hover:right-2.5" />

      {/* ── Image area ── */}
      <div className="relative min-h-56 overflow-hidden bg-[#1a1a1a]">
        {thumbnail ? (
          <>
            <Image
              src={assetPath(thumbnail)}
              alt={`${project.title} interface preview`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-75 transition-all duration-700 group-hover:opacity-95 group-hover:scale-[1.06]"
              priority={project.slug === "worm"}
            />
            {/* scan-line texture */}
            <div
              className="absolute inset-0 opacity-25 mix-blend-overlay"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)"
              }}
              aria-hidden
            />
          </>
        ) : (
          <div className="panel-grid absolute inset-0 opacity-50" aria-hidden />
        )}

        {/* gradient fade to card bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

        {/* top gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

        {/* ── Icon box — orange logo style (matches header) ── */}
        <div className="absolute left-5 top-5 relative grid size-11 place-items-center rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,107,0,0.45)]">
          <span className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF4500]" />
          <Icon className="relative z-10 size-5 text-white" aria-hidden />
        </div>

        {/* ── Status badge ── */}
        {(() => {
          const isOffline = project.status === "Offline";
          return (
            <div className={`absolute right-5 top-5 flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-md ${
              isOffline
                ? "border-white/15 bg-[#0D0D0D]/80 text-white/35"
                : "border-orange/35 bg-[#0D0D0D]/80"
            }`}>
              <span className={`size-1.5 rounded-full ${isOffline ? "bg-white/25" : "bg-orange animate-pulse"}`} />
              <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${isOffline ? "text-white/35" : "text-orange"}`}>
                {project.status}
              </span>
            </div>
          );
        })()}
      </div>

      {/* ── Content ── */}
      <div className="grid gap-4 p-6">

        {/* title + description */}
        <div>
          <h3 className="font-display text-2xl font-black uppercase tracking-wide text-white leading-none">
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm leading-6 text-white/50">{project.description}</p>
        </div>

        {/* ── Stack tags — colored per accent ── */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span
              key={item}
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide ${accent.tag}`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* ── Links ── */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
          {project.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isPrimary = link.kind !== "code";
            const LinkIcon = link.kind === "code" ? Github : link.kind === "live" ? ExternalLink : ArrowUpRight;

            return (
              <Link
                key={`${project.slug}-${link.label}`}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`group/btn inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isPrimary
                    ? "bg-orange text-white hover:bg-[#FF8C00] hover:shadow-[0_0_24px_rgba(255,107,0,0.55)] hover:-translate-y-0.5"
                    : "border border-white/10 bg-white/[0.04] text-white/40 hover:border-orange/40 hover:bg-orange/8 hover:text-orange hover:-translate-y-0.5"
                }`}
              >
                {link.label}
                <LinkIcon className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Bottom glow bar ── */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
    </motion.article>
  );
}
