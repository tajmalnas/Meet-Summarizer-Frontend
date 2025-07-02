
import { Button } from "@/components/ui/button";
import { Github, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Never Take Manual{" "}
            <span className="gradient-text">Meeting Notes</span>{" "}
            Again
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Summarize, extract decisions, and get structured action items — all powered by AI.
            Transform messy meeting notes into clean, actionable insights instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            >
              Try it now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all duration-200"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>
          
          {/* Visual mockup */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-left">Input</h3>
                <div className="bg-gray-50 rounded-lg p-4 text-left text-sm font-mono">
                  <div className="text-gray-600">Meeting notes...</div>
                  <div className="mt-2">
                    "We discussed the Q4 budget. John will handle the marketing spend by Friday. 
                    Sarah agreed to review vendor contracts. Decision: Move ahead with the new CRM system."
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-left">AI-Generated Output</h3>
                <div className="bg-gray-900 text-green-400 rounded-lg p-4 text-left text-sm font-mono">
                  <pre className="whitespace-pre-wrap">{`{
  "summary": "Q4 budget discussion...",
  "decisions": ["Move ahead with new CRM"],
  "actionItems": [
    {
      "task": "Handle marketing spend",
      "owner": "John",
      "deadline": "Friday"
    }
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArrowDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-6 w-6 text-muted-foreground animate-bounce" />
    </section>
  );
};

export default HeroSection;
