import React, { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const name = "DEVIN";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-12 bg-[#fbf6ea] overflow-hidden">
      <div className="text-center flex flex-col items-center gap-6">
        {/* Hello fades in from left */}
        <h1
          className={[
            "text-4xl md:text-6xl text-neutral-800 font-semibold tracking-tight",
            "transition-all duration-700",
            isLoaded
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0",
          ].join(" ")}
        >
          Hello! I&apos;m
        </h1>

        {/* Name - letter by letter reveal with stagger */}
        <div className="flex">
          {name.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={[
                "hero-letter", // CSS adds easing + delay handling
                "text-[8rem] md:text-[12rem] font-extrabold leading-none text-neutral-900",
                "transition-all duration-500",
                isLoaded
                  ? "translate-y-0 opacity-100 rotate-0"
                  : "translate-y-16 opacity-0 rotate-12",
              ].join(" ")}
              style={{
                // used only to pass numbers to CSS; actual delay calc happens in CSS
                "--i": index,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline fades in */}
        <p
          className={[
            "text-xl md:text-2xl text-neutral-600 tracking-wide max-w-2xl",
            "transition-all duration-700",
            isLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDelay: "1100ms" }}
        >
          Writer of clean, efficient, and effective code
        </p>

        {/* Line draws from left */}
        <div className="relative h-[3px] w-64 mt-3 mb-2 rounded-full bg-black/20 overflow-hidden">
          <div
            className={[
              "absolute inset-y-0 left-0 bg-black/80 rounded-full",
              "transition-all duration-700 ease-out",
              isLoaded ? "w-full" : "w-0",
            ].join(" ")}
            style={{ transitionDelay: "1300ms" }}
          />
        </div>

        {/* Buttons pop in */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <button
            className={[
              "px-6 py-3 bg-black text-white font-semibold rounded-full text-lg",
              "transition-all duration-500 hover:bg-neutral-800 hover:scale-105",
              isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: "1500ms" }}
            type="button"
          >
            See My Work
          </button>

          <button
            className={[
              "px-6 py-3 border-2 border-black text-black bg-transparent font-semibold rounded-full text-lg",
              "transition-all duration-500 hover:bg-black hover:text-white hover:scale-105",
              isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: "1650ms" }}
            type="button"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
