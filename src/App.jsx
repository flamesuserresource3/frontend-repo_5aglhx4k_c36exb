import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroWordmark from './components/HeroWordmark';
import RightTextBlock from './components/RightTextBlock';
import ProductShowcase from './components/ProductShowcase';

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function BuyNowButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="inline-flex items-center gap-2 bg-[#1F3D27] text-[#F8F9F5] px-4 py-2 rounded-full text-sm shadow-md hover:bg-[#1b3522] active:scale-[0.98]"
    >
      Buy now
      <ArrowRight />
    </motion.button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#C4D1B8' }}>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
          <div className="md:col-span-7 flex flex-col items-center md:items-start">
            <HeroWordmark />
            <div className="mt-4 md:mt-6">
              <BuyNowButton />
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <RightTextBlock />
            <div className="relative">
              <ProductShowcase />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-[#1F3D27]/60 text-sm">
        Crafted for a fresh, confident, and natural feel.
      </footer>
    </div>
  );
}
