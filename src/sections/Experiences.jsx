const experiences = [
  {
    period: "jul 2018 - mar 2025",
    role: "marketing automation executive",
    company: "twogether creeative ltd.",
    description: "",
    technologies: ["eloqua", "marketo", "campaign monitor"],
    current: "",
  },
  {
    period: "jul 2018 - mar 2025",
    role: "marketing automation executive",
    company: "twogether creeative ltd.",
    description: "",
    technologies: ["eloqua", "marketo", "campaign monitor"],
    current: "",
  },
]


function Experiences() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience built {" "}
            <span className="font-serif italic font-normal text-white">upon automation</span>
          </h2>
          <p>
            A timeline of my professional career, from curious beginner to 
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgb(137, 180, 250, 0.7)]" />
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
