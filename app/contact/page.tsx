import type { Metadata } from "next";
import Link from "next/link";
import { Github, Instagram, Send, Twitter } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact airplanestar_ for AI product collaborations, client work, and experiments."
};

const contactLinks = [
  { href: siteConfig.x, label: "X / Twitter", value: siteConfig.handle, icon: Twitter },
  { href: siteConfig.github, label: "GitHub", value: "airplanestar888", icon: Github },
  { href: siteConfig.instagram, label: "Instagram", value: "@air.planestar", icon: Instagram },
  { href: siteConfig.telegram, label: "Telegram", value: "t.me/airplanestar", icon: Send }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Useful conversations, prototype reviews, and AI-native collaborations."
        description="Best fit: product experiments, agent workflows, developer tools, AI x crypto research, and builder-community ideas."
      />
      <section className="container-shell grid gap-4 py-14 md:grid-cols-2 md:py-20">
        {contactLinks.map(({ href, label, value, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="group relative overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-6 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/5 hover:-translate-y-1"
          >
            {/* icon — orange logo style */}
            <div className="mb-6 relative inline-flex size-12 items-center justify-center rounded-xl overflow-hidden shadow-[0_0_18px_rgba(255,107,0,0.4)]">
              <span className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF4500]" />
              <Icon className="relative z-10 size-5 text-white" aria-hidden />
            </div>

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">{label}</p>
            <p className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white transition-colors group-hover:text-orange-400">
              {value}
            </p>

            {/* bottom glow */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
          </Link>
        ))}
      </section>
    </main>
  );
}
