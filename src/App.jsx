import "./App.css";
import { useEffect } from "react";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

function App() {
  useEffect(() => {
    const bg = document.getElementById("dynamic-bg");
    const projects = document.getElementById("projects-section");

    if (!bg || !projects) return;

    const defaultColor = "#fbf6ea";
    const projectsColor = "#000000";

    const observer = new IntersectionObserver(
      ([entry]) => {
        bg.style.backgroundColor = entry.isIntersecting
          ? projectsColor
          : defaultColor;
      },
      { threshold: 0.3 }
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="dynamic-bg"
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: "#fbf6ea" }}
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
