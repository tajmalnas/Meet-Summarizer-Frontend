
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CodeSampleSection from "@/components/CodeSampleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <FeaturesSection />
      <CodeSampleSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
