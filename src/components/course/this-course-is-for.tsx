'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TitleText } from '../title-text';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Trophy } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
const courseTargets = [
  {
    icon: '/home-page/dashboard.png',
    title: 'Developer Preparing for AWS Cloud Certifications',
    description:
      'Official, technical, legal, medical, financial, business documents, website translations, certified translations.',
  },
  {
    icon: '/home-page/star.png',
    title: 'Has Coding Knowledge and Motivated to Learn new things',
    description:
      'Official, technical, legal, medical, financial, business documents, website translations, certified translations.',
  },
  {
    icon: '/home-page/shield.png',
    title: 'Developers want to get promoted with in-demand skills',
    description:
      'Official, technical, legal, medical, financial, business documents, website translations, certified translations.',
  },
  {
    icon: '/home-page/paper.png',
    title: 'Developer Preparing for AWS Cloud Certifications',
    description:
      'Official, technical, legal, medical, financial, business documents, website translations, certified translations.',
  },
];

// Add animation variants
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

export default function ThisCourseIsFor({
  isLeftAligned = false,
}: {
  isLeftAligned?: boolean;
}) {
  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className={`space-y-2 sm:space-y-4 ${isLeftAligned ? 'text-left' : 'text-center'}`}
          variants={itemVariants}
        >
          <TitleText> WHO IS THIS COURSE FOR</TitleText>
          <p
            className={`text-gray-400 text-base sm:text-lg ${isLeftAligned ? 'hidden' : ''}`}
          >
            The curriculum and our expert senior instructors will guide you
            through on the following technologies which you make you a gem in
            the job market
          </p>
        </motion.div>

        <div
          className={` max-w-5xl mx-auto ${
            isLeftAligned
              ? 'space-y-4'
              : 'grid grid-cols-1 md:grid-cols-2 gap-6'
          }`}
        >
          {courseTargets.map((target, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800  top-left-white-border"
            >
              <CardContent className="p-6 flex gap-4">
                <div className="shrink-0">
                  <Image src={target.icon} alt="icon" width={50} height={50} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-white">
                    {target.title}
                  </h3>
                  <p className="text-sm text-gray-400">{target.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
