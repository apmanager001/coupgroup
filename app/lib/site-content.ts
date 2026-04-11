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
      "Play small, strange, and satisfying games built right here, then dive into posts about game design, media, and whatever else the squirrel drags in.",
    highlights: ["Play Games", "Read Posts", "Track Scores on Leadboard"],
    accent: "#f97316",
    glow: "#fed7aa",
  },
  {
    name: "Prepify",
    url: "https://prepify.study",
    domain: "prepify.study",
    summary:
      "Prepify is a student-led nonprofit platform dedicated to helping anyone manage their time better, reduce study stress, and stay on track — whether you’re in high school, college, or pursuing professional certifications. We provide free, easy-to-use tools that help you plan, focus, and build habits that last.",
    highlights: [
      "Study Tools",
      "Study Music",
      "Create notes and calendar events",
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
      "Create epic tales together, one chapter at a time. Start a story, continue an adventure, or explore infinite narrative possibilities in our growing community of creative writers.",
    highlights: [
      "Collaborative storytelling",
      "Multiple Endings",
      "Branched Storytelling",
    ],
    accent: "#8b5cf6",
    glow: "#ddd6fe",
  },
  {
    name: "Locale Michigan",
    url: "https://localemichigan.com",
    domain: "localemichigan.com",
    summary:
      "Discover vibrant cities, stunning lighthouses, serene parks, fascinating museums, and breathtaking lakes. Your Michigan adventure starts here!",
    highlights: [
      "Explore Cities",
      "Visit Lighthouses",
      "Enjoy Parks and Lakes",
    ],
    accent: "#8b5cf6",
    glow: "#ddd6fe",
  },
];

export const coupgroupProjects: ProjectShowcase[] = [
  {
    name: "Cosmic Journal",
    url: "https://journal.coupgroup.com",
    domain: "journal.coupgroup.com",
    summary:
      "Track your habits and journal through the cosmos. Build consistency, explore your thoughts and reach for the stars.",
    highlights: [
      "Habit Tracker",
      "Log Journal Entries",
      "Create a Bucketlist",
      "Track your Goals"
    ],
    accent: "#38bdf8",
    glow: "#bfdbfe",
  },
  {
    name: "Aura Share",
    url: "https://share.coupgroup.com",
    domain: "share.coupgroup.com",
    summary:
      "AuraShare lets you manage your social posts, then blast it to your social channels with rich descriptions and consistent branding.",
    highlights: [
      "AI suggested Posts",
      "Save Posts",
      "Share posts with social channels",
    ],
    accent: "#f59e0b",
    glow: "#fde68a",
  },
];

export const allProjects = [...standaloneProjects, ...coupgroupProjects];

export const featuredStats = [
  { value: `${allProjects.length}`, label: "Live Projects" },
  { value: `${standaloneProjects.length}`, label: "Standalone Projects" },
  { value: `${coupgroupProjects.length}`, label: "Personal Projects" },
] as const;

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!siteUrl) {
    return "https://coupgroup.com";
  }

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
