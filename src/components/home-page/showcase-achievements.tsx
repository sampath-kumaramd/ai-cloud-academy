'use client';
import React from 'react';
import { TitleText } from '../title-text';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ShowcaseAchievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center space-y-4"
          >
            <TitleText>SHOWCASE YOUR ACHIEVEMENTS</TitleText>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 max-w-2xl mx-auto px-4"
            >
              Our dedicated team brings together a wealth of knowledge and
              practical insights from both the academic and professional spheres
            </motion.p>
          </motion.div>
          <div className="relative text-white flex items-center justify-center mx-4 sm:mx-16 md:mx-32">
            {/* Background gradient */}
            <motion.div
              className="absolute inset-0 bg-[url('/home-page/achievments_background.svg')] bg-cover bg-center bg-no-repeat w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="relative py-16 md:py-32">
              <motion.div
                className="relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src="/home-page/certificate.png"
                  alt="achievements certificate"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain max-w-[300px] md:max-w-[500px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
