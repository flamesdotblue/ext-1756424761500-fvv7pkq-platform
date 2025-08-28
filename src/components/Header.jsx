import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-400 shadow ring-1 ring-white/30 overflow-hidden">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.2),transparent_60%)]" />
              <span className="sr-only">FOTTOKOGAE emblem</span>
            </div>
            <span className="font-medium tracking-[0.2em] text-sm text-neutral-200 group-hover:text-white transition">
              FOTTOKOGAE
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#collection" className="hover:text-white transition">Collections</a>
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#visit" className="hover:text-white transition">Visit</a>
          </nav>

          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white hover:text-neutral-900 transition"
          >
            Shop
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
