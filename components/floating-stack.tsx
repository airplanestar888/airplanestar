"use client";

import { motion } from "framer-motion";

const stack = [
  "Next.js",
  "OpenAI",
  "Claude",
  "LangChain",
  "Supabase",
  "Vercel",
  "Python",
  "TypeScript",
  "MDX",
  "Agents",
  "RAG",
  "Automations"
];

export function FloatingStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, scale: 1.06 }}
          className="group relative cursor-default overflow-hidden rounded-lg border border-white/6 bg-white/[0.04] px-5 py-2.5 font-mono text-sm font-semibold text-white/60 backdrop-blur transition-all duration-300 hover:border-orange/40 hover:bg-orange/8 hover:text-orange"
        >
          {/* hover glow */}
          <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.12),transparent_70%)]" />
          <span className="relative">{item}</span>
        </motion.span>
      ))}
    </div>
  );
}
