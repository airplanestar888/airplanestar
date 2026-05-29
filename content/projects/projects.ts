export type ProjectStatus = "Live" | "Beta" | "Experimental" | "Open Source" | "Offline";
export type ProjectIcon = "bot" | "plane" | "sparkles" | "store" | "wellness" | "workflow";
export type ProjectLink = {
  label: "Website" | "Code" | "Details";
  href: string;
  kind: "live" | "code" | "details";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  stack: string[];
  icon: ProjectIcon;
  accent: "blue" | "violet" | "mint" | "coral";
  thumbnail?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "worm",
    title: "Worm",
    description: "A local AI assistant by Airplanestar with chat memory, deep search mode, and a polished dark interface.",
    longDescription:
      "Worm is a local assistant experience built around practical Indonesian-language tasks, fast responses, model selection, and a clean desktop-like chat surface.",
    status: "Beta",
    stack: ["Local AI", "Llama", "Deep Search", "NVIDIA"],
    icon: "workflow",
    accent: "violet",
    thumbnail: "/worm-preview.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/airplanestar888/worm",
        kind: "code"
      }
    ]
  },
  {
    slug: "airplanestar-spot-bot",
    title: "Airplanestar Spot Bot",
    description: "A trading bot companion with a web-based trade journal dashboard, report filters, and PnL analytics.",
    longDescription:
      "Airplanestar Spot Bot tracks bot performance through a clean dashboard: closed trades, open positions, net PnL, win rate, exit reasons, and configuration controls.",
    status: "Beta",
    stack: ["Trading Bot", "Journal", "PnL", "Dashboard"],
    icon: "plane",
    accent: "blue",
    thumbnail: "/spot-bot-preview.svg",
    links: [
      {
        label: "Code",
        href: "https://github.com/airplanestar888/airplanestar-spot-bot",
        kind: "code"
      }
    ]
  },
  {
    slug: "star-record",
    title: "Star Record",
    description: "A browser recording tool for capturing web sessions, workflows, and repeatable interaction demos.",
    longDescription:
      "Star Record is a browser recorder project for saving web interactions, documenting workflows, and turning repeated browser actions into reusable product demos or automation references.",
    status: "Open Source",
    stack: ["Browser Recorder", "Workflow", "Automation", "Web Tool"],
    icon: "workflow",
    accent: "mint",
    links: [
      {
        label: "Code",
        href: "https://github.com/airplanestar888/Star-Recorder",
        kind: "code"
      }
    ]
  },
  {
    slug: "mojiflash",
    title: "Mojiflash",
    description: "A Japanese learning web app for hiragana flashcards, vocabulary practice, and focused quizzes.",
    longDescription:
      "Mojiflash helps learners build Japanese foundations through clean flashcards, hiragana practice, vocabulary, and quiz flows.",
    status: "Live",
    stack: ["Japanese", "Flashcards", "Hiragana", "Quiz"],
    icon: "sparkles",
    accent: "mint",
    thumbnail: "/mojiflash-preview.svg",
    links: [
      {
        label: "Website",
        href: "https://mojiflash.com/",
        kind: "live"
      }
    ]
  },
  {
    slug: "petshop-pos",
    title: "Petshop POS",
    description: "A web-based POS for petshop cashier flow, stock, members, grooming, hotel, and sales reports.",
    longDescription:
      "A modern operations app for petshop teams: cashier transactions, product stock, member records, grooming services, hotel bookings, and measurable sales reporting.",
    status: "Offline",
    stack: ["POS", "Inventory", "Members", "Reports"],
    icon: "store",
    accent: "coral",
    thumbnail: "/petshop-pos-preview.svg",
    links: [
      {
        label: "Details",
        href: "/contact",
        kind: "details"
      }
    ]
  },
  {
    slug: "baby-spa",
    title: "Baby Spa Web App",
    description: "A custom POS transaction screen for baby spa services, payment summaries, and receipt printing.",
    longDescription:
      "A service POS built for baby spa operations: patient selection, service items, quantity controls, cart state, payment calculation, and print-ready receipts.",
    status: "Offline",
    stack: ["POS", "Services", "Payments", "Receipts"],
    icon: "wellness",
    accent: "blue",
    thumbnail: "/baby-spa-preview.svg",
    links: [
      {
        label: "Details",
        href: "/contact",
        kind: "details"
      }
    ]
  }
];
