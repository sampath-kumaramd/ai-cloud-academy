'use client';
import { Card } from '@/components/ui/card';
import { Play, PlayCircle } from 'lucide-react';
import { TitleText } from '../title-text';
import WhatYouWillLearnLeftContainer from '../course/what-you-will-learn-left-container';
import { Technologies } from './technologies';
import Image from 'next/image';
import { GradientButton } from '../ui/gradient-button';
import { Video, FileText, Users, Clock } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function CrashCourseHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen bg-black px-4 py-8 sm:py-12 md:py-16 text-white md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 sm:space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <TitleText>AI AND CLOUD DEVELOPMENT</TitleText>
              <p className="max-w-2xl text-gray-400">
                Our programs helps motivated students become a career ready
                hireable developers. Our programs helps motivated students
                become a career ready hireable developers.sa career ready
                hireable developers.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 sm:space-y-8"
            >
              <TitleText> WHAT YOU WILL LEARN</TitleText>
              <WhatYouWillLearnLeftContainer />
              <Technologies />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="lg:mt-0 w-full max-w-2xl mx-auto lg:max-w-none"
          >
            <Card className="w-full bg-black/50 overflow-hidden rounded-lg border-capstone-right border-0 ">
              <div className="relative">
                <div
                  className="absolute rounded-full z-30"
                  style={{
                    height: '150px',
                    width: '100px',
                    borderRadius: '100px',
                    background: '#ea6bce',
                    top: '100px',
                    right: '0px',
                    transform: 'rotate(-45deg)',
                    filter: 'blur(80px)',
                  }}
                />

                <div
                  className="absolute rounded-full z-30"
                  style={{
                    height: '150px',
                    width: '100px',
                    borderRadius: '100px',
                    background: '#362f54',
                    bottom: '-100px',
                    left: '200px',
                    transform: 'rotate(-45deg)',
                    filter: 'blur(80px)',
                  }}
                />
                <div className="relative aspect-video">
                  {isPlaying ? (
                    <video
                      className="h-full w-full rounded-xl"
                      controls
                      autoPlay
                      src="/crash-course/your-video-file.mp4" // Replace with your video URL
                      muted
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 p-4 rounded-xl">
                        <Image
                          width={1000}
                          height={1000}
                          src="/crash-course/hero-section-image.png"
                          alt="Course preview"
                          className="h-full w-full object-cover opacity-75"
                        />
                      </div>
                      <button
                        onClick={handlePlayVideo}
                        className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-110 w-16 h-16 border-2 border-white/20 rounded-full bg-gradient-to-b from-white/20 to-white/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <Play
                          fill="white"
                          className="h-6 w-6 text-white cursor-pointer"
                        />
                      </button>
                    </>
                  )}
                </div>
                <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-2xl text-gray-500 line-through">
                      $399
                    </span>
                  </div>

                  <GradientButton className="w-full">Enroll Now</GradientButton>

                  <div className="grid grid-cols-1 gap-6 text-sm text-gray-400 py-4">
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <Video className="h-5 w-5" />
                      <span>13 interactive live sessions</span>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-5 w-5" />
                      <span>20+ Assignment</span>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <Users className="h-5 w-5" />
                      <span>Private community of peers</span>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <Clock className="h-5 w-5" />
                      <span>6 month duration</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
