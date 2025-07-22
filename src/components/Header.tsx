import { Button } from "@/components/ui/button";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container flex h-16 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-4 md:hidden"
          onClick={() => {
            // Add mobile menu functionality here
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Meet Note Taker</h1>
          </div>
          <div className="flex items-center gap-4">
            <Timer />
            <Button
              variant="outline"
              onClick={() => navigate("/meeting")}
            >
              Start New Meeting
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
