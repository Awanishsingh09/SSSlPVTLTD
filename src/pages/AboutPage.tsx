import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Shield, Award, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the best quality in every project we undertake.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative approach to achieve common goals and client satisfaction.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing modern technologies and sustainable construction practices.",
  },
];

export default function AboutPage() {

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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              Building <span className="text-gradient-gold">A New Era</span> of Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              SHIVASHAKTHI SKYLINE PVT LTD was founded in 2024 by Ritik Singh Rathour, with a vision to redefine construction standards and deliver outstanding infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Founded by <span className="text-gradient-gold">Ritik Singh Rathour</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Established in early 2024, our company quickly set a benchmark in the construction industry by completing two major projects within just six months of inception. This rapid achievement is a testament to our founder Ritik Singh Rathour’s leadership and our team’s dedication.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We successfully delivered two major highway bridge projects, both completed ahead of schedule and built to the highest standards of safety, strength, and design excellence. These projects stand as a testament to our commitment to quality engineering, timely execution, and long-term infrastructure development.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At SHIVASHAKTHI SKYLINE PVT LTD, we are committed to upholding the highest standards of quality, safety, and client satisfaction. Our young yet dynamic company is driven by a passion for excellence and a vision to shape the future of infrastructure.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Our team at work"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-gold">
                <div className="text-4xl font-bold">2024</div>
                <div className="text-sm">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative construction company in India, setting benchmarks in quality, sustainability, and customer satisfaction while contributing to the nation's infrastructure growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction solutions that exceed client expectations through innovative engineering, skilled craftsmanship, and unwavering commitment to safety, quality, and timely project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number">25+</div>
              <p className="text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div>
              <div className="stat-number">500+</div>
              <p className="text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div>
              <div className="stat-number">200+</div>
              <p className="text-muted-foreground mt-2">Happy Clients</p>
            </div>
            <div>
              <div className="stat-number">1000+</div>
              <p className="text-muted-foreground mt-2">Team Members</p>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
