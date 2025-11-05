import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ children, className = '', style, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute rounded-full bg-[#F8F9F5] text-[#1F3D27] shadow-md px-4 py-2 text-xs sm:text-sm font-medium ${className}`}
    style={style}
  >
    {children}
  </motion.div>
);

const Connector = ({ d, delay = 0, className = '' }) => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    viewBox="0 0 200 200"
    className={`absolute pointer-events-none ${className}`}
  >
    <path d={d} fill="none" stroke="#94A88A" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);

const CupSVG = () => (
  <svg viewBox="0 0 240 320" className="w-56 sm:w-64 md:w-72 drop-shadow-2xl" style={{ filter: 'drop-shadow(0 10px 20px rgba(31,61,39,0.25))' }}>
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dfe7d8" />
        <stop offset="100%" stopColor="#c9d6bf" />
      </linearGradient>
      <linearGradient id="matcha" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#9ab389" />
        <stop offset="100%" stopColor="#7f9a73" />
      </linearGradient>
    </defs>
    <g transform="rotate(-8 120 160)">
      <rect x="70" y="20" width="100" height="20" rx="10" fill="#F8F9F5" />
      <rect x="50" y="40" width="140" height="220" rx="20" fill="url(#g1)" stroke="#e8efe2" />
      <rect x="60" y="60" width="120" height="170" rx="14" fill="url(#matcha)" />
      <rect x="55" y="40" width="140" height="14" rx="7" fill="#f2f5ef" />
      <circle cx="170" cy="60" r="6" fill="#e6eee3" />
    </g>
  </svg>
);

export default function ProductShowcase() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        <CupSVG />
      </motion.div>

      {/* Fact bubbles */}
      <Bubble style={{ top: '-10%', left: '5%' }} delay={0.25}>20G of Protein</Bubble>
      <Connector d="M120 120 C 60 80, 40 40, 20 20" className="-left-6 -top-10 w-32 h-32" delay={0.25} />

      <Bubble style={{ top: '15%', right: '2%' }} delay={0.35}>95% less Sugar</Bubble>
      <Connector d="M80 140 C 120 120, 160 80, 180 40" className="right-4 top-6 w-40 h-40" delay={0.35} />

      <Bubble className="italic" style={{ bottom: '-6%', left: '20%' }} delay={0.45}>
        Real Matcha, Original Taste
      </Bubble>
      <Connector d="M40 160 C 70 140, 100 120, 120 100" className="left-10 bottom-4 w-40 h-40" delay={0.45} />
    </div>
  );
}
