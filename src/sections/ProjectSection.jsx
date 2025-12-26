import { useState, useEffect, useRef } from "react";

function ProjectSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Formy-AI",
      year: "2024",
      role: "UI/UX Design & Development",
      stack: "Next.js, PostgreSQL, Clerk, Gemini API",
      tagline: "Next-gen form builder leveraging AI.",
      details:
        "Built an AI-assisted form builder that lets users generate complex multi-step forms from natural language. Integrated auth, role-based access, and analytics. Focused on clean UX with subtle animations.",
    },
    {
      title: "FileFlex",
      year: "2024",
      role: "UI/UX Design & Development",
      stack: "Next.js, TypeScript, FFmpeg",
      tagline: "Streamlined file processing dashboard.",
      details:
        "Dashboard for uploading, transcoding, and organizing media. Used FFmpeg for video processing with real-time status tracking, error catches, and job outputs.",
    },
    {
      title: "PaperLink",
      year: "2023",
      role: "Full Stack / Hackathon Project",
      stack: "React, Node.js, OpenAI API",
      tagline: "Fast research summaries with TTS.",
      details:
        "Created at CalHacks with a team of four. Converts arXiv links into digestible summaries with optional TTS for accessibility. I built backend integration & reading view.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // DYNAMIC BACKGROUND ON SCROLL
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className={`min-h-screen px-6 md:px-12 py-16 md:py-20 transition-colors duration-700 ${
        inView ? "bg-black text-white" : "bg-[#fbf6ea] text-black"
      }`}
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <h2
          className={`absolute top-8 left-1/2 -translate-x-1/2 text-3xl md:text-8xl font-bold ${
            inView ? "text-white" : "text-black"
          }`}
        >
          PROJECTS
        </h2>

        {/* push list content below the big heading */}
        <div className="pt-24 md:pt-40">
          <div className="divide-y divide-current/10 border-t border-b border-current/10">
            {projects.map((project, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={project.title} className="group">
                  {/* ROW HEADER */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between gap-4 py-4 md:py-5 text-left transition-colors duration-200 hover:bg-current/5 px-2 -mx-2 rounded-lg"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-base md:text-lg font-semibold transition-colors duration-300 group-hover:text-purple-400">
                        {project.title}
                      </span>
                      <span className="text-xs md:text-sm opacity-60">
                        {project.year}
                      </span>
                    </div>

                    <div className="hidden flex-1 items-center justify-center text-xs md:flex opacity-70">
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
                        className={`mt-1 inline-block h-4 w-4 border-b-2 border-r-2 border-current transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                          isOpen ? "rotate-45 scale-110" : "-rotate-135"
                        }`}
                      />
                    </div>
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    style={{
                      transitionProperty: "grid-template-rows, opacity",
                      transitionDelay: isOpen ? "0ms, 150ms" : "0ms, 0ms",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`pb-4 md:pb-5 text-sm md:text-base opacity-90 leading-relaxed transition-transform duration-500 ease-out ${
                          isOpen ? "translate-y-0" : "-translate-y-2"
                        }`}
                      >
                        {project.details}
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

export default ProjectSection;
