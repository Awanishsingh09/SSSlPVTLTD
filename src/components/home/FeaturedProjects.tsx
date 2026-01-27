import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";

const projects = [
  {
    image: projectCommercial,
    title: "Skyline Business Tower",
    category: "Commercial",
    location: "Hyderabad",
    status: "Completed",
  },
  {
    image: projectResidential,
    title: "Green Valley Residences",
    category: "Residential",
    location: "Bangalore",
    status: "Completed",
  },
  {
    image: projectInfrastructure,
    title: "National Highway Extension",
    category: "Infrastructure",
    location: "Chennai-Bangalore Corridor",
    status: "Completed",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="outline-gold" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/projects"
              className="project-card group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="project-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Always visible badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                {project.status}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
