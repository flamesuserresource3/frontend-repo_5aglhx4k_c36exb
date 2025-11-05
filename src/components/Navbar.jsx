import React from 'react';
import { motion } from 'framer-motion';

const IGIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.5 7.9a6.6 6.6 0 0 1-3.3-2.7v8.4a4.8 4.8 0 1 1-4.8-4.8c.4 0 .8 0 1.1.1v2.6a2.3 2.3 0 1 0 1.7 2.2V2h2.1c.4 1.1 1.1 2 2 2.8A6 6 0 0 0 20 6.1v2.4a8.5 8.5 0 0 1-2.5-.6z" />
  </svg>
);

const YouTubeIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8zM9.8 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

const Pill = ({ children, variant = 'secondary' }) => {
  const base = 'px-3 py-1.5 rounded-full text-sm font-medium transition-colors shadow-sm';
  const styles =
    variant === 'primary'
      ? 'bg-[#1F3D27] text-[#F8F9F5] hover:bg-[#1b3522]'
      : 'bg-white/60 text-[#1F3D27] hover:bg-white/80 backdrop-blur';
  return <button className={`${base} ${styles}`}>{children}</button>;
};

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#1F3D27]">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F8F9F5] text-[#1F3D27] shadow-sm">
              <IGIcon />
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F8F9F5] text-[#1F3D27] shadow-sm">
              <TikTokIcon />
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F8F9F5] text-[#1F3D27] shadow-sm">
              <YouTubeIcon />
            </span>
          </div>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="ml-3">
            <div className="text-2xl font-extrabold tracking-tight text-[#1F3D27]">More</div>
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <Pill variant="primary">Shop all</Pill>
          <div className="hidden sm:flex items-center gap-2 bg-white/60 backdrop-blur rounded-full px-2 py-1 shadow-sm">
            <Pill>Nutrition</Pill>
            <Pill>Benefits</Pill>
            <Pill>Reviews</Pill>
          </div>
        </div>
      </div>
    </div>
  );
}
