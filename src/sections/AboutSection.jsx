import { useEffect, useRef, useState } from "react";

function Card({ index, activeCount, className, title, description }) {
  const isVisible = index < activeCount;

  return (
    <div
      className={`
        absolute transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      <div className="group w-70 h-100 bg-background hover:bg-accent/5 rounded-xl border-2 border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h4 className="font-semibold text-lg text-foreground mb-3">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
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

      if (scrollable <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrolled / scrollable;

      setActiveCount(Math.ceil(progress * 4));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
            ABOUT
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="relative w-full max-w-6xl h-[400px]">
          <Card
            index={0}
            activeCount={activeCount}
            className="left-[-10%] top-0"
            title="Who I Am"
            description="A software engineer focused on creating fun, user-friendly experiences. I build interactive apps that bring ideas to life."
          />
          <Card
            index={1}
            activeCount={activeCount}
            className="left-[20%] top-48"
            title="What I Do"
            description="I specialize in front-end development with React, JavaScript, and CSS. I craft seamless interfaces and smooth interactions."
          />
          <Card
            index={2}
            activeCount={activeCount}
            className="left-[50%] top-0"
            title="My Approach"
            description="I believe in empathy and attention to detail. Every project starts with understanding user needs and crafting delightful solutions."
          />
          <Card
            index={3}
            activeCount={activeCount}
            className="left-[80%] top-48"
            title="Let's Connect"
            description="I'm excited to collaborate on projects that value clarity, design, and real-world impact. Let's build something great."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
