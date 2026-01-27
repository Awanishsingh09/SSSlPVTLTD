import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9236979788",],
    href: "tel:+919236979788",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["shivashakthiskylinepvtltd@gmail.com",],
    href: "mailto:shivashakthiskylinepvtltd@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Vill-Kapoori, Police station & Post - Phephana, Ballia-277503, Uttar Pradesh, India"],
    href: "https://maps.app.goo.gl/BnZfguPcRacNRWLE7",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM"],
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-secondary-foreground">
              Let's <span className="text-gradient-gold">Build Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to start your next construction project? Get in touch with our team and let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get in <span className="text-gradient-gold">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services or want to discuss a potential project? Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        item.href ? (
                          <a
                            key={index}
                            href={item.href}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={index} className="text-muted-foreground">
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[400px] bg-muted relative">
        <iframe
          src="https://maps.app.goo.gl/BnZfguPcRacNRWLE7"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Prefer to talk to someone directly?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Call us now and speak with one of our project consultants.
          </p>
          <a href="tel:+911234567890">
            <Button size="xl" className="bg-deep-blue text-gold hover:bg-deep-blue/90 font-bold">
              <Phone className="w-5 h-5" />
              +91 9236979788
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
