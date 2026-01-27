import { Link } from "react-router-dom";
import { Building2, Home, Landmark, ClipboardList, Hammer, Key, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Building dream homes with quality craftsmanship and attention to detail for lasting comfort.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Modern commercial spaces designed for productivity, sustainability, and business growth.",
  },
  {
    icon: Landmark,
    title: "Infrastructure Development",
    description: "Large-scale infrastructure projects including roads, bridges, and public utilities.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and budget optimization.",
  },
  {
    icon: Hammer,
    title: "Renovation & Redevelopment",
    description: "Transforming existing structures with modern upgrades and sustainable solutions.",
  },
  {
    icon: Key,
    title: "Turnkey Solutions",
    description: "Complete construction solutions from concept to handover, hassle-free.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive construction and infrastructure solutions tailored to meet your unique requirements with excellence and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="gold" size="lg">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
