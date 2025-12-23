import "./HeroSection.css";
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between gap-8 px-12 bg-[#fbf6ea] border-8 border-blue-500">
      <div className="flex flex-col flex-[4]">
        <div className="slide-wrapper mb-4">
          <h1 className="hello-slide text-4xl md:text-6xl font-bold text-black">
            Hello! I&apos;m
          </h1>
        </div>
        {/* Might be too extra to do the double slide */}
        <h1 className="slide-wrapper text-4xl md:text-6xl text-black">
          <p className="dynamic-slide text-4xl md:text-6xl text-black font-bold">
            Devin
          </p>
        </h1>
      </div>
      {/* Right side will be images. I don't know what it will be yet */}
      <div className="flex-shrink-0">
        <div className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-black shadow-lg">
          <img
            src="d2e7b8e6-73ea-441a-9925-8dfec28f3873.jpg"
            alt="portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
