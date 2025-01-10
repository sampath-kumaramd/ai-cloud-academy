'use client';

import { motion } from 'framer-motion';
import { technologies } from '../course/what-will-you-learn';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function Technologies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full py-8 sm:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 lg:gap-6 min-w-max px-4 sm:px-6">
          {technologies.map((technology) => (
            <motion.div
              key={technology.id}
              variants={itemVariants}
              className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] transform hover:scale-105 transition-transform duration-300"
            >
              <div className="top-white-border h-16 sm:h-18 md:h-20 rounded-sm">
                <div className="bg-zinc-900/90 p-3 sm:p-4 flex items-center justify-center hover:bg-zinc-800/90 transition-colors">
                  <Image
                    src={technology.image}
                    alt="Technology icon"
                    width={100}
                    height={100}
                    className="w-full h-12 sm:h-14 md:h-16 object-contain p-2 sm:p-3 grayscale"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
