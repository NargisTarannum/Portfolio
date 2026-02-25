const experiences = [
  {
    role: "Senior Consultant",
    company: "CAIRS Solutions",
    period: "April 2024 – Jun 2025",
    location: "Remote, India",
    points: [
      "Led development of an enterprise-grade social services platform using React 18, TypeScript, and Zustand, achieving 40% improvement in page load speed.",
      "Designed and implemented a custom component library with Storybook documentation, reducing development time by 35%.",
      "Integrated RESTful APIs and implemented advanced caching strategies, reducing redundant API calls by 50%.",
      "Mentored a team of 4 junior developers, conducting code reviews and pair programming sessions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "PayMe India",
    period: "April 2020 – July 2023",
    location: "Delhi, India",
    points: [
      "Developed and maintained customer-facing fintech dashboards using React.js, Redux, and Tailwind CSS, serving 100K+ active users.",
      "Built reusable UI components and implemented lazy loading, reducing initial bundle size by 30%.",
      "Collaborated with UX/UI designers to translate Figma designs into pixel-perfect, accessible interfaces.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Coats Digital",
    period: "Feb 2019 – March 2020",
    location: "Delhi, India",
    points: [
      "Contributed to the development of a supply chain management application using React and Ant Design.",
      "Implemented responsive layouts and cross-browser compatibility for enterprise users.",
      "Participated in Agile sprints, contributing to sprint planning and retrospectives.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} · {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;