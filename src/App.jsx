import { useMemo, useState } from "react";
import "./App.css";
import portrait from "./assets/devin-portrait.jpg";
import ExperienceItem from "./components/ExperienceItem";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SparkIcon,
} from "./components/Icons";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";
import { experience, profile, projects } from "./data/portfolioData";
function StatCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-neutral-950">{value}</p>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("swe");
  const categoryOptions = [
    { key: "swe", label: "SWE" },
    { key: "de", label: "DE" },
    { key: "ds", label: "DS" },
    { key: "da", label: "DA" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.categories?.includes(activeCategory),
    );
  }, [activeCategory]);
  return (
    <div className="relative isolate overflow-x-hidden bg-[#f7f3ea] text-neutral-900">
      <div className="page-gradient pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="page-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />

      <header className="relative z-30 sticky top-0 border-b border-black/5 bg-[#f7f3ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-4 xl:px-12">
          <a className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-950">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a
              href="../Devin_Chau_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-neutral-950"
            >
              Resume
            </a>
            <a href="#experience" className="transition hover:text-neutral-950">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-neutral-950">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-neutral-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="relative z-10 mx-auto max-w-[1500px] px-8 pb-14 pt-8 xl:px-12 lg:pt-10"
      >
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 shadow-sm">
              <SparkIcon />
              Building software, data products, and ML workflows
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-700">
                {profile.title}
              </p>
              <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.01em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                <span className="block leading-[1.08]">Building useful,</span>
                <span className="block leading-[1.08]">
                  reliable, and scalable
                </span>
                <span className="block leading-[1.08]">solutions.</span>
              </h1>
              <p className="max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
                {profile.intro}
              </p>
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 sm:text-base">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                View selected work
                <ArrowUpRightIcon />
              </a>
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:border-neutral-950"
              >
                Get in touch
                <MailIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <SocialLink
                href={profile.links.github}
                label="GitHub"
                icon={<GithubIcon />}
              />
              <SocialLink
                href={profile.links.linkedin}
                label="LinkedIn"
                icon={<LinkedinIcon />}
              />
              <SocialLink
                href={profile.links.email}
                label="Email"
                icon={<MailIcon />}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard
                label="Current focus"
                value="Full-stack + data tooling"
              />
              <StatCard
                label="Experience"
                value="3 roles across software, ML, and research"
              />
              <StatCard label="Core stack" value="Python, React, SQL, AWS" />
            </div>
          </div>

          <aside className="hero-panel rounded-[32px] border border-neutral-200 bg-white/90 p-4 xl:p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[26px] border border-neutral-200 bg-neutral-100">
              <img
                src={portrait}
                alt="Portrait of Devin Chau"
                className="h-[360px] w-full object-cover object-center sm:h-[420px]"
              />
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-2xl font-semibold text-neutral-950">
                  {profile.name}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {profile.title} · {profile.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-700"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-[#faf7f0] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Toolbox
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm ring-1 ring-black/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
          <div className="space-y-5 lg:sticky lg:top-24 self-start">
            <SectionTitle
              eyebrow="About"
              title="A one-page portfolio that highlights the work that matters most."
              description="This page brings together my experience and projects in a way that feels simple, focused, and easy to follow."
            />

            <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-700">
                What I bring
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                I like work that blends engineering, data, and product thinking,
                with an emphasis on building things that are clear, reliable,
                and useful.
              </p>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-5 text-white shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                How I work
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                I care about clean interfaces, maintainable systems, and
                practical solutions that make real workflows easier.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[22px] border border-neutral-200 bg-[#faf7f0] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-950">
                  Software + Data + ML
                </p>
              </div>

              <div className="rounded-[22px] border border-neutral-200 bg-[#faf7f0] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Roles
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-950">
                  3 experiences
                </p>
              </div>

              <div className="rounded-[22px] border border-neutral-200 bg-[#faf7f0] p-4 col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Core tools
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-950">
                  Python, React, SQL, Flask
                </p>
              </div>
            </div>
          </div>

          <div id="experience" className="space-y-6">
            <SectionTitle
              eyebrow="Experience"
              title="Recent roles"
              description="A mix of product engineering, applied data work, and research-driven analysis."
            />

            <div className="relative space-y-5 border-l border-neutral-300 pl-6">
              {experience.map((item) => (
                <ExperienceItem
                  key={`${item.company}-${item.role}`}
                  item={item}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="mt-16 space-y-6 lg:mt-20">
          <SectionTitle
            eyebrow="Selected projects"
            title="Projects that show range without feeling scattered."
            description="These are the strongest signals across my portfolio: full-stack products, analytics work, and ML-enabled systems with clear outcomes and grounded implementation details."
          />

          <div className="mb-6 flex flex-wrap gap-3">
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
                      : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-950 hover:text-neutral-950"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-sm text-neutral-700">
              No projects added for this category yet.
            </p>
          )}
        </section>

        <section id="contact" className="mt-16 lg:mt-20">
          <div className="rounded-[36px] border border-neutral-200 bg-neutral-950 px-6 py-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.16)] sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                  Contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Interested in working together or just want to connect?
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  I’m always open to conversations about software engineering,
                  data products, and projects where thoughtful execution matters
                  as much as the idea itself.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profile.links.email}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5"
                >
                  Email me
                  <MailIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40"
                >
                  LinkedIn
                  <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
