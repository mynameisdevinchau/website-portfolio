import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//imports for different sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

function App() {
  /*
<Line that follows> 
<HeroSection>
<About> 
*/
  return (
    <>
      {/* <div className="min-h-screen bg-black text-white"> */}

      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      {/* </div> */}
    </>
  );
}

export default App;
