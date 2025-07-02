
import { Zap, FileText, Upload, Shield, Code, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Summarization",
      description: "Advanced AI extracts key insights from your meeting notes with incredible accuracy."
    },
    {
      icon: FileText,
      title: "Clear JSON Output",
      description: "Get structured, machine-readable output that integrates seamlessly with your tools."
    },
    {
      icon: Upload,
      title: "Multiple Input Methods",
      description: "Support for raw text, file uploads, and direct API integration."
    },
    {
      icon: Shield,
      title: "No Login Required",
      description: "Start using immediately without creating accounts or complex setup processes."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Built with Node.js and Gemini API for reliability and performance."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your structured meeting minutes in seconds, not hours."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern teams who value efficiency and structured data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
