import { Upload, Brain, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Notes",
      description: "Paste your meeting notes or upload a text file. No formatting required.",
    },
    {
      icon: Brain,
      title: "AI Extracts Everything",
      description: "Our AI, powered by Gemini, analyzes and structures your content automatically.",
    },
    {
      icon: Download,
      title: "Get Clean JSON",
      description: "Receive structured summaries, decisions, and action items instantly.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your meeting chaos into organized insights in three simple steps
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Icon and number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center mx-auto shadow-md">
                  <step.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow">
                  {index + 1}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 h-0.5 w-[calc(100%+3rem)] bg-gradient-to-r from-primary/30 to-transparent translate-x-1/2 z-0" />
              )}

              {/* Text Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
