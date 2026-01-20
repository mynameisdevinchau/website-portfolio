import { useState } from "react";

const EXPERIENCES = [
  {
    company: "Verzena",
    role: "Full Stack Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Remote",
    highlights: [
      "Built internal dashboards with React + Node.js used by ops team daily.",
      "Reduced API response time by ~30% by optimizing SQL queries and caching.",
      "Collaborated with product to ship features on a 2-week sprint cadence.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Data Glacier",
    role: "Data Science Intern",
    period: "Jan 2024 – Apr 2024",
    location: "Remote",
    highlights: [
      "Cleaned and analyzed large datasets to generate insights for clients.",
      "Implemented regression and classification models with scikit-learn.",
      "Presented findings through interactive dashboards and reports.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "Tableau"],
  },
  {
    company: "ThinkNeuro",
    role: "Intern",
    period: "Sep 2023 – Dec 2023",
    location: "San Jose, CA",
    highlights: [
      "Supported research on neuroimaging data preprocessing.",
      "Automated repetitive analysis tasks with Python scripts.",
      "Collaborated with grad students on literature reviews and figures.",
    ],
    tech: ["Python", "NumPy", "Matplotlib"],
  },
];

function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCES[activeIndex];

  return (
    <section className="min-h-screen w-full bg-[#fbf6ea] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="relative pb-20 lg:pb-48">
          <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl md:text-8xl font-bold text-neutral-900">
            Experience
          </h2>
        </div>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
          {/* Left: Company list */}
          <div className="space-y-2 border-l border-neutral-300 pl-4">
            {EXPERIENCES.map((exp, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "w-full text-left rounded-r-full px-4 py-3 transition-all duration-300",
                    "flex items-center gap-3",
                    isActive
                      ? "bg-neutral-900 text-neutral-50 shadow-md"
                      : "hover:bg-neutral-100 text-neutral-700",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "h-2 w-2 rounded-full border",
                      isActive
                        ? "bg-white"
                        : "bg-transparent border-neutral-400",
                    ].join(" ")}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {exp.company}
                    </span>
                    <span className="text-xs text-neutral-500">{exp.role}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active card */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-100/70 via-white to-sky-100/60 blur-xl" />

            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-8 md:p-10 shadow-lg backdrop-blur-sm transition-all duration-300">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                    {active.role}
                  </h3>
                  <p className="mt-1 text-lg text-neutral-600">
                    {active.company}
                  </p>
                </div>
                <div className="text-right text-sm text-neutral-500">
                  <p>{active.period}</p>
                  <p>{active.location}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm md:text-base text-neutral-700">
                {active.highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {active.tech && active.tech.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
