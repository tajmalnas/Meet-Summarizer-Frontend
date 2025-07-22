import { useEffect, useState } from "react";
import {
  Zap,
  FileText,
  Upload,
  Shield,
  Code,
  Clock,
  Settings,
  Eye,
  BarChart2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  // Optional: highlight features one by one dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev === null ? 0 : (prev + 1) % features.length));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Summarization",
      description:
        "Advanced AI extracts key insights from your meeting notes with incredible accuracy.",
    },
    {
      icon: FileText,
      title: "Clear JSON Output",
      description:
        "Get structured, machine-readable output that integrates seamlessly with your tools.",
    },
    {
      icon: Upload,
      title: "Multiple Input Methods",
      description: "Support for raw text, file uploads, and direct API integration.",
    },
    {
      icon: Shield,
      title: "No Login Required",
      description:
        "Start using immediately without creating accounts or complex setup processes.",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Built with Node.js and Gemini API for reliability and performance.",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your structured meeting minutes in seconds, not hours.",
    },
    {
      icon: Settings,
      title: "Customizable Output",
      description: "Tailor the JSON schema to match your project or team's needs.",
    },
    {
      icon: Eye,
      title: "Preview Before Export",
      description: "Review AI output visually before exporting or integrating it.",
    },
    {
      icon: BarChart2,
      title: "Analytics Ready",
      description:
        "Summaries can be directly piped into your dashboards for team productivity insights.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern teams who value speed, structure, and simplicity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const isActive = index === highlighted;
            return (
              <Card
                key={index}
                className={cn(
                  "p-6 transition-all duration-300 border border-border group",
                  isActive && "shadow-xl scale-[1.02] border-primary/50 bg-primary/5"
                )}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
