import React from 'react';

const items = [
  {
    name: 'Genesis I',
    note: 'First Study in Black',
    motif: 'serpent',
  },
  {
    name: 'Cherubim',
    note: 'Guardians at the Gate',
    motif: 'wing',
  },
  {
    name: 'Seraphim',
    note: 'Six-Wing Flame',
    motif: 'flame',
  },
  {
    name: 'The Veil',
    note: 'Coptic Lacework',
    motif: 'veil',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Featured Collection</h2>
            <p className="mt-2 text-sm text-neutral-400">Limited pieces inspired by early liturgy and quiet rebellion.</p>
          </div>
          <a href="#shop" className="hidden md:inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white hover:text-neutral-900 transition">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ name, note, motif }) {
  return (
    <a
      href="#shop"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 p-5 shadow-lg transition hover:border-white/20 hover:shadow-xl"
    >
      <div className="absolute inset-0 opacity-80" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
        <Pattern motif={motif} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-300">Edition</span>
        </div>
        <p className="mt-1 text-sm text-neutral-400">{note}</p>

        <div className="mt-24 flex items-center justify-between">
          <div className="text-xs text-neutral-400">Hand-numbered</div>
          <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white transition group-hover:bg-white group-hover:text-neutral-900">View</div>
        </div>
      </div>
    </a>
  );
}

function Pattern({ motif }) {
  return (
    <svg className="absolute -right-6 -bottom-6 h-48 w-48 text-white/10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {motif === 'serpent' && (
        <g stroke="currentColor" strokeWidth="1">
          <path d="M10 80 C30 60, 50 100, 70 80 S110 60, 110 80" />
          <circle cx="70" cy="78" r="2" fill="currentColor" />
        </g>
      )}
      {motif === 'wing' && (
        <g stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 6 }).map((_, i) => (
            <path key={i} d={`M20 ${20 + i * 8} C 60 ${10 + i * 6}, 100 ${30 + i * 4}, 110 ${40 + i * 3}`} />
          ))}
        </g>
      )}
      {motif === 'flame' && (
        <g stroke="currentColor" strokeWidth="1">
          <path d="M60 20 C40 40, 80 60, 60 90 C40 70, 70 50, 60 20 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M60 30 C50 45, 70 60, 60 80" />
        </g>
      )}
      {motif === 'veil' && (
        <g stroke="currentColor" strokeWidth="0.8" opacity="0.9">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="60" cy="60" r={10 + i * 6} />
          ))}
          <path d="M10 60 H110" />
          <path d="M60 10 V110" />
        </g>
      )}
    </svg>
  );
}
