'use client';

import { GradientButton } from '@/components/ui/gradient-button';
import { GradientPill } from './gradient-pill';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TitleText } from '../title-text';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[url('/home-page/hero.svg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0" />
      <div className="container relative flex min-h-screen flex-col items-center md:flex-row md:items-start md:justify-between px-4 py-32 sm:py-24 md:py-32 lg:py-32">
        <motion.div
          className="max-w-4xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6  font-bold tracking-tight text-white font-title space-y-2"
          >
            <TitleText>AI UNLEASHED.</TitleText>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <TitleText>BECOME A </TitleText>
              <GradientPill />
            </div>
            <div className="lg:flex word-wrap ">
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl pe-2">
                DEVELOPER
              </span>
              {'  '}
              <TitleText>WITH US.</TitleText>
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 max-w-xl text-base sm:text-lg text-white/80 mx-auto md:mx-0"
          >
            Our programs helps motivated students become career ready hireable
            developers
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <GradientButton>View Courses</GradientButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image
              src="/home-page/hero-image.svg"
              alt="Hero Decorative"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
