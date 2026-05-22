import Link from "next/link";
import { Github, Instagram, Send, Twitter } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

const socials = [
  { href: siteConfig.x, label: "X", icon: Twitter },
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: siteConfig.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.telegram, label: "Telegram", icon: Send }
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/6 bg-[#0A0A0A]">
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-50" />

      {/* grid pattern */}
      <div className="fresh-grid absolute inset-0 opacity-40" aria-hidden />

      <div className="container-shell relative grid gap-12 py-14 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          {/* badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/8 px-3 py-1.5 text-xs font-semibold text-orange">
            <span className="size-1.5 rounded-full bg-orange animate-pulse" />
            Building in public from the lab.
          </div>

          {/* tagline */}
          <p className="max-w-xl text-balance font-display text-3xl font-bold uppercase tracking-wider text-white leading-tight">
            AI products, experiments, and{" "}
            <span className="gradient-text glow-text">systems</span>{" "}
            for the next internet.
          </p>

          {/* bottom row */}
          <p className="mt-6 font-mono text-xs text-white/30 tracking-wider uppercase">
            © {new Date().getFullYear()} {siteConfig.name} — All rights reserved.
          </p>
        </div>

        <div className="grid gap-6">
          {/* nav links */}
          <nav className="flex flex-wrap gap-4 text-sm text-white/40">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-orange transition-colors duration-200 font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* social icons */}
          <div className="flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group grid size-10 place-items-center rounded-lg border border-white/8 bg-white/4 text-white/45 transition-all duration-300 hover:border-orange/50 hover:bg-orange/10 hover:text-orange hover:-translate-y-0.5"
                aria-label={label}
              >
                <Icon className="size-4" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
