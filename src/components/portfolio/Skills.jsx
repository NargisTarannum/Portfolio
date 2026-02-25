import React from "react";
import { Badge } from "../ui/badge";

const skillGroups = [
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Redux",
      "Context API",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Styled Components",
    ],
  },
  {
    title: "Dev Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Webpack",
      "Vite",
      "CI/CD",
      "Agile/Scrum",
      "Jira",
      "REST APIs",
    ],
  },
  {
    title: "UI/UX & Performance",
    skills: [
      "Figma",
      "Responsive Design",
      "Performance Optimization",
      "Lighthouse",
      "PWA",
      "Cross-browser Testing",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;