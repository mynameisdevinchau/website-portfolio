function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20 bg-[#fbf6ea] border-8 border-blue-500">
      <h2 className="absolute top-6 left-6 md:top-8 md:left-12 text-3xl md:text-4xl font-bold text-black">
        About
      </h2>

      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10 w-full">
        <div className="flex-1">
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            I'm a software engineer focusing on creating fun, user-friendly
            experiences. I build interactive apps using{" "}
            <span className="font-medium text-black bg-white/60 px-2 py-0.5 rounded">
              React
            </span>
            ,{" "}
            <span className="font-medium text-black bg-white/60 px-2 py-0.5 rounded">
              JavaScript
            </span>
            , and{" "}
            <span className="font-medium text-black bg-white/60 px-2 py-0.5 rounded">
              CSS
            </span>{" "}
            — and I enjoy turning ideas into delightful interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-black border">
              UI
            </span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-black border">
              Accessibility
            </span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-black border">
              Testing
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-black shadow-lg">
            <img
              src="d2e7b8e6-73ea-441a-9925-8dfec28f3873.jpg"
              alt="portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
