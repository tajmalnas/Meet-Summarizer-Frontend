
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Meeting Minutes Extractor
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your meeting chaos into organized insights with AI-powered extraction. 
              Never miss an action item again.
            </p>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="mailto:hello@meetingextractor.com" className="hover:text-white transition-colors">hello@meetingextractor.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Meeting Minutes Extractor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
