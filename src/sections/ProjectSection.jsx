/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from "react";

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

export default function ProjectSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // "arm" so section animations only happen once the user scrolls down
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const arm = () => {
      if (window.scrollY > 10) setArmed(true);
    };
    window.addEventListener("scroll", arm, { passive: true });
    arm();
    return () => window.removeEventListener("scroll", arm);
  }, []);

  // 1) inView drives the dynamic background while the section is on screen
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2) header/line animate once you reach the section
  const [hRef, hIn] = useInViewOnce({
    threshold: 0.55,
    rootMargin: "0px 0px -10% 0px",
  });

  const headerLoaded = armed && hIn;

  const projects = useMemo(() => [
    {
      title: "Wildfire Severity Prediction",
      year: "2025",
      role: "Data Analysis, Modeling & Web Development",
      stack: "Python, Dash, Google Cloud, Machine Learning",
      tagline:
        "Interactive wildfire severity analytics and prediction platform.",
      details:
        "Built a full-stack analytical dashboard that predicts wildfire severity in California using cleaned weather, wildfire, and census data. Engineered features and trained models (Random Forest & Stacking Regressor) for prediction. Developed dynamic visualizations for trend analysis and deployed the app on Google Cloud.",
      repoUrl: "https://github.com/Sthearye/Wildfire-Severity-Website",
    },
    {
      title: "PaperLink",
      year: "2025",
      role: "Full-Stack Development & AI Integration",
      stack: "Next.js 14, FastAPI, SQLite, Chroma, Claude LLM",
      tagline:
        "AI-powered research companion that summarizes and clusters academic papers.",
      details:
        "Built an AI-driven research digest tool that fetches the latest arXiv submissions based on a topic, clusters related papers using MiniLM embeddings stored in Chroma, and generates a concise weekly summary using Claude. Designed both a Next.js frontend and FastAPI backend with caching and optional text-to-speech support.",
      repoUrl: "https://github.com/SShahparnia/paperlink",
    },
    {
      title: "Event Management System",
      year: "2024",
      role: "Full-Stack Web Development",
      stack: "Java Servlets, MySQL, Apache Tomcat, JDBC",
      tagline:
        "A role-based web platform for organizing events and managing ticket purchases.",
      details:
        "Built a full-stack event management web application that supports both event organizers and customers. Implemented user authentication, event creation and management, venue and performer listings, and ticket purchasing workflows. The system uses Java Servlets with JDBC for backend logic, a MySQL database for persistence, and is deployed on Apache Tomcat.",
      repoUrl: "https://github.com/mynameisdevinchau/EventManagementSystem",
    },
    {
      title: "Starbucks Analysis",
      year: "2026",
      role: "Data Analysis & Visualization",
      stack: "Python, Pandas, Matplotlib, Seaborn",
      tagline:
        "Analyzed Starbucks customer behavior and sales data to identify trends and opportunities.",
      details:
        "Analyzed Starbucks customer data using Python libraries like Pandas and Matplotlib to uncover patterns in customer behavior and sales performance. Created visualizations to highlight key insights and supported strategic decision-making for product development and marketing campaigns.",
      repoUrl: "https://github.com/mynameisdevinchau/starbucks-analysis",
    },
  ]);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Optional: close open row when leaving section (keeps UX clean with dark/light swap)
  useEffect(() => {
    if (!inView) setOpenIndex(null);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className={cx(
        "min-h-screen px-6 md:px-12 py-16 md:py-20 transition-colors duration-700",
        inView ? "bg-black text-white" : "bg-[#fbf6ea] text-black",
      )}
    >
      <div className="relative mx-auto w-full max-w-5xl">
        {/* Header block (so the line can sit under it cleanly) */}
        <div
          ref={hRef}
          className={cx(
            "flex flex-col items-center transition-all duration-700 ease-out",
            headerLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl md:text-8xl font-bold">PROJECTS</h2>

          {/* Line draws from center outward */}
          <div className="relative h-[3px] w-64 md:w-80 mt-4 rounded-full overflow-hidden">
            <div
              className={cx(
                "absolute inset-0 rounded-full origin-center",
                inView ? "bg-white/90" : "bg-black/80",
                "transition-transform duration-700 ease-out",
                headerLoaded ? "scale-x-35" : "scale-x-0",
              )}
              style={{ transitionDelay: "150ms" }}
            />
          </div>
        </div>

        {/* push list content below the big heading */}
        <div className="pt-10 md:pt-12">
          <div className="divide-y divide-current/10 border-t border-b border-current/10">
            {projects.map((project, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={project.title} className="group">
                  {/* ROW HEADER */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={cx(
                      "flex w-full items-center justify-between gap-4 py-4 md:py-5 text-left",
                      "transition-colors duration-200 hover:bg-current/5 px-2 -mx-2 rounded-lg",
                    )}
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-base md:text-lg font-semibold transition-colors duration-300 group-hover:text-blue-300">
                        {project.title}
                      </span>
                      <span className="text-xs md:text-sm opacity-60">
                        {project.year}
                      </span>
                    </div>

                    <div className="hidden flex-1 items-center justify-center text-xs md:flex opacity-70 text-center px-3">
                      {project.tagline}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs md:text-sm opacity-80 text-right">
                        {project.role}
                      </span>
                      <span className="text-[10px] md:text-xs opacity-60 text-right">
                        {project.stack}
                      </span>

                      {/* CHEVRON */}
                      <span
                        className={cx(
                          "mt-1 inline-block h-4 w-4 border-b-2 border-r-2 border-current",
                          "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          isOpen ? "rotate-45 scale-110" : "-rotate-135",
                        )}
                      />
                    </div>
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={cx(
                      "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                    style={{
                      transitionProperty: "grid-template-rows, opacity",
                      transitionDelay: isOpen ? "0ms, 150ms" : "0ms, 0ms",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={cx(
                          "pb-4 md:pb-5 text-sm md:text-base opacity-90 leading-relaxed",
                          "transition-transform duration-500 ease-out",
                          isOpen ? "translate-y-0" : "-translate-y-2",
                        )}
                      >
                        {project.details}

                        {!!project.repoUrl && project.repoUrl !== "#" && (
                          <div className="mt-4">
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={cx(
                                "inline-flex items-center gap-2 text-sm font-semibold",
                                "underline underline-offset-4 opacity-90 hover:opacity-100",
                              )}
                            >
                              View Repo
                              <span aria-hidden="true">↗</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
