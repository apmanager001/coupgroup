import type { CSSProperties } from "react";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Globe,
  Layers3,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  allProjects,
  coupgroupProjects,
  featuredStats,
  getSiteUrl,
  siteAuthor,
  standaloneProjects,
  type ProjectShowcase,
} from "@/app/lib/site-content";

const siteUrl = getSiteUrl();
const pageTitle = "Project Showcase";
const pageDescription =
  "A profile site for Robert Foley featuring standalone launches and coupgroup.com builds, presented with strong front-end design and search-friendly structure.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${pageTitle} | ${siteAuthor.name}`,
    description: pageDescription,
    url: siteUrl,
  },
  twitter: {
    title: `${pageTitle} | ${siteAuthor.name}`,
    description: pageDescription,
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  inverse?: boolean;
}) {
  return (
    <div className="space-y-4">
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
          inverse
            ? "border-white/15 bg-white/5 text-white/70"
            : "border-slate-900/10 bg-white/55 text-slate-600"
        }`}
      >
        <Icon className="size-4" />
        <span>{eyebrow}</span>
      </div>
      <div className="space-y-3">
        <h2
          className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${
            inverse ? "text-white" : "text-slate-950"
          }`}
        >
          {title}
        </h2>
        <p
          className={`max-w-3xl text-base leading-8 sm:text-lg ${
            inverse ? "text-white/72" : "text-slate-700/80"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  sectionLabel,
  dark = false,
}: {
  project: ProjectShowcase;
  sectionLabel: string;
  dark?: boolean;
}) {
  const cardStyle = dark
    ? ({
        background: `linear-gradient(180deg, rgba(10, 16, 30, 0.84) 0%, rgba(5, 9, 18, 0.96) 100%), radial-gradient(circle at top right, ${project.glow}33 0%, transparent 56%)`,
        borderColor: `${project.accent}3d`,
        boxShadow: `0 28px 80px -48px ${project.accent}88`,
      } as CSSProperties)
    : ({
        background: `linear-gradient(180deg, rgba(255, 251, 245, 0.84) 0%, rgba(255, 255, 255, 0.66) 100%), radial-gradient(circle at top right, ${project.glow}88 0%, transparent 56%)`,
        borderColor: `${project.accent}33`,
        boxShadow: `0 28px 80px -48px ${project.accent}70`,
      } as CSSProperties);

  return (
    <article
      className={`project-tile card mb-6 overflow-hidden rounded-[1.9rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 flex h-full flex-col ${
        dark ? "text-white" : "text-slate-950"
      }`}
      style={cardStyle}
    >
      <div className="card-body flex flex-col flex-1 gap-6 p-0">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`badge border-0 px-3 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] ${
              dark ? "bg-white/10 text-white" : "bg-slate-950 text-white"
            }`}
          >
            {sectionLabel}
          </span>
          <span
            className={`badge badge-outline px-3 py-3 text-[0.62rem] uppercase tracking-[0.2em] ${
              dark
                ? "border-white/15 text-white/65"
                : "border-slate-900/10 text-slate-600"
            }`}
          >
            {project.domain}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-semibold leading-tight">
                {project.name}
              </h3>
              <p
                className={`text-base leading-7 ${
                  dark ? "text-white/75" : "text-slate-700/80"
                }`}
              >
                {project.summary}
              </p>
            </div>
            <div
              className={`mt-1 size-3 rounded-full status status-${project.accent}`}
              aria-label="status"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 24px ${project.accent}`,
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className={`rounded-full px-3 py-2 text-xs font-medium ${
                  dark
                    ? "bg-white/7 text-white/72"
                    : "bg-slate-900/6 text-slate-700"
                }`}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`flex items-center justify-between gap-4 rounded-[1.4rem] border px-4 py-3 mt-auto ${
            dark ? "border-white/10 bg-white/5" : "border-white/60 bg-white/60"
          }`}
        >
          <p
            className={`font-mono text-xs uppercase tracking-[0.2em] flex-1 min-w-0 ${
              dark ? "text-white/58" : "text-slate-500"
            }`}
          >
            Live at <span className="truncate block">{project.domain}</span>
          </p>
          <a
            className={`btn btn-ghost rounded-2xl shrink-0`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            Visit
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#author`,
        name: siteAuthor.name,
        jobTitle: siteAuthor.role,
        url: siteAuthor.personalSite,
        description: siteAuthor.description,
        knowsAbout: [
          "Web development",
          "Next.js",
          "Frontend architecture",
          "SEO-friendly websites",
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/#showcase`,
        url: siteUrl,
        name: `${siteAuthor.name} Project Showcase`,
        description: pageDescription,
        author: { "@id": `${siteUrl}/#author` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: allProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: project.url,
          })),
        },
      },
    ],
  };

  return (
    <main className="site-shell relative isolate flex-1 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48rem bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.64),transparent_34%),radial-gradient(circle_at_74%_12%,rgba(56,189,248,0.18),transparent_18%),radial-gradient(circle_at_48%_24%,rgba(249,115,22,0.2),transparent_22%)]" />
      <div className="float-orb pointer-events-none absolute left--6rem top-24 -z-10 size-64 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="float-orb pointer-events-none absolute right--4rem top-56 -z-10 size-72 rounded-full bg-sky-300/20 blur-3xl [animation-delay:-5s]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-20 pt-6 sm:px-8 lg:px-10 lg:pt-8">
        <header className="glass-panel flex flex-col gap-4 rounded-full px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex size-11 items-center justify-center rounded-full bg-slate-950 shadow-lg text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
              RF
            </div>
            <div>
              <p
                className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-500"
                aria-label="Author name"
              >
                Robert Foley
              </p>
              <p className="text-sm text-slate-800" aria-label="Author role">
                Web developer and author of every featured project
              </p>
            </div>
          </div>

          <a
            className="btn btn-ghost text-white rounded-full"
            href={siteAuthor.personalSite}
            target="_blank"
            rel="noreferrer"
          >
            robertfoley.us
            <ArrowUpRight className="size-4" />
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/65 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              <Sparkles className="size-4" />
              <span>Frontend-only profile build</span>
            </div>

            <div className="space-y-5">
              <p className="eyebrow">Product fronts, authored clearly</p>
              <h1 className="font-display balance-text max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                I build sleek web experiences and put my name behind every
                launch.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-700/85 sm:text-xl">
                {siteAuthor.headline} This profile separates my independent
                domains from the projects that live inside the Coupgroup
                ecosystem, so the portfolio stays clean, flexible, and easy to
                update as new work ships.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="btn btn-ghost rounded-full"
                href={siteAuthor.personalSite}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my personal site"
              >
                Visit my personal site
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className="btn rounded-full border border-slate-900/10 px-6"
                href="#showcases"
                aria-label="Browse the projects"
              >
                Browse the projects
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {featuredStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-[1.6rem] px-5 py-5"
                >
                  <p className="font-display text-4xl font-semibold text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="deep-panel rounded-[2.2rem] px-6 py-7 sm:px-8 sm:py-8">
            <div className="space-y-5">
              <p className="eyebrow text-white" aria-label="Author note">
                Author note
              </p>
              <h2 className="font-display balance-text text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Every featured project here is authored by Robert Foley.
              </h2>
              <p className="text-base leading-8 text-white/72">
                This page is built to make that ownership obvious while still
                keeping the portfolio easy to scan. Independent launches live in
                one lane, Coupgroup subdomain builds in another, and both stay
                tied back to my personal identity at robertfoley.us.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                <div className="mb-4 flex items-center gap-3 text-white">
                  <BadgeCheck className="size-5 text-orange-300" />
                  <p className="font-display text-xl font-semibold">
                    Clear authorship
                  </p>
                </div>
                <p className="text-sm leading-7 text-white/68">
                  Strong personal attribution, direct personal-site linking, and
                  content that makes the ownership of each launch obvious.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                <div className="mb-4 flex items-center gap-3 text-white">
                  <Workflow className="size-5 text-sky-300" />
                  <p className="font-display text-xl font-semibold">
                    Search-ready setup
                  </p>
                </div>
                <p className="text-sm leading-7 text-white/68">
                  Metadata, structured data, sitemap output, robots rules, and a
                  page hierarchy built for cleaner indexing.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="showcases" className="space-y-8">
          <SectionHeading
            eyebrow="Portfolio structure"
            title="Two showcase lanes, one authorial thread."
            description="The split mirrors how the work is actually shipped: standalone brands with their own public identity, and subdomain products that strengthen coupgroup.com as a broader system."
            icon={Layers3}
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="glass-panel rounded-[1.8rem] px-6 py-6">
              <div className="mb-4 flex items-center gap-3 text-slate-950">
                <Globe className="size-5 text-orange-500" />
                <h3 className="font-display text-2xl font-semibold">
                  Standalone sites
                </h3>
              </div>
              <p className="text-base leading-8 text-slate-700/82">
                These launches carry their own domains, brand systems, and
                first-impression responsibility. They are the cleanest read on
                how I shape a product identity from the outside in.
              </p>
            </div>

            <div className="glass-panel rounded-[1.8rem] px-6 py-6">
              <div className="mb-4 flex items-center gap-3 text-slate-950">
                <Server className="size-5 text-sky-500" />
                <h3 className="font-display text-2xl font-semibold">
                  Coupgroup server sites
                </h3>
              </div>
              <p className="text-base leading-8 text-slate-700/82">
                These projects live under the Coupgroup umbrella and extend a
                shared system. The presentation focuses on utility, cohesion,
                and how each surface fits a larger web presence.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Independent domains"
            title="Standalone sites with their own names, tone, and gravity."
            description="These are the builds that stand on their own URL, carry their own brand pressure, and need immediate visual identity the moment someone lands on them."
            icon={Globe}
          />

          <div className="masonry-grid">
            {standaloneProjects.map((project) => (
              <ProjectCard
                key={project.url}
                project={project}
                sectionLabel="Standalone site"
              />
            ))}
          </div>
        </section>

        <section className="deep-section rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Coupgroup ecosystem"
              title="Subdomain builds that extend a shared platform."
              description="These launches live on coupgroup.com URLs, so the design language balances autonomy with system-level consistency. The result is a cleaner ecosystem story rather than a pile of unrelated properties."
              icon={Boxes}
              inverse
            />

            <div className="masonry-grid">
              {coupgroupProjects.map((project) => (
                <ProjectCard
                  key={project.url}
                  project={project}
                  sectionLabel="Coupgroup build"
                  dark
                />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]">
          <div className="glass-panel rounded-3xl px-6 py-7 sm:px-8 sm:py-8">
            <div className="mb-5 flex items-center gap-3 text-slate-950">
              <Sparkles className="size-5 text-orange-500" />
              <p className="font-display text-2xl font-semibold">
                What this profile is signaling
              </p>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-700/82 sm:text-lg">
              A deliberate visual system, clear project segmentation, and SEO
              foundations that are already in place. It is designed so you can
              keep editing the project arrays as your work changes without
              rebuilding the entire front end every time.
            </p>
          </div>

          <div className="glass-panel rounded-3xl px-6 py-7 sm:px-8 sm:py-8">
            <div className="mb-5 flex items-center gap-3 text-slate-950">
              <BadgeCheck className="size-5 text-sky-500" />
              <p className="font-display text-2xl font-semibold">
                Direct link back
              </p>
            </div>
            <a
              className="btn btn-ghost text-white rounded-full shadow-md"
              href={siteAuthor.personalSite}
              target="_blank"
              rel="noreferrer"
            >
              Visit robertfoley.us
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <footer className="deep-panel rounded-[2.2rem] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="eyebrow text-white/55">Built for the long run</p>
              <h2 className="font-display balance-text max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                A profile surface you can keep shipping with.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/72">
                New project to add? Update the project arrays, keep the same
                structure, and the showcase stays consistent without losing the
                distinction between standalone work and Coupgroup properties.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="btn rounded-full border-0 bg-white px-6 text-slate-950 hover:bg-white/90"
                href="#showcases"
              >
                Review the work
                <ArrowRight className="size-4" />
              </a>
              <a
                className="btn btn-ghost text-white rounded-4xl"
                href={siteAuthor.personalSite}
                target="_blank"
                rel="noreferrer"
              >
                robertfoley.us
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
