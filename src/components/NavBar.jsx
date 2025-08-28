import React from 'react';

function Mark({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className}>
      <path d="M28 2h8v18h18v8H36v26h-8V28H10v-8h18z" fill="currentColor" />
      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
  );
}

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Mark className="h-6 w-6 text-neutral-200 group-hover:text-yellow-400 transition-colors" />
          <span className="font-semibold tracking-wide text-neutral-100">FOTTOKOGAE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#collection" className="hover:text-neutral-100 transition-colors">Collection</a>
          <a href="#ethos" className="hover:text-neutral-100 transition-colors">Ethos</a>
          <a href="#contact" className="hover:text-neutral-100 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
