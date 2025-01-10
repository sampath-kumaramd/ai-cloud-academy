'use client';

import { motion } from 'framer-motion';
import { technologies } from '../course/what-will-you-learn';
import Image from 'next/image';

export function Technologies() {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 sm:gap-6 min-w-max">
        {technologies.map((technology) => (
          <motion.div
            key={technology.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: technology.id * 0.1 }}
            className="top-white-border w-[200px] h-20 rounded-sm"
          >
            <div className="bg-zinc-900/90 p-4 flex items-center justify-center">
              <Image
                src={technology.image}
                alt="description"
                width={100}
                height={100}
                className="w-full h-16 sm:h-20 p-3 sm:p-5"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
