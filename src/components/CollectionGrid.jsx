import React from 'react';

const items = [
  { id: 1, title: 'Chapter I: Figment', tag: 'Lookbook', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1976&auto=format&fit=crop' },
  { id: 2, title: 'The Cross Motif Cape', tag: 'Outerwear', image: 'https://images.unsplash.com/photo-1548883354-89cf1f1e4b2c?q=80&w=1976&auto=format&fit=crop' },
  { id: 3, title: 'Gilded Collar No.7', tag: 'Adornment', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1976&auto=format&fit=crop' },
  { id: 4, title: 'Eden Silk Dress', tag: 'Womenswear', image: 'https://images.unsplash.com/photo-1514511542228-2d3763ad4e4a?q=80&w=1976&auto=format&fit=crop' },
  { id: 5, title: 'Seraph Belt', tag: 'Leather', image: 'https://images.unsplash.com/photo-1539008835657-9e8ed16f9a84?q=80&w=1976&auto=format&fit=crop' },
  { id: 6, title: 'Liturgical Boots', tag: 'Footwear', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop' },
];

function Card({ item }) {
  return (
    <article className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/30">
      <img src={item.image} alt={item.title} className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.9) 100%)' }} />
      <div className="absolute bottom-0 p-4 w-full flex items-center justify-between">
        <div>
          <p className="uppercase tracking-[0.25em] text-[10px] text-neutral-400">{item.tag}</p>
          <h3 className="text-lg text-neutral-100">{item.title}</h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs border border-neutral-700 bg-neutral-950/70 text-neutral-200 group-hover:border-yellow-400 transition">View</span>
      </div>
    </article>
  );
}

export default function CollectionGrid() {
  return (
    <section id="collection" className="py-24 md:py-28 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-6 w-6 inline-flex items-center justify-center rounded border border-neutral-800 text-yellow-400">
            <svg aria-hidden="true" viewBox="0 0 64 64" className="h-4 w-4"><path d="M28 2h8v18h18v8H36v26h-8V28H10v-8h18z" fill="currentColor" /><circle cx="32" cy="32" r="6" fill="currentColor" /></svg>
          </span>
          <span className="uppercase tracking-[0.35em] text-xs text-neutral-400">Collection</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
