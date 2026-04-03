const Header = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(34,197,94,0.18)]">
          <img
            src="/logo.png"
            alt="World Cup 2026 Predictor"
            className="h-10 w-10 object-contain"
          />
        </div>
        <div className="text-left">
          <p className="font-display text-[10px] uppercase tracking-[0.35em] text-emerald-300/80">
            FIFA World Cup 2026
          </p>
          <h1 className="font-display text-lg font-black leading-none md:text-xl gradient-text">
            World Cup 2026 Predictor
          </h1>
          <p className="text-xs text-slate-400">Predict every group. Share your vision.</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
