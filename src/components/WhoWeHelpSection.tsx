
import { Card, CardContent } from "@/components/ui/card";

const WhoWeHelpSection = () => {
  const categories = [
    { title: "First Home Buyers", icon: "🏠", description: "Navigate your first property purchase with confidence" },
    { title: "Property Investors", icon: "🏢", description: "Maximize returns with strategic financing solutions" },
    { title: "Medical Professionals", icon: "👨‍⚕️", description: "Specialized loans for doctors and healthcare workers" },
    { title: "Expats & Migrants", icon: "✈️", description: "Home loans for new Australian residents" },
    { title: "Business Owners", icon: "💼", description: "Commercial and residential finance solutions" },
    { title: "Refinancing", icon: "🔄", description: "Lower rates and better terms on existing loans" },
    { title: "Construction Loans", icon: "🏗️", description: "Finance your dream home from ground up" },
    { title: "SMSF Lending", icon: "📊", description: "Self-managed super fund property investments" },
  ];

  return (
    <section className="py-20 bg-flint-cream-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-flint-maroon mb-6">
            Who We Help
          </h2>
          <p className="font-montserrat text-xl text-gray-700 max-w-3xl mx-auto">
            From first-time buyers to seasoned investors, we provide tailored solutions for every financial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-flint-maroon mb-3">
                  {category.title}
                </h3>
                <p className="font-montserrat text-gray-600 text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
