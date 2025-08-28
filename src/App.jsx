import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <NavBar />
      <main>
        <Hero />
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}
