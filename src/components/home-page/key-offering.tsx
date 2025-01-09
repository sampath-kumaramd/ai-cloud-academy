'use client';

import Image from 'next/image';
import { TitleText } from '../title-text';
import { Card, CardContent } from '../ui/card';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Live Classes',
    description: 'Weekly live classes with industry experts',
    icon: '/home-page/key-offerings/live-classes.svg',
    gradient: 'from-blue-500/20 to-blue-900/20',
    borderGradient: 'from-blue-500 to-blue-900',
  },
  {
    title: 'Capstone Projects',
    description: 'Build real-world projects that get you hired',
    icon: '/home-page/key-offerings/capstone.svg',
    gradient: 'from-purple-500/20 to-purple-900/20',
    borderGradient: 'from-purple-500 to-purple-900',
  },
  {
    title: 'Doubt Solving',
    description: 'Get your doubts solved by expert developers',
    icon: '/home-page/key-offerings/doubt-solving.svg',
    gradient: 'from-orange-500/20 to-orange-900/20',
    borderGradient: 'from-orange-500 to-orange-900',
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'Well-structured curriculum to master development',
    icon: '/home-page/key-offerings/curriculum.svg',
    gradient: 'from-green-500/20 to-green-900/20',
    borderGradient: 'from-green-500 to-green-900',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function KeyOffering() {
  const getborderClass = (index: number) => {
    if (index === 0) return 'border-live-classes';
    if (index === 1) return 'border-capstone';
    if (index === 2) return 'border-doubt-solving';
    if (index === 3) return 'border-curriculum';
    return '';
  };

  const getGradientColor = (index: number) => {
    // rgb(16, 13, 40)
    if (index === 0) return '#6558FF'; // dark blue
    if (index === 1) return '#FF58C5'; // dark green
    if (index === 2) return '#FF9858'; // dark purple/navy
    if (index === 3) return '#46EB75'; // dark burgundy
    return 'rgba(228, 226, 255, 0.1)';
  };
  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <TitleText>KEY OFFERINGS OF THE PROGRAM</TitleText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4"
          >
            Our programs helps motivated students become a career ready hireable
            developers
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {offerings.map((offering, index) => (
            <motion.div key={offering.title} variants={cardVariants}>
              <Card
                className={`w-full bg-black overflow-hidden rounded-lg border-none ${getborderClass(index)}`}
              >
                <div className="relative">
                  <div
                    className="absolute rounded-full z-30"
                    style={{
                      height: '150px',
                      width: '200px',
                      borderRadius: '200px',
                      background: getGradientColor(index),
                      top: '-100px',
                      right: '320px',
                      transform: 'rotate(-45deg)',
                      filter: 'blur(80px)',
                    }}
                  />
                  <CardContent className="relative z-50 flex flex-col items-start p-4 sm:p-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32">
                      <Image
                        src={offering.icon}
                        alt={offering.title}
                        width={64}
                        height={64}
                        className="w-full h-full -ml-4 sm:-ml-7 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {offering.title}
                      </h3>
                      <p className="text-sm sm:text-base font-extralight text-gray-400">
                        {offering.description}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
