function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 bg-blue-200">

      {/* The idea behind this is that I want to have the same fonts for the major points
      and then for the answers, a different, sleek font */}
      <div className ="flex flex-row p-12">
        {/* This first section is for the text on the left
        The second part of the flex-row will entail perhaps images
        or perhaps display the text from the left flexbox */}
    <div className="flex flex-col p-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <h1 className="text-4xl font-bold mb-6">
        {/* Maybe I can talk about stories? maybe a carosel?  */}
        Who Am I?  
      </h1>

      <h1 className="text-4xl font-bold mb-6">
        
      </h1>

      <p className="text-4xl font-bold mb-6">
        what
      </p>
       </div>

       {/* This will be where the carousel or image will go
       I'll need to adjust the spacing properly but the idea is there */}
      <div className=" ">
              <img
                src="black.png"
                // className="w-80 h-80 rounded-xl object-cover"
              />
      </div>

      </div>
    </section>
  );
}

export default AboutSection;
