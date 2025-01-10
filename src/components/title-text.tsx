'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TitleTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function TitleText({ children, as: Component = 'h2' }: TitleTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Component className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title text-white tracking-tight radial-text">
        {children}
      </Component>
    </motion.div>
  );
}
