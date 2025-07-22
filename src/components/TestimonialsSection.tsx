import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content:
        "This tool saved me hours every week. Instead of manually organizing meeting notes, I just paste them and get perfectly structured action items instantly.",
      initials: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Lead at StartupXYZ",
      content:
        "The JSON output integrates seamlessly with our project management tools. It's like having an AI assistant that never misses important details.",
      initials: "MR",
    },
    {
      name: "Emily Watson",
      role: "Operations Director",
      content:
        "Game changer for our remote team. Everyone gets clear, actionable summaries without the back-and-forth confusion. Highly recommended!",
      initials: "EW",
    },
  ];

  const [count, setCount] = useState(0);
  const targetCount = 12000;
  const duration = 2000; // 2 seconds
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * targetCount);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(targetCount);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their meeting workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center">
                <Avatar className="mr-3">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Customer Satisfaction Counter */}
        <div className="text-center">
          <p className="text-4xl font-bold text-primary mb-2">
            {count.toLocaleString()}+
          </p>
          <p className="text-lg text-muted-foreground">Satisfied Customers Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
