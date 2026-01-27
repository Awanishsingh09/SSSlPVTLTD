import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, Users, Award, Target, Lightbulb, CheckCircle2, ArrowRight, Headphones, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "2+ Years of Excellence",
    description: "With over two decades in the construction industry, we bring unmatched experience and expertise to every project. Our track record speaks for itself with 500+ successfully completed projects.",
  },
  {
    icon: Shield,
    title: "Quality-Driven Execution",
    description: "We never compromise on quality. From material selection to final finishes, every aspect undergoes rigorous quality checks to ensure structures that stand the test of time.",
  },
  {
    icon: Target,
    title: "Safety Compliance",
    description: "Safety is our top priority. We maintain strict adherence to safety protocols, regular training programs, and comprehensive insurance coverage for all our sites and workers.",
  },
  {
    icon: Lightbulb,
    title: "Transparent Processes",
    description: "We believe in complete transparency with our clients. Regular updates, clear documentation, and open communication channels ensure you're always informed about your project's progress.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "We understand that time is money. Our efficient project management ensures that your project is completed within the agreed timeline without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Client-Centric Approach",
    description: "Your satisfaction is our success. We listen to your needs, understand your vision, and work closely with you to deliver results that exceed your expectations.",
  },
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "500+", label: "Projects Delivered" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "0", label: "Safety Incidents" },
];

export default function WhyChooseUsPage() {
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
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              The SHIVASHAKTHI <span className="text-gradient-gold">Advantage</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover what sets us apart and why leading businesses and homeowners trust us with their construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Reasons Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient-gold">Commitments</span>
            </h2>
            <p className="text-muted-foreground">
              Every project we undertake is backed by these core commitments that define who we are and how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed project planning and budgeting" },
              { step: "03", title: "Execution", desc: "Quality construction with regular updates" },
              { step: "04", title: "Handover", desc: "Timely delivery and after-sales support" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us and discover why we're the trusted choice for construction excellence.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
