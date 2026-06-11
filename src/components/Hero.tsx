export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-40 pb-24 sm:px-8 md:px-12">

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
          MEDIOCANT
        </p>

        <h1 className="max-w-5xl text-[2.7rem] font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
          Engineering resilient systems for a world that cannot afford
          mediocrity.
        </h1>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
          Infrastructure leadership, intelligent automation, and operational
          excellence.
        </p>

      </div>
    </section>
  );
}