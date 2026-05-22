import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Dark base
        paper: "#0D0D0D",
        surface: "#141414",
        card: "#1A1A1A",
        ink: "#F0F0F0",
        // Accents
        orange: "#FF6B00",
        "orange-hot": "#FF8C00",
        "orange-dim": "rgba(255,107,0,0.12)",
        amber: "#FFA500",
        muted: "#777777",
        line: "#2A2A2A",
        mist: "#1E1E1E",
        // Keep legacy
        blue: "#4DA3FF",
        aqua: "#00D4C8",
        violet: "#9B7BFF",
        mint: "#00E57A",
        coral: "#FF6060"
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "var(--font-geist-mono)", "Consolas", "monospace"],
        display: ["'Barlow Condensed'", "'Space Grotesk'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(0, 0, 0, 0.5)",
        line: "0 0 0 1px rgba(255, 255, 255, 0.06)",
        orange: "0 8px 32px rgba(255, 107, 0, 0.35)",
        "orange-sm": "0 0 16px rgba(255, 107, 0, 0.25)",
        dark: "0 20px 60px rgba(0,0,0,0.6)"
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF8C00 0%, #FF6B00 60%, #FF4500 100%)",
        "dark-gradient": "linear-gradient(180deg, #0D0D0D 0%, #090909 100%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.2) 0%, transparent 60%)"
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "data-stream": "data-stream 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
