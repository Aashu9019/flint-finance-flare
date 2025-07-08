
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-flint-cream to-flint-cream-alt overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-flint-sage/20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-flint-lavender/30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-flint-orange/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-flint-sky/25 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-20 pb-20 flex items-center min-h-screen">
        <div className="w-full lg:w-2/3 animate-fade-in-up">
          <h1 className="font-montserrat text-5xl lg:text-7xl font-bold text-flint-maroon mb-6 leading-tight">
            Tailored Finance Solutions for 
            <span className="text-flint-coral"> Every Life Stage</span>
          </h1>
          
          <p className="font-montserrat text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Smart, award-winning mortgage advice delivered with heart.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <Button 
              className="bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              className="border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
