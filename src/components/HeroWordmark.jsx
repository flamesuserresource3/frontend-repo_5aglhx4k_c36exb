import React from 'react';
import { motion } from 'framer-motion';

export default function HeroWordmark() {
  return (
    <div className="relative flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="select-none leading-[0.85] font-extrabold tracking-tight text-[min(20vw,220px)] text-[#244322]"
        style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
      >
        More
      </motion.h1>
    </div>
  );
}
