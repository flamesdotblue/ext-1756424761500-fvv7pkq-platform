import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-800/60 py-12 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-6 w-6 inline-flex items-center justify-center rounded border border-neutral-800 text-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 64 64" className="h-4 w-4"><path d="M28 2h8v18h18v8H36v26h-8V28H10v-8h18z" fill="currentColor" /><circle cx="32" cy="32" r="6" fill="currentColor" /></svg>
            </span>
            <span className="font-semibold tracking-wide">FOTTOKOGAE</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-neutral-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-200 transition-colors">Terms</a>
            <a href="mailto:atelier@fottokogae.com" className="hover:text-neutral-200 transition-colors">atelier@fottokogae.com</a>
          </nav>
        </div>
        <p className="text-xs text-neutral-500 mt-6">© {new Date().getFullYear()} FOTTOKOGAE. All rights reserved.</p>
      </div>
    </footer>
  );
}
