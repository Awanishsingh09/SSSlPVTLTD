import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl w-full">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Excellence in Construction Since 2005
            </span>
          </div> */}

          {/* Headline (2 lines only) */}
          <h1 className="text-2xl xs:text-3xl md:text-5xl text-white lg:text-6xl xl:text-7xl font-extrabold leading-tight mt- xs:mt-4 md:mt-2 mb-2 animate-fade-up animation-delay-100 break-words">
            Building Infrastructure.<br className="hidden md:block" />
            Delivering Possibilities.
          </h1>

          {/* Subheadline */}
          <p className="text-base xs:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up animation-delay-200">
            SHIVASHAKTHI SKYLINE PVT LTD is a premier construction and infrastructure development company, delivering excellence in residential, commercial, and infrastructure projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row md:flex-row flex-wrap gap-4 animate-fade-up animation-delay-300">
            <Link to="/projects">
              <Button variant="hero" size="xl">
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20 animate-fade-up animation-delay-400">
            <div>
              <div className="stat-number">25+</div>
              <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <div className="stat-number">500+</div>
              <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <div className="stat-number">200+</div>
              <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-primary to-transparent" />
    </section>
  );
}
