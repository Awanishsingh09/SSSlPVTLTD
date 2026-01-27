import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Briefcase, TrendingUp, Heart, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career progression paths.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work alongside industry experts and talented professionals.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible policies that respect your personal time and well-being.",
  },
  {
    icon: Briefcase,
    title: "Competitive Benefits",
    description: "Attractive salary packages with comprehensive health benefits.",
  },
];

const openings = [
  {
    title: "Senior Project Manager",
    department: "Operations",
    location: "Hyderabad",
    type: "Full-time",
  },
  {
    title: "Civil Engineer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Site Supervisor",
    department: "Operations",
    location: "Chennai",
    type: "Full-time",
  },
  {
    title: "Architect",
    department: "Design",
    location: "Hyderabad",
    type: "Full-time",
  },
  {
    title: "Safety Officer",
    department: "Safety",
    location: "Multiple Locations",
    type: "Full-time",
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our HR team will contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

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
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              Build Your <span className="text-gradient-gold">Career</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of dedicated professionals who are shaping the future of construction and infrastructure in India.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Why Work <span className="text-gradient-gold">With Us</span>
            </h2>
            <p className="text-muted-foreground">
              At SHIVASHAKTHI SKYLINE, we believe our people are our greatest asset. We foster a culture of growth, innovation, and mutual respect.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Current Openings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Open <span className="text-gradient-gold">Positions</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button variant="outline-gold" size="sm" onClick={() => {
                  setFormData({ ...formData, position: job.title });
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Apply Now
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Submit Your <span className="text-gradient-gold">Application</span>
              </h2>
              <p className="text-muted-foreground">
                Interested in joining our team? Fill out the form below and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position Applied For</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="e.g., Civil Engineer"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter / Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about yourself and why you'd like to join our team..."
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
