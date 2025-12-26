import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

//imports for different sections
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

    const defaultColor = "#fbf6ea"; // original hero color
    const projectsColor = "#000000"; // black when in view

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bg.style.backgroundColor = projectsColor; // enter projects
        } else {
          bg.style.backgroundColor = defaultColor; // leave projects
        }
      },
      { threshold: 0.3 } // triggers when ~30% of the section is visible
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <div className="min-h-screen bg-black text-white"> */}
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
    </>
  );
}

export default App;
