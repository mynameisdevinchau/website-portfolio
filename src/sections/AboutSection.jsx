import { useEffect, useRef, useState } from "react";

function Card({ index, activeCount, className, title, description, tags }) {
  const isVisible = index < activeCount;

  return (
    <div
      className={`
        absolute transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      <div className="w-60 h-100 bg-[#fbf6ea] rounded-lg shadow-lg p-6 border border-gray-400">
        <h4 className="font-semibold text-lg text-black mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = sectionRef.current.offsetHeight - vh;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrolled / scrollable;

      const count = Math.ceil(progress * 4);
      setActiveCount(count);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-slate-900">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2 className="absolute top-8 left-12 text-3xl md:text-8xl font-bold text-black">
          About
        </h2>

        <div className="relative w-full max-w-6xl h-[400px]">
          {/* Card placements */}
          <Card
            index={0}
            activeCount={activeCount}
            className="left-0 top-0"
            title="Who I Am"
            description="A software engineer focused on creating fun, user-friendly experiences. I build interactive apps that bring ideas to life."
          />
          <Card
            index={1}
            activeCount={activeCount}
            className="left-1/4 top-48"
            title="What I Do"
            description="I specialize in front-end development with React, JavaScript, and CSS. I craft seamless interfaces and smooth interactions."
          />
          <Card
            index={2}
            activeCount={activeCount}
            className="left-1/2 top-0"
            title="My Approach"
            description="I believe in empathy and attention to detail. Every project starts with understanding user needs and crafting delightful solutions."
          />
          <Card
            index={3}
            activeCount={activeCount}
            className="right-0 top-48"
            title="Let's Connect"
            description="I'm excited to collaborate on projects that value clarity, design, and real-world impact. Let's build something great."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
