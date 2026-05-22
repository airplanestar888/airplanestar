"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#090909]/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-60" />

      <div className="container-shell flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="airplanestar_ home">
          <div className="relative grid size-9 place-items-center rounded-lg bg-orange glow-orange overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-orange-hot to-[#FF4500]" />
            <span className="relative z-10 font-mono text-[13px] font-bold text-white tracking-tight">
              a*
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)]" />
          </div>
          <span className="font-display text-sm font-bold tracking-[0.1em] uppercase text-white">
            {siteConfig.handle}
          </span>
          <span className="hidden md:flex items-center gap-1 ml-1">
            <span className="size-1.5 rounded-full bg-orange animate-pulse-dot" />
            <span className="font-mono text-[9px] text-orange/70 tracking-widest uppercase">live</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-lg border border-white/6 bg-white/[0.04] p-1 text-sm text-muted backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-4 py-1.5 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange text-white shadow-orange"
                    : "text-white/55 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-md bg-orange opacity-20 blur-sm" />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={siteConfig.x}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-orange/30 bg-orange/8 px-4 py-2 text-sm font-semibold text-orange transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white hover:shadow-orange"
          >
            Follow <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid size-10 place-items-center rounded-lg border border-white/8 bg-white/5 text-white backdrop-blur md:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#090909]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="container-shell grid gap-1 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="size-1 rounded-full bg-orange" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
