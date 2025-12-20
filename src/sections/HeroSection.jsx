function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between gap-8 px-12 bg-blue-200 border-8">
      {/* keeping color at bg-blue-200 border-8 to change to a grainy, beige background
      border-8 used to seperate aesthetically*/}

      {/* Left side will focus on dynamic text */}
      <div className="flex flex-col flex-[4]">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hello! I'm
        </h1>
        {/* This will be where the dynamic text will be. 
        I also want to add a different font style*/}
        <p className="text-4xl md:text-6xl font-bold text-white">Devin</p>
      </div>

      {/* Right side will be images. I don't know what it will be yet */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="d2e7b8e6-73ea-441a-9925-8dfec28f3873.jpg"
          // className="w-80 h-80 rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
