import React from 'react';

function Halo() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="w-[110vmin] h-[110vmin] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(212,179,89,0.25) 0%, rgba(0,0,0,0) 60%)' }} />
    </div>
  );
}

function CopticBand() {
  return (
    <div className="absolute -bottom-8 inset-x-0 h-24 opacity-20">
      <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
        <defs>
          <pattern id="crossPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="#d4b359">
              <rect x="28" y="0" width="4" height="60" />
              <rect x="0" y="28" width="60" height="4" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="1200" height="120" fill="url(#crossPattern)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-neutral-950">
      <Halo />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-yellow-400">
            <svg aria-hidden="true" viewBox="0 0 64 64" className="h-5 w-5">
              <path d="M28 2h8v18h18v8H36v26h-8V28H10v-8h18z" fill="currentColor" />
              <circle cx="32" cy="32" r="6" fill="currentColor" />
            </svg>
          </span>
          <span className="uppercase tracking-[0.35em] text-xs text-neutral-400">Fruit of the Tree of Knowledge of Good and Evil</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-50">FOTTOKOGAE</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
          A high luxury house where scripture and silhouette converge—gothic austerity, Coptic reverence, and modern couture.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#collection" className="px-6 py-3 rounded-full bg-neutral-100 text-neutral-900 font-medium hover:bg-white transition">Explore Collection</a>
          <a href="#ethos" className="px-6 py-3 rounded-full border border-neutral-800 text-neutral-200 hover:border-yellow-400 hover:text-neutral-100 transition">Our Ethos</a>
        </div>
      </div>
      <CopticBand />
    </section>
  );
}
