import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="space-y-4">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <Card className="border-border/50">
          <CardContent className="p-6 flex gap-5">

            <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                Master of Computer Applications (MCA)
              </h3>

              <p className="text-primary font-medium">
                Jamia Millia Islamia, New Delhi
              </p>

              <p className="text-sm text-muted-foreground">
                2016 – 2019 · Computer Software Engineering
              </p>
            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default Education;