import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => (
  <section className="relative isolate overflow-hidden px-4 py-10 md:py-14">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_26%),linear-gradient(135deg,#050816_0%,#08101d_35%,#0e1328_70%,#050816_100%)]" />
    <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
    <div className="absolute -left-24 top-8 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[140px]" />
    <div className="absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-[150px]" />
    <div className="absolute bottom-0 left-1/2 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />

    <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-emerald-300" />
        FIFA World Cup 2026™
      </div>

      <div className="relative mt-8 w-full max-w-xl">
        <div className="pointer-events-none absolute inset-x-8 top-6 h-10 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-20 bottom-4 h-10 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:rounded-[3rem] md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
          <img
            src="/logo.png"
            alt="FIFA World Cup 2026 visual"
            className="relative z-10 mx-auto w-full max-w-5xl select-none object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            draggable="false"
          />
        </div>
      </div>

      <div className="mt-10 max-w-3xl space-y-5">
        <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
          A tournament board styled like the official World Cup artwork.
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          Rank the groups, lock in your qualifiers, and export a poster that feels like the launch visual for the 2026 tournament.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={onStart}
          className="rounded-full bg-emerald-400 px-8 py-6 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(34,197,94,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-emerald-300"
        >
          Start Predicting
        </Button>
        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl">
          Drag teams to set 1st through 4th place
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
