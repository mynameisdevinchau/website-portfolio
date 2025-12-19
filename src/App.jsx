import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//imports for different sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection"
import ProjectSection from "./sections/ProjectSection"

function App() {
  /*
<Line that follows> 
<HeroSection>
<About> 
*/
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
      <ProjectSection></ProjectSection>
    </>
  );
}

export default App;
