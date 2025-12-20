import { useRef, useEffect } from "react";
function AboutSection() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  {
    /* This useEffect is for horizontal scrolling */
  }
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return;

      const container = containerRef.current;
      const horizontal = horizontalRef.current;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = container.offsetHeight - viewportHeight;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableHeight);

      const progress = scrolled / scrollableHeight;

      const maxScroll = horizontal.scrollWidth - horizontal.clientWidth;

      horizontal.scrollLeft = progress * maxScroll;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ height: "300vh" }}
      className="relative bg-blue-200 border-8"
    >
      {/* The idea behind this is that I want to have the same fonts for the major points
      and then for the answers, a different, sleek font */}
      {/* This first section is for the text on the left
        The second part of the flex-row will entail perhaps images
        or perhaps display the text from the left flexbox */}
      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex flex-row gap-24 px-12 overflow-hidden scrollbar-hide"
        >
          <div className="min-w-[100vw]">
            <h1 className="text-4xl font-bold">About Me</h1>
          </div>

          <div className="min-w-[100vw]">
            <h1 className="text-4xl font-bold">Who Am I?</h1>
          </div>

          <div className="min-w-[100vw]">
            <h1 className="text-4xl font-bold">My Story</h1>
          </div>

          <div className="min-w-[100vw] flex items-center justify-center">
            <img
              src="black.png"
              className="w-80 h-80 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
