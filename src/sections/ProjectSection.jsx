import { useState } from "react";

function ProjectSection() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "PaperLink",
      description: "Created in CalHacks 12.0, a group of 4 created this.",
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
    <section className="min-h-screen bg-slate-900 px-12 py-20">
      <h2 className="text-8xl font-bold mb-8">Projects</h2>


     
        
    </section>
  );
}

export default ProjectSection;
