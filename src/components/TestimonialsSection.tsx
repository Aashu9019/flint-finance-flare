
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Mike Chen",
      location: "Sydney, NSW",
      rating: 5,
      text: "Flint Group made our first home purchase seamless. Their expertise saved us thousands and gave us peace of mind throughout the entire process.",
      category: "First Home Buyers"
    },
    {
      name: "Dr. James Robertson",
      location: "Melbourne, VIC",
      rating: 5,
      text: "As a busy GP, I needed someone who understood medical professionals' unique financial situations. Flint delivered exactly that.",
      category: "Medical Professional"
    },
    {
      name: "Lisa Park",
      location: "Brisbane, QLD",
      rating: 5,
      text: "The refinancing process was quick and professional. We're now saving $400 per month thanks to their negotiation skills.",
      category: "Refinancing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-flint-maroon mb-6">
            What Our Clients Say
          </h2>
          <p className="font-montserrat text-xl text-gray-700">
            Real stories from real people who achieved their property dreams with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-flint-cream border-0 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="font-montserrat text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-montserrat font-semibold text-flint-maroon">
                    {testimonial.name}
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    {testimonial.location} • {testimonial.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
