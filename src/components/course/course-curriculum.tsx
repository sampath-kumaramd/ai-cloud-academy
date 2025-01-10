'use client';

import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TitleText } from '../title-text';
import { GradientButton } from '../ui/gradient-button';
import { Separator } from '../ui/separator';

interface VideoLesson {
  title: string;
  duration: string;
  isFree: boolean;
  thumbnail: string;
}

interface Module {
  title: string;
  description: string;
  videosCount: number;
  duration: string;
  lessons: VideoLesson[];
}

export default function CourseCurriculum() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const cloudDevOpsModules: Module[] = [
    {
      title: 'Module 1: Introduction',
      description:
        'Discover the foundations of cloud development, including essential cloud services, architecture, and career opportunities in this introductory module.',
      videosCount: 6,
      duration: '4 WEEKS',
      lessons: [
        {
          title: 'What are LLMs and what are they capable of.',
          duration: '4:29',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Understanding Cloud Architecture Basics',
          duration: '5:15',
          isFree: true,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Essential DevOps Principles',
          duration: '6:02',
          isFree: true,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Getting Started with AWS',
          duration: '7:45',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
    },
    {
      title: 'Module 2: Cloud Infrastructure',
      description:
        'Deep dive into cloud infrastructure, virtual machines, containers, and networking concepts essential for modern cloud development.',
      videosCount: 8,
      duration: '5 WEEKS',
      lessons: [
        {
          title: 'Virtual Machines and Containers',
          duration: '8:15',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Networking in the Cloud',
          duration: '6:30',
          isFree: false,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Storage Solutions and Databases',
          duration: '7:45',
          isFree: false,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Security Best Practices',
          duration: '9:20',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
    },
    {
      title: 'Module 3: DevOps Practices',
      description:
        'Learn essential DevOps practices including CI/CD, automation, and monitoring to streamline your development workflow.',
      videosCount: 7,
      duration: '4 WEEKS',
      lessons: [
        {
          title: 'Introduction to CI/CD',
          duration: '5:45',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Automation Fundamentals',
          duration: '6:20',
          isFree: false,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Monitoring and Logging',
          duration: '7:10',
          isFree: false,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Infrastructure as Code',
          duration: '8:30',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
    },
  ];

  const aiDevelopmentModules: Module[] = [
    {
      title: 'Module 1: Introduction',
      description:
        'Discover the foundations of AI development, including essential concepts, architectures, and career opportunities in this introductory module.',
      videosCount: 6,
      duration: '4 WEEKS',
      lessons: [
        {
          title: 'What are LLMs and what are they capable of.',
          duration: '4:29',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Understanding Cloud Architecture Basics',
          duration: '5:15',
          isFree: true,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Essential DevOps Principles',
          duration: '6:02',
          isFree: true,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Getting Started with AWS',
          duration: '7:45',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
    },
    {
      title: 'Module 2: Cloud Infrastructure',
      description:
        'Deep dive into cloud infrastructure, virtual machines, containers, and networking concepts essential for modern cloud development.',
      videosCount: 8,
      duration: '5 WEEKS',
      lessons: [
        {
          title: 'Virtual Machines and Containers',
          duration: '8:15',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Networking in the Cloud',
          duration: '6:30',
          isFree: false,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Storage Solutions and Databases',
          duration: '7:45',
          isFree: false,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Security Best Practices',
          duration: '9:20',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
    },
    {
      title: 'Module 3: DevOps Practices',
      description:
        'Learn essential DevOps practices including CI/CD, automation, and monitoring to streamline your development workflow.',
      videosCount: 7,
      duration: '4 WEEKS',
      lessons: [
        {
          title: 'Introduction to CI/CD',
          duration: '5:45',
          isFree: true,
          thumbnail: '/course/courses/1.png',
        },
        {
          title: 'Automation Fundamentals',
          duration: '6:20',
          isFree: false,
          thumbnail: '/course/courses/2.png',
        },
        {
          title: 'Monitoring and Logging',
          duration: '7:10',
          isFree: false,
          thumbnail: '/course/courses/3.png',
        },
        {
          title: 'Infrastructure as Code',
          duration: '8:30',
          isFree: false,
          thumbnail: '/course/courses/1.png',
        },
      ],
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
      className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex justify-center items-center flex-col space-y-4 px-4 sm:px-6">
        <motion.div
          className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <TitleText>COURSE CURRICULUM</TitleText>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            The curriculum and our expert senior instructors will guide you
            through on the following technologies which you make you a gem in
            the job market
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientButton>Enroll Now</GradientButton>
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
              {phase.modules.map((module, moduleIndex) => (
                <motion.div key={moduleIndex} variants={cardVariants}>
                  <Card className="bg-zinc-900 border-zinc-800 relative overflow-hidden border-t-2 border-b-1 border-t-white border-white/10">
                    <div
                      className="absolute rounded-full z-30"
                      style={{
                        height: '100px',
                        width: '100px',
                        borderRadius: '200px',
                        background: '#ffffff',
                        top: '-100px',
                        right: '100px',
                        transform: 'rotate(-45deg)',
                        filter: 'blur(80px)',
                      }}
                    />
                    <CardHeader
                      className="flex flex-col sm:flex-row items-start justify-between space-y-2 sm:space-y-0 pb-4 cursor-pointer"
                      onClick={() =>
                        setExpandedModule(
                          expandedModule === moduleIndex ? null : moduleIndex
                        )
                      }
                    >
                      <div className="space-y-1">
                        <h2 className="text-xl font-semibold text-white">
                          {module.title}
                        </h2>
                        <p className="text-sm text-zinc-400">
                          {module.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400 whitespace-nowrap">
                        <span>{module.videosCount} VIDEOS</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                        {expandedModule === moduleIndex ? (
                          <ChevronUp className="h-6 w-6 shrink-0 transition-transform duration-200 text-[#242529] p-1 bg-gradient-to-b from-[#7F7F7F] to-[#505050] rounded-md" />
                        ) : (
                          <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 text-[#242529] p-1 bg-gradient-to-b from-[#7F7F7F] to-[#505050] rounded-md" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedModule === moduleIndex && (
                      <CardContent className="space-y-4">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg hover:bg-zinc-800/50 p-2 transition-colors"
                          >
                            <div className="relative aspect-video w-40 rounded-md bg-zinc-800 overflow-hidden">
                              <img
                                src={lesson.thumbnail}
                                alt=""
                                className="object-cover"
                                width={160}
                                height={90}
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="rounded-full bg-white/50 p-2">
                                  <Play
                                    fill="white"
                                    className="h-4 w-4 border-white"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 space-y-1">
                              <h3 className="font-medium text-white">
                                {lesson.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm">
                                {lesson.isFree && (
                                  <>
                                    <span className="text-white bg-zinc-800 py-1 rounded-full px-2">
                                      Free
                                    </span>
                                  </>
                                )}
                                <span className="text-white bg-zinc-800 py-1 rounded-full px-2">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
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
