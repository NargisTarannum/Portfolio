import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Social Services Management Platform",
    description:
      "Enterprise-grade social services platform with real-time data dashboards, case management, and role-based access control.",
    tags: ["React 18", "Tailwind CSS"],
  },
  {
    title: "Fintech Customer Dashboard",
    description:
      "Interactive financial dashboard serving 100K+ users with transaction tracking, analytics charts, and secure payment integrations.",
    tags: ["React.js", "Redux", "REST APIs", "Chart.js"],
  },
  {
    title: "Reusable Component Library",
    description:
      "Custom design system with 50+ accessible, fully documented components built with Storybook, reducing team development time by 35%.",
    tags: ["React", "Storybook", "Styled Components"],
  },
  {
    title: "Supply Chain Management App",
    description:
      "Enterprise supply chain application with responsive layouts, complex data tables, and real-time inventory tracking.",
    tags: ["React", "Ant Design", "PWA"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>

                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;