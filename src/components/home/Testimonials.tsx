import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechPark Industries",
    content: "SHIVASHAKTHI SKYLINE delivered our corporate headquarters on time and exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Green Living Developers",
    content: "Working with SHIVASHAKTHI SKYLINE on our residential project was a pleasure. Their professionalism and expertise made the entire process smooth and stress-free.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    role: "Chief Engineer, State Infrastructure Board",
    content: "The infrastructure projects completed by SHIVASHAKTHI SKYLINE demonstrate their capability to handle large-scale, complex projects with efficiency and precision.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the clients who have experienced our commitment to excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
