import { useState } from "react";

function ProjectSection() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind.",
      image: "/project1.jpg",
    },
    {
      title: "Full Stack App",
      description: "A CRUD application using Node.js and MongoDB.",
      image: "/project2.jpg",
    },
    {
      title: "API Project",
      description: "A REST API with authentication and testing.",
      image: "/project3.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fbf6ea] px-12 py-20">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <button
            key={i}
            onClick={() => setActiveProject(project)}
            className="group relative overflow-hidden border bg-white aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-lg w-full p-6 relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>

            <p>{activeProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
