'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function TitleText({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-4xl md:text-5xl font-title text-white tracking-tight radial-text"
    >
      {children}
    </motion.h2>
  );
}
