import { useRef, useEffect } from "react";

function ExperienceSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    { company: "Verzena", role: "Full Stack Intern" },
    { company: "Data Glacier", role: "Data Science Intern" },
    { company: "ThinkNeuro", role: "Intern" },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollableHeight = container.offsetHeight - viewportHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableHeight);
      const progress = scrolled / scrollableHeight;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardCount = experiences.length;
        const start = index / cardCount;
        const end = (index + 1) / cardCount;

        let x = 100;
        let opacity = 0;

        if (progress >= start) {
          const local = Math.min((progress - start) / (end - start), 1);
          x = (1 - local) * 100;
          opacity = local;
        }

        if (progress > end) {
          x = 0;
          opacity = 1;
        }

        const stackOffset = index * 120; // 120px offset shows a piece of each card

        card.style.transform = `translateX(${x}%)`;
        card.style.opacity = opacity.toString();
        card.style.left = `${stackOffset}px`;
        card.style.zIndex = (index + 1).toString();
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [experiences.length]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#fbf6ea]"
    >
      <div className = "text-8xl font-bold">Experience</div>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-8">
        <div className="relative w-full h-full">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute w-[600px] h-full bg-card border border-border rounded-xl p-12 flex flex-col justify-center shadow-lg transition-all duration-300 bg-blue-200"
              style={{
                transformOrigin: "left center",
              }}
            >
              <h2 className="text-4xl font-bold mb-2 text-foreground">
                {exp.company}
              </h2>
              <p className="text-xl text-muted-foreground">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
