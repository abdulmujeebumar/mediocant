"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 text-white">
      
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
          MEDIOCANT
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Engineering resilient systems for a world that cannot afford
          mediocrity.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Infrastructure leadership, intelligent automation, and operational
          excellence.
        </p>
      </motion.div>
    </section>
  );
}
