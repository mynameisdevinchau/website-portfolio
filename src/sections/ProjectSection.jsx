function ProjectSection() {
  const projects = [
    { title: "Project 1", description: "Description here" },
    { title: "Project 2", description: "Description here" },
    { title: "Project 3", description: "Description here" },
  ];

  return (
    <section className="min-h-screen bg-blue-200 border-8 px-12 py-20">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="p-4 border">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProjectSection;
