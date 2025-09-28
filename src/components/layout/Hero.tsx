export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#A66CFF" }} />
          <span className="text-xs text-white/70">Decentralized GPU network</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Turning smart devices into a global AI engine.
        </h1>
        <p className="text-white/80 mt-5 max-w-2xl text-lg">
          GNUS helps businesses slash 80% of GPU compute costs, while enabling developers to earn revenue from their users' idle devices.
        </p>
      </div>
    </section>
  );
}
