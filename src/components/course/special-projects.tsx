'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TitleText } from '../title-text';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Title of this projects 1',
    description:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the...',
    image: '/course/project.png',
  },
  {
    id: 2,
    title: 'Title of this projects 2',
    description:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the...',
    image: '/course/project.png',
  },
  {
    id: 3,
    title: 'Title of this projects 3',
    description:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the...',
    image: '/course/project.png',
  },
  {
    id: 4,
    title: 'Title of this projects 4',
    description:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the...',
    image: '/course/project.png',
  },
  {
    id: 5,
    title: 'Title of this projects 5',
    description:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the...',
    image: '/course/project.png',
  },
];

export default function SpecialProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const maxIndex = Math.max(0, projects.length - 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      const translateX = Math.min(currentIndex * 33.33, maxIndex * 33.33);
      carouselRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full bg-black py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            YOU WORK ON SPECIAL PROJECT
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our dedicated team brings together a wealth of knowledge and practical insights from 
            both the academic and professional spheres
          </p>
        </div> */}
        <div className="flex justify-center items-center flex-col space-y-4">
          <motion.div
            className="text-center space-y-2 sm:space-y-4"
            variants={itemVariants}
          >
            <TitleText>YOU WORK ON SPECIAL PROJECT</TitleText>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
              Our dedicated team brings together a wealth of knowledge and
              practical insights from both the academic and professional spheres{' '}
            </p>
          </motion.div>
        </div>
        <div className="overflow-hidden relative mt-8 sm:mt-12 md:mt-20">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: `${projects.length * 33.33}%` }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={cn(
                  'px-2 sm:px-4 w-full sm:w-1/2 md:w-1/3',
                  index === currentIndex ||
                    index === currentIndex + 1 ||
                    index === currentIndex + 2
                    ? 'opacity-100'
                    : 'opacity-50'
                )}
              >
                <Card className="bg-zinc-900 border-none  top-left-white-border">
                  <div>
                    <div className="aspect-[16/9] rounded-lg p-2 sm:p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-fit object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
