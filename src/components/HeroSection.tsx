import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => (
  <section className="relative overflow-hidden py-20 px-4">
    {/* Abstract background */}
    <div className="absolute inset-0 gradient-bg opacity-60" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-blue/10 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-glow-purple/10 blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-green/5 blur-[150px]" />

    <div className="relative container mx-auto text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 text-primary" />
        FIFA World Cup 2026™
      </div>
      <h2 className="text-4xl md:text-6xl font-black mb-4 gradient-text leading-tight">
        Predict the<br />World Cup
      </h2>
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
        Drag & drop teams to set your predictions for all 12 groups. Export and share with friends.
      </p>
      <Button
        onClick={onStart}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl glow-green transition-all duration-300 hover:scale-105"
      >
        Start Predicting
      </Button>
    </div>
  </section>
);

export default HeroSection;
