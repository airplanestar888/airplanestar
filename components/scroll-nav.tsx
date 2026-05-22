"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "philosophy", label: "Philosophy" },
  { id: "stack", label: "Stack" },
  { id: "lab", label: "Lab" },
  { id: "timeline", label: "Journey" },
  { id: "cta", label: "Contact" }
];

const HEADER_HEIGHT = 72;

export function ScrollNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getActiveIndex = () => {
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return Number.POSITIVE_INFINITY;
        return Math.abs(el.getBoundingClientRect().top - HEADER_HEIGHT);
      });

      const closest = offsets.indexOf(Math.min(...offsets));
      setActiveIndex(closest);
      setVisible(window.scrollY > 60);
    };

    getActiveIndex();
    window.addEventListener("scroll", getActiveIndex, { passive: true });
    return () => window.removeEventListener("scroll", getActiveIndex);
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = document.getElementById(SECTIONS[index].id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  const goUp = () => scrollTo(Math.max(0, activeIndex - 1));
  const goDown = () => scrollTo(Math.min(SECTIONS.length - 1, activeIndex + 1));

  const canUp = activeIndex > 0;
  const canDown = activeIndex < SECTIONS.length - 1;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2"
          aria-label="Section navigation"
        >
          <motion.button
            onClick={goUp}
            disabled={!canUp}
            whileHover={canUp ? { scale: 1.12, y: -2 } : {}}
            whileTap={canUp ? { scale: 0.92 } : {}}
            className={`group grid size-9 place-items-center rounded-lg border transition-all duration-300 ${
              canUp
                ? "border-orange/40 bg-orange/10 text-orange hover:border-orange hover:bg-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,122,0,0.5)]"
                : "cursor-not-allowed border-white/5 bg-white/[0.03] text-white/15"
            }`}
            aria-label="Scroll up"
          >
            <ChevronUp className="size-4" aria-hidden />
          </motion.button>

          <div className="flex flex-col items-center gap-1.5 py-1">
            {SECTIONS.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to ${section.label}`}
                className="group relative flex items-center justify-end gap-2"
              >
                <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-orange/20 bg-[#0D0D0D]/95 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-orange opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                  {section.label}
                </span>

                <motion.span
                  animate={
                    index === activeIndex
                      ? { scale: 1, backgroundColor: "#FF7A00" }
                      : { scale: 1, backgroundColor: "rgba(255,255,255,0.18)" }
                  }
                  transition={{ duration: 0.2 }}
                  className="block rounded-full transition-all duration-200"
                  style={{
                    width: index === activeIndex ? "8px" : "5px",
                    height: index === activeIndex ? "8px" : "5px",
                    boxShadow: index === activeIndex ? "0 0 10px rgba(255,122,0,0.8)" : "none"
                  }}
                />
              </button>
            ))}
          </div>

          <motion.button
            onClick={goDown}
            disabled={!canDown}
            whileHover={canDown ? { scale: 1.12, y: 2 } : {}}
            whileTap={canDown ? { scale: 0.92 } : {}}
            className={`group grid size-9 place-items-center rounded-lg border transition-all duration-300 ${
              canDown
                ? "border-orange/40 bg-orange/10 text-orange hover:border-orange hover:bg-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,122,0,0.5)]"
                : "cursor-not-allowed border-white/5 bg-white/[0.03] text-white/15"
            }`}
            aria-label="Scroll down"
          >
            <ChevronDown className="size-4" aria-hidden />
          </motion.button>

          <div className="mt-1 text-center font-mono text-[8px] font-bold tracking-widest text-white/20">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="text-orange/40">/</span>
            {String(SECTIONS.length).padStart(2, "0")}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
