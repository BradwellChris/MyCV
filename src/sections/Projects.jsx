import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="py-32 px-20 relative overflow-hidden z-10" id="projects">
      <div className="container mx-auto max-w-3xl mb-16 px-6">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img src={project.image} alt={project.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                  <SiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <ArrowUpRight
                  className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
    
      </div>
    </section>
  )
}

export default Projects;
