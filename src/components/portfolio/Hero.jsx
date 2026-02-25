import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm">
          <MapPin className="h-3.5 w-3.5" />
          Nagpur, India
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Nargis Tarannum
        </h1>
        <p className="text-lg sm:text-xl text-primary font-medium">
          Senior React Developer & Frontend Engineer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          5+ years crafting high-performance web applications in social services tech, fintech, and enterprise domains. Passionate about clean architecture and exceptional user experiences.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button onClick={() => scrollTo("#projects")} size="lg">
            View My Work
          </Button>
          <Button onClick={() => scrollTo("#contact")} variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
        <button
          onClick={() => scrollTo("#about")}
          className="mt-12 inline-block animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero