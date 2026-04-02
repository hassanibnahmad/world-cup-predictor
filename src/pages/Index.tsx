import { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { Download, Shuffle, RotateCcw, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GroupCard from "@/components/GroupCard";
import ExportPreview from "@/components/ExportPreview";
import { initialGroups, type Group, type Team } from "@/data/groups";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [showGroups, setShowGroups] = useState(false);
  const [exporting, setExporting] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const handleReorder = useCallback((letter: string, teams: Team[]) => {
    setGroups((prev) =>
      prev.map((g) => (g.letter === letter ? { ...g, teams } : g))
    );
  }, []);

  const handleReset = () => {
    setGroups(initialGroups);
    toast({ title: "Reset complete", description: "All groups restored to default." });
  };

  const handleRandomize = () => {
    setGroups((prev) =>
      prev.map((g) => ({
        ...g,
        teams: [...g.teams].sort(() => Math.random() - 0.5),
      }))
    );
    toast({ title: "Randomized!", description: "All groups have been shuffled." });
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      await new Promise((r) => setTimeout(r, 100));
      const target = document.getElementById("export-target");
      if (!target) return;
      target.style.left = "0";
      target.style.position = "fixed";
      target.style.top = "0";
      target.style.zIndex = "-1";

      const canvas = await html2canvas(target, {
        width: 1080,
        height: 1920,
        scale: 1,
        backgroundColor: "#0f172a",
        useCORS: true,
      });

      target.style.left = "-9999px";
      target.style.position = "absolute";

      const link = document.createElement("a");
      link.download = "wc2026-predictions.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      toast({ title: "Image exported!", description: "Your predictions have been saved as an image." });
    } catch {
      toast({ title: "Export failed", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {!showGroups ? (
        <HeroSection onStart={() => setShowGroups(true)} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {/* Action bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold gradient-text">Your Predictions</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleRandomize} className="gap-2">
                <Shuffle className="h-4 w-4" /> Randomize
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-4 w-4" /> Reset
              </Button>
              <Button
                size="sm"
                onClick={handleExport}
                disabled={exporting}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-green"
              >
                {exporting ? (
                  <Image className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Export as Image
              </Button>
            </div>
          </div>

          {/* Groups grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map((group, i) => (
              <GroupCard
                key={group.letter}
                group={group}
                onReorder={handleReorder}
                index={i}
              />
            ))}
          </div>

          {/* Qualification legend */}
          <div className="mt-8 flex flex-wrap items-center gap-6 justify-center text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary" /> Qualified (1st & 2nd)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-accent/50" /> Possible qualifier (3rd)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-muted" /> Eliminated (4th)
            </div>
          </div>
        </div>
      )}

      {/* Hidden export target */}
      <ExportPreview groups={groups} />
    </div>
  );
};

export default Index;
