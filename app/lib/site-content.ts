export type ProjectShowcase = {
  name: string;
  url: string;
  domain: string;
  summary: string;
  highlights: string[];
  accent: string;
  glow: string;
};

export const siteAuthor = {
  name: "Robert Foley",
  role: "Web Developer",
  personalSite: "https://robertfoley.us",
  headline:
    "I build sharp web products with intentional UI, fast front ends, and SEO foundations that are ready to ship.",
  description:
    "Robert Foley is a web developer showcasing standalone brands and coupgroup.com projects with polished front-end execution, clear authorship, and search-friendly structure.",
} as const;

// Update these lists as your project lineup changes.
export const standaloneProjects: ProjectShowcase[] = [
  {
    name: "Boring Squirrel",
    url: "https://boringsquirrel.com",
    domain: "boringsquirrel.com",
    summary:
      "A standalone brand property designed to feel memorable immediately, with playful energy wrapped in a polished front-end shell.",
    highlights: [
      "Distinct brand voice",
      "Conversion-ready landing flow",
      "Independent domain presence",
    ],
    accent: "#f97316",
    glow: "#fed7aa",
  },
  {
    name: "Prepify",
    url: "https://prepify.study",
    domain: "prepify.study",
    summary:
      "A study-focused experience shaped around clarity, confidence, and a clean path from first glance to deeper engagement.",
    highlights: [
      "Education-first hierarchy",
      "Trust-building presentation",
      "Focused independent product branding",
    ],
    accent: "#0ea5e9",
    glow: "#bae6fd",
  },
  {
    name: "Crypto Begins Here",
    url: "https://cryptobeginshere.com",
    domain: "cryptobeginshere.com",
    summary:
      "A guidance-oriented site that makes technical subject matter feel more approachable through stronger structure and readable pacing.",
    highlights: [
      "Accessible topic framing",
      "Readable content layout",
      "Search-friendly domain strategy",
    ],
    accent: "#10b981",
    glow: "#a7f3d0",
  },
  {
    name: "Quilted Chronicles",
    url: "https://quiltedchronicles.org",
    domain: "quiltedchronicles.org",
    summary:
      "A narrative-led destination with a warmer editorial feel, built to let brand texture and long-form reading coexist cleanly.",
    highlights: [
      "Story-led presentation",
      "Warm editorial styling",
      "Independent nonprofit-style identity",
    ],
    accent: "#8b5cf6",
    glow: "#ddd6fe",
  },
];

export const coupgroupProjects: ProjectShowcase[] = [
  {
    name: "Journal",
    url: "https://journal.coupgroup.com",
    domain: "journal.coupgroup.com",
    summary:
      "A Coupgroup publication surface meant for recurring entries, notes, and updates with a lighter publishing rhythm.",
    highlights: [
      "Subdomain publishing surface",
      "Reusable information architecture",
      "Clear parent-brand relationship",
    ],
    accent: "#38bdf8",
    glow: "#bfdbfe",
  },
  {
    name: "Share",
    url: "https://share.coupgroup.com",
    domain: "share.coupgroup.com",
    summary:
      "A utility-first Coupgroup property built around moving content quickly while still feeling aligned with the parent ecosystem.",
    highlights: [
      "Utility-focused interface",
      "Fast, low-friction surface",
      "Coupgroup ecosystem extension",
    ],
    accent: "#f59e0b",
    glow: "#fde68a",
  },
];

export const allProjects = [...standaloneProjects, ...coupgroupProjects];

export const featuredStats = [
  { value: `${allProjects.length}`, label: "Live launches" },
  { value: `${standaloneProjects.length}`, label: "Standalone domains" },
  { value: `${coupgroupProjects.length}`, label: "Coupgroup surfaces" },
] as const;

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!siteUrl) {
    return "https://coupgroup.com";
  }

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
