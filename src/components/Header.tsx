import { Trophy } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-50 glass-strong border-b border-border/30">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 glow-green">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold gradient-text">World Cup 2026 Predictor</h1>
          <p className="text-xs text-muted-foreground">Predict every group. Share your vision.</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
