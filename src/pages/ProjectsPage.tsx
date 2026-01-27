import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

const projects = [
  {
    id: 1,
    image: projectCommercial,
    title: "Skyline Business Tower",
    category: "Commercial",
    location: "Hyderabad",
    status: "Completed",
    scope: "40-floor commercial complex with modern amenities",
    year: "2023",
  },
  {
    id: 2,
    image: projectResidential,
    title: "Green Valley Residences",
    category: "Residential",
    location: "Bangalore",
    status: "Completed",
    scope: "Premium residential complex with 500+ apartments",
    year: "2022",
  },
  {
    id: 3,
    image: projectInfrastructure,
    title: "National Highway Extension",
    category: "Infrastructure",
    location: "Chennai-Bangalore Corridor",
    status: "Completed",
    scope: "120km highway with 4 major interchanges",
    year: "2023",
  },
  {
    id: 4,
    image: projectResidential,
    title: "Sunrise Villas",
    category: "Residential",
    location: "Chennai",
    status: "Completed",
    scope: "Gated community with 200 luxury villas",
    year: "2021",
  },
  {
    id: 5,
    image: projectCommercial,
    title: "Tech Park Phase II",
    category: "Commercial",
    location: "Pune",
    status: "In Progress",
    scope: "IT Park with 2 million sq ft office space",
    year: "2024",
  },
  {
    id: 6,
    image: projectInfrastructure,
    title: "Metro Rail Station Complex",
    category: "Infrastructure",
    location: "Mumbai",
    status: "Completed",
    scope: "Underground metro station with commercial integration",
    year: "2022",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(43_89%_50%),transparent_50%)]" />
        </div>
        <div className="relative container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              Featured <span className="text-gradient-gold">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our diverse portfolio of residential, commercial, and infrastructure projects that showcase our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                    {project.status}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
          </p>
          <Link to="/contact">
            <Button size="xl" className="bg-deep-blue text-gold hover:bg-deep-blue/90 font-bold">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
