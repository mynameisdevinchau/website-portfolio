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
  const [activeCategory, setActiveCategory] = useState("swe");

  const categoryOptions = [
    { key: "swe", label: "SWE" },
    { key: "de", label: "DE" },
    { key: "ds", label: "DS" },
    { key: "da", label: "DA" },
  ];

  const projects = useMemo(
    () => [
      {
        title: "Wildfire Severity Prediction",
        year: "2025",
        role: "Data Analysis, Modeling & Web Development",
        stack: "Python, Dash, Google Cloud, Machine Learning",
        tagline:
          "Interactive wildfire severity analytics and prediction platform.",
        details:
          "Built a full-stack analytical dashboard that predicts wildfire severity in California using cleaned weather, wildfire, and census data. Engineered features and trained models such as Random Forest and Stacking Regressor for prediction. Developed dynamic visualizations for trend analysis and deployed the app on Google Cloud.",
        repoUrl: "https://github.com/Sthearye/Wildfire-Severity-Website",
        categories: ["ds", "da"],
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
        categories: ["swe", "ds"],
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
        categories: ["swe"],
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
        categories: ["da"],
      },
      {
        title: "Weather and Energy Demand Pipeline",
        year: "2025",
        role: "Data Engineering & Cloud Pipeline Development",
        stack: "Python, AWS Lambda, S3, Glue, Athena, PySpark, SQL",
        tagline:
          "End-to-end AWS pipeline for weather and electricity demand data.",
        details:
          "Built an EventBridge-triggered AWS Lambda workflow to ingest weather and energy demand data from public APIs into partitioned S3 storage. Used AWS Glue and PySpark to clean, transform, and join datasets, then wrote curated Parquet outputs for Athena-based querying and downstream analysis.",
        repoUrl: "https://github.com/mynameisdevinchau/weather-energy-pipeline",
        categories: ["de", "da"],
      },
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.categories.includes(activeCategory),
    );
  }, [activeCategory, projects]);

  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const arm = () => {
      if (window.scrollY > 10) setArmed(true);
    };
    window.addEventListener("scroll", arm, { passive: true });
    arm();
    return () => window.removeEventListener("scroll", arm);
  }, []);

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

  const [hRef, hIn] = useInViewOnce({
    threshold: 0.55,
    rootMargin: "0px 0px -10% 0px",
  });

  const headerLoaded = armed && hIn;

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (!inView) setOpenIndex(null);
  }, [inView]);

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className={cx(
        "min-h-screen px-6 py-16 transition-colors duration-700 md:px-12 md:py-20",
        inView ? "bg-black text-white" : "bg-[#fbf6ea] text-black",
      )}
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <div
          ref={hRef}
          className={cx(
            "flex flex-col items-center transition-all duration-700 ease-out",
            headerLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0",
          )}
        >
          <h2 className="text-3xl font-bold md:text-8xl">PROJECTS</h2>

          <div className="relative mt-4 h-[3px] w-64 overflow-hidden rounded-full md:w-80">
            <div
              className={cx(
                "absolute inset-0 origin-center rounded-full transition-transform duration-700 ease-out",
                inView ? "bg-white/90" : "bg-black/80",
                headerLoaded ? "scale-x-100" : "scale-x-0",
              )}
              style={{ transitionDelay: "150ms" }}
            />
          </div>

          <div
            className={cx(
              "mt-8 flex flex-wrap justify-center gap-3 transition-all duration-700",
              headerLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: "250ms" }}
          >
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={cx(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                    isActive
                      ? inView
                        ? "border-white bg-white text-black"
                        : "border-black bg-black text-white"
                      : inView
                        ? "border-white/30 bg-white/5 text-white hover:bg-white hover:text-black"
                        : "border-black/20 bg-black/5 text-black hover:bg-black hover:text-white",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-10 md:pt-12">
          <div className="divide-y divide-current/10 border-b border-t border-current/10">
            {filteredProjects.map((project, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${activeCategory}-${project.title}`}
                  className="group"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className={cx(
                      "flex w-full items-center justify-between gap-4 px-2 py-4 text-left transition-colors duration-200 md:py-5",
                      "-mx-2 rounded-lg hover:bg-current/5",
                    )}
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold transition-colors duration-300 group-hover:text-blue-300 md:text-lg">
                        {project.title}
                      </span>
                      <span className="text-xs opacity-60 md:text-sm">
                        {project.year}
                      </span>
                    </div>

                    <div className="hidden flex-1 items-center justify-center px-3 text-center text-xs opacity-70 md:flex">
                      {project.tagline}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-right opacity-80 md:text-sm">
                        {project.role}
                      </span>
                      <span className="text-right text-[10px] opacity-60 md:text-xs">
                        {project.stack}
                      </span>

                      <span
                        className={cx(
                          "mt-1 inline-block h-4 w-4 border-b-2 border-r-2 border-current transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          isOpen ? "rotate-45 scale-110" : "-rotate-135",
                        )}
                      />
                    </div>
                  </button>

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
                          "pb-4 text-sm leading-relaxed opacity-90 transition-transform duration-500 ease-out md:pb-5 md:text-base",
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
                                "inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4",
                                "opacity-90 hover:opacity-100",
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

            {filteredProjects.length === 0 && (
              <div className="py-10 text-center text-sm opacity-70 md:text-base">
                No projects added for this category yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
