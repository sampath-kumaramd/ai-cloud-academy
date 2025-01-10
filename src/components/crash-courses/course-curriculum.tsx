'use client';

import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TitleText } from '../title-text';
import { GradientButton } from '../ui/gradient-button';
import { Separator } from '../ui/separator';
import CourseModules from './course-modules';

interface Module {
  number: number;
  title: string;
  description: string;
}

export default function CourseCurriculum() {
  const modules = [
    {
      number: 1,
      title: 'Introduction',
      description:
        'Discover the foundations of cloud development, including essential cloud services, architecture, and career opportin...',
    },
    {
      number: 2,
      title: 'Introduction',
      description:
        'Discover the foundations of cloud development, including essential cloud services, architecture, and career opportin...',
    },
  ];
  const cloudDevOpsModules: Module[] = [
    {
      number: 1,
      title: 'Module 1: Introduction',
      description:
        'Discover the foundations of cloud development, including essential cloud services, architecture, and career opportunities in this introductory module.',
    },
    {
      number: 2,
      title: 'Module 2: Cloud Infrastructure',
      description:
        'Deep dive into cloud infrastructure, virtual machines, containers, and networking concepts essential for modern cloud development.',
    },
    {
      number: 3,
      title: 'Module 3: DevOps Practices',
      description:
        'Learn essential DevOps practices including CI/CD, automation, and monitoring to streamline your development workflow.',
    },
  ];

  const aiDevelopmentModules: Module[] = [
    {
      title: 'Module 1: Introduction',
      description:
        'Discover the foundations of AI development, including essential concepts, architectures, and career opportunities in this introductory module.',
      number: 1,
    },
    {
      number: 2,
      title: 'Module 2: Cloud Infrastructure',
      description: '5:15',
    },
  ];

  const curriculumPhases = [
    {
      title: 'Cloud, DevOps Development',
      titleHighlight: 'Cloud, DevOps',
      description: 'Development',
      modules: cloudDevOpsModules,
    },
    {
      title: 'AI Development',
      titleHighlight: 'AI',
      description: 'Development',
      modules: aiDevelopmentModules,
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className=" bg-black text-white p-4 sm:p-6 lg:p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex justify-center items-start flex-col space-y-4 ">
        <motion.div
          className="text-start space-y-2 sm:space-y-4 mx-auto"
          variants={itemVariants}
        >
          <TitleText>COURSE CURRICULUM</TitleText>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            The curriculum and our expert senior instructors will guide you
            through on the following technologies which you make you a gem in
            the job market
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-20 mt-16 sm:mt-32">
        {curriculumPhases.map((phase, phaseIndex) => (
          <motion.section key={phaseIndex} variants={itemVariants}>
            <div className="space-y-1 mb-4 sm:mb-6 px-4 sm:px-0">
              <div className="text-xs sm:text-sm text-gray-400">
                CURRICULUM PHASE {phaseIndex + 1} • 6 VIDEOS
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-[#ff354c]">{phase.titleHighlight} </span>
                <span className="bg-gradient-to-r from-red-500 via-[#2d38fa] to-[#d798ff] bg-clip-text text-transparent">
                  {phase.description}
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <CourseModules modules={phase.modules} />
            </div>

            <motion.div
              className="flex justify-center mt-8"
              variants={itemVariants}
            >
              <button className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 items-center flex justify-center font-medium text-white transition-all hover:bg-white/[0.06] hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]">
                See Video
                <ChevronDown className="ms-2 h-4 w-4" />
              </button>
            </motion.div>

            <Separator
              className={`my-8 bg-white/10 ${phaseIndex === 0 ? '' : 'hidden'}`}
            />
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
