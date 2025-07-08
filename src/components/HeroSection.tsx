
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-flint-cream via-flint-cream-alt to-white overflow-hidden">
      {/* Enhanced Background Shapes with smoother animations */}
      <div className="absolute inset-0">
        {/* Large floating shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-flint-sage/30 to-flint-sage/10 animate-float-slow blur-sm"></div>
        <div className="absolute top-32 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-flint-lavender/40 to-flint-lavender/15 animate-float-medium blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-flint-orange/25 to-flint-orange/10 animate-float-slow blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-flint-sky/30 to-flint-sky/15 animate-float-medium blur-sm" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-flint-coral/20 to-flint-coral/5 animate-float-fast" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-flint-maroon/15 to-flint-maroon/5 animate-float-medium" style={{ animationDelay: '3s' }}></div>
        
        {/* Small accent shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-flint-sage/25 to-flint-sage/10 animate-float-fast" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-flint-lavender/30 to-flint-lavender/10 animate-float-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric accent shapes */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-flint-coral/20 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-flint-maroon/15 transform rotate-12 animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-20 flex items-center min-h-screen">
        <div className="w-full lg:w-2/3 animate-fade-in-up-smooth">
          <h1 className="font-montserrat text-5xl lg:text-7xl font-bold text-flint-maroon mb-6 leading-tight animate-slide-in-left">
            Tailored Finance Solutions for 
            <span className="text-flint-coral animate-gradient-text"> Every Life Stage</span>
          </h1>
          
          <p className="font-montserrat text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            Smart, award-winning mortgage advice delivered with heart.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              className="border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
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
