'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white w-full items-center"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between py-3 text-sm font-thin">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'tween' }}
          >
            © 2023 All Rights Reserved.
          </motion.div>
          <div className="flex gap-4">
            {['terms', 'privacy'].map((path) => (
              <motion.div
                key={path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${path}`}>
                  {path === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
