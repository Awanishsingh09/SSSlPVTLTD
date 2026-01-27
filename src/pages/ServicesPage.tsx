import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Home, Landmark, ClipboardList, Hammer, Key, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "We build dream homes that combine comfort, aesthetics, and durability. From individual villas to large residential complexes, our expertise ensures quality living spaces.",
    benefits: [
      "Custom home designs tailored to your preferences",
      "Premium quality materials and finishes",
      "Energy-efficient and sustainable construction",
      "Timely project completion with regular updates",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Modern commercial spaces designed for productivity and business growth. We deliver office buildings, retail centers, and industrial facilities that meet international standards.",
    benefits: [
      "State-of-the-art commercial facilities",
      "Smart building technologies integration",
      "LEED certification support",
      "Flexible space planning and design",
    ],
  },
  {
    icon: Landmark,
    title: "Infrastructure Development",
    description: "Large-scale infrastructure projects that drive economic growth. Roads, bridges, flyovers, and public utilities built to the highest engineering standards.",
    benefits: [
      "Expert civil engineering solutions",
      "Government project experience",
      "Advanced construction technologies",
      "Strict compliance with safety standards",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Comprehensive project management services ensuring seamless execution from planning to completion. We optimize timelines, budgets, and resources.",
    benefits: [
      "End-to-end project coordination",
      "Budget optimization and cost control",
      "Risk assessment and mitigation",
      "Regular progress reporting",
    ],
  },
  {
    icon: Hammer,
    title: "Renovation & Redevelopment",
    description: "Transform existing structures with modern upgrades. Our renovation services breathe new life into old buildings while preserving structural integrity.",
    benefits: [
      "Structural assessment and reinforcement",
      "Modern interior transformations",
      "Heritage building restoration",
      "Energy efficiency upgrades",
    ],
  },
  {
    icon: Key,
    title: "Turnkey Solutions",
    description: "Complete construction solutions from concept to handover. We manage every aspect so you can focus on your business while we build your vision.",
    benefits: [
      "Single point of contact",
      "Design to delivery management",
      "Quality assurance at every stage",
      "Hassle-free project execution",
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              Comprehensive <span className="text-gradient-gold">Construction</span> Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From residential homes to large-scale infrastructure, we provide end-to-end construction services tailored to meet your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className={`bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl aspect-square flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your construction needs. We're here to turn your vision into reality.
          </p>
          <Link to="/contact">
            <Button size="xl" className="bg-deep-blue text-gold hover:bg-deep-blue/90 font-bold">
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
