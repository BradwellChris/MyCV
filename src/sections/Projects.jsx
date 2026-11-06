
const projects = [
  {
    title: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    github: ""
  },
];

function Projects() {
  return (
    <section className="py-32 relative overflow-hidden z-10" id="projects">
      <div className="container mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
          Projects that
          <span className="font-serif italic font-normal text-white">
            {" "}
            built my foundation
          </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">A collection of projects I have worked on while learning how to code. From looking at simple to complex webistes and how my coding style could have changed during that time.</p>
      </div>


      {/* Projects Grid */}
      <div></div>
    </section>
  )
}

export default Projects;
