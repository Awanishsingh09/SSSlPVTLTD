import { Shield, Clock, Users, Award, Target, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ Years of Excellence",
    description: "Decades of proven expertise in delivering world-class construction projects.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage ensuring superior construction standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed to completing projects within agreed timelines without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals including engineers, architects, and project managers.",
  },
  {
    icon: Target,
    title: "Safety First",
    description: "Strict adherence to safety protocols protecting workers and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Leveraging modern technology and sustainable practices in construction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine experience, expertise, and commitment to deliver construction projects that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl bg-secondary/50 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
