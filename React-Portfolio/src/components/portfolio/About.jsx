import { Card, CardContent } from "../ui/card";
import { Briefcase, Users, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Users Served", value: "100K+" },
  { icon: Zap, label: "Dev Time Reduced", value: "35%" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <p className="text-muted-foreground leading-relaxed text-lg">
          Results-driven Senior Frontend Developer with 5+ years of experience
          designing and developing high-performance web applications across
          social services tech, fintech, and enterprise domains. Specialized in
          React.js with deep expertise in scalable architecture, responsive
          design, and accessibility. Proven track record of improving application
          performance, reducing load times, and enhancing user engagement through
          modern frontend technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-border/50 hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6 text-center space-y-3">
                <stat.icon className="h-8 w-8 mx-auto text-primary" />
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;