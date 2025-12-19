import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//imports for different sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

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
    </>
  );
}

export default App;
