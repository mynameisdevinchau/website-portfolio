/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from "react";

const EXPERIENCES = [
  {
    company: "Verzena",
    role: "Software Developer Intern",
    period: "Jun 2025 – Present",
    location: "Remote",
    highlights: [
      "Built and maintained internal dashboards using React + Node.js, supporting daily workflows for the operations team.",
      "Improved backend performance by ~50% through SQL query optimization and strategic caching.",
      "Collaborated on Figma prototypes to accelerate iteration and streamline the UI/UX design process.",
      "Debugged, tested, and validated new features to ensure stable, high-quality releases.",
      "Developed a PostgreSQL-backed messaging system to enable real-time user notifications and improve responsiveness.",
    ],
    tech: ["React", "JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Data Glacier",
    role: "Data Science Intern",
    period: "Oct 2024 – Feb 2025",
    location: "Remote",
    highlights: [
      "Cleaned and analyzed large datasets to generate insights for clients through visualizations.",
      "Implemented regression and classification models with scikit-learn to provide to clients.",
      "Presented findings through a meeting, using interactive dashboards and reports to display our findings.",
    ],
    tech: ["Python", "Pandas", "scikit-learn"],
  },
  {
    company: "ThinkNeuro",
    role: "Intern",
    period: "Dec 2023 – Feb 2023",
    location: "Remote",
    highlights: [
      "Conducted bibliometric research on computational models of memory and learning, collaborating with a 10-person intern cohort to synthesize findings into a publishable research narrative",
      "Cleaned, wrangled, and validated publication metadata (authors, journals, keywords, citations) from Web of Science to support reproducible analysis and reporting in R + Excel",
      "Built data visualizations to communicate trends in research growth, high-impact authors, and keyword clusters, translating raw citation data into clear insights for a non-technical audience",
      "Coordinated team workflow and peer feedback cycles to deliver a polished final presentation under deadline constraints",
    ],
    tech: ["Python", "R", "Web of Science"],
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useInViewOnce(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCES[activeIndex];

  // Animate only when user reaches the section
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const arm = () => {
      if (window.scrollY > 10) setArmed(true);
    };
    window.addEventListener("scroll", arm, { passive: true });
    arm();
    return () => window.removeEventListener("scroll", arm);
  }, []);

  const [hRef, hIn] = useInViewOnce({
    threshold: 0.55,
    rootMargin: "0px 0px -10% 0px",
  });

  const sectionLoaded = armed && hIn;

  // Keydown support for the left list (optional but nice)
  const onKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    setActiveIndex((prev) => {
      const dir = e.key === "ArrowDown" ? 1 : -1;
      const next = (prev + dir + EXPERIENCES.length) % EXPERIENCES.length;
      return next;
    });
  };

  const lineLoaded = sectionLoaded;

  return (
    <section className="min-h-screen w-full bg-[#fbf6ea] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div
          ref={hRef}
          className={cx(
            "text-center mb-10 md:mb-12 transition-all duration-700 ease-out",
            sectionLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl md:text-8xl font-bold text-neutral-900">
            EXPERIENCE
          </h2>

          {/* Line draws from center outward (when you reach section) */}
          <div className="flex justify-center">
            <div className="relative h-[3px] w-72 md:w-80 mt-4 rounded-full overflow-hidden">
              <div
                className={cx(
                  "absolute inset-0 bg-black/80 rounded-full origin-center",
                  "transition-transform duration-700 ease-out",
                  lineLoaded ? "scale-x-35" : "scale-x-0",
                )}
                style={{ transitionDelay: "150ms" }}
              />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div
          className={cx(
            "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start",
            "transition-all duration-700 ease-out",
            sectionLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
          style={{ transitionDelay: "250ms" }}
        >
          {/* Left: Company list */}
          <div
            className="space-y-2 border-l border-neutral-300 pl-4"
            role="listbox"
            aria-label="Experience list"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            {EXPERIENCES.map((exp, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(i)}
                  className={cx(
                    "w-full text-left rounded-r-full px-4 py-3 transition-all duration-300",
                    "flex items-center gap-3 outline-none",
                    isActive
                      ? "bg-neutral-900 text-neutral-50 shadow-md"
                      : "hover:bg-neutral-100 text-neutral-700",
                    "focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf6ea]",
                  )}
                  role="option"
                  aria-selected={isActive}
                >
                  <div
                    className={cx(
                      "h-2 w-2 rounded-full border transition-colors",
                      isActive
                        ? "bg-blue-300 border-blue-300"
                        : "bg-transparent border-neutral-400",
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {exp.company}
                    </span>
                    <span
                      className={cx(
                        "text-xs",
                        isActive ? "text-neutral-200" : "text-neutral-500",
                      )}
                    >
                      {exp.role}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active card */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-100/70 via-white to-sky-100/60 blur-xl" />

            <div
              key={`${active.company}-${active.role}`} // enables a clean swap animation
              className={cx(
                "rounded-3xl border border-neutral-200 bg-white/80 p-8 md:p-10 shadow-lg backdrop-blur-sm",
                "transition-all duration-300",
                "motion-safe:animate-[fadeUp_.28s_ease-out]",
              )}
            >
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
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {!!active.tech?.length && (
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

            {/* Local keyframes for the card swap */}
            <style jsx>{`
              @keyframes fadeUp {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
