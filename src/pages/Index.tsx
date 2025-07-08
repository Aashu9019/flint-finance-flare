
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import StatsSection from "@/components/StatsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import TrustSection from "@/components/TrustSection";
import ContentPreview from "@/components/ContentPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <HeroSection />
      <SocialProofBar />
      <StatsSection />
      <WhoWeHelpSection />
      <TestimonialsSection />
      <TrustSection />
      <ContentPreview />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
