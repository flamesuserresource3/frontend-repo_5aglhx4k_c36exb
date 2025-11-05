import React from 'react';
import { motion } from 'framer-motion';

export default function RightTextBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      className="max-w-lg ml-auto"
    >
      <h2 className="text-[#1F3D27] uppercase tracking-tight leading-tight font-extrabold" style={{ fontStretch: 'condensed' }}>
        <span className="text-3xl sm:text-4xl md:text-5xl">MATCHA MEETS PROTEIN</span>
      </h2>
      <p className="mt-4 text-[#1F3D27]/80 text-sm sm:text-base leading-relaxed">
        Our More Protein Iced Matcha Latte blends matcha with protein and glucomannan for a creamy, healthy drink with 95% less sugar.
      </p>
    </motion.div>
  );
}
