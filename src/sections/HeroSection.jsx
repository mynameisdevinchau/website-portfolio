import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-12 bg-[#fbf6ea]">
      <div className="text-center flex flex-col items-center gap-6">
        {/* top intro */}
        <h1 className="text-4xl md:text-6xl text-neutral-800 font-semibold tracking-tight">
          Hello! I&apos;m
        </h1>

        {/* going to make this dynamic*/}
        <h2 className="hero-name-title text-[8rem] md:text-[12rem] font-extrabold leading-none uppercase">
          Devin
        </h2>

        {/* i might change this lol*/}
        <p className="text-xl md:text-2xl text-neutral-600 tracking-wide max-w-2xl">
          Writer of clean, efficient, and effective code
        </p>

        {/* accent divider. i want to do something else with this line but i am not sure yet*/}
        <div className="h-[3px] w-64 bg-black/80 mt-3 mb-2 rounded-full" />

        {/* CTA row */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full text-lg transition hover:bg-neutral-800">
            See My Work
          </button>
          <button className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full text-lg transition hover:bg-black hover:text-white">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
