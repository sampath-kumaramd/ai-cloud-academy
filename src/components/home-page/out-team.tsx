'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/card';
import { TitleText } from '../title-text';
import { motion } from 'framer-motion';

export default function OutTeam() {
  const getborderClass = (index: number) => {
    if (index === 0) return 'bottom-right-blue-border';
    if (index === 1) return 'bottom-right-green-border';
    if (index === 2) return 'bottom-right-yellow-border';
    if (index === 3) return 'bottom-right-purple-border';
    return '';
  };

  const getGradientColor = (index: number) => {
    // rgb(16, 13, 40)
    if (index === 0) return 'rgba(16, 13, 40, )'; // dark blue
    if (index === 1) return 'rgba(13, 42, 21, 0.8)'; // dark green
    if (index === 2) return 'rgba(46, 28, 16, 0.8)'; // dark purple/navy
    if (index === 3) return 'rgba(47, 17, 37, 0.8)'; // dark burgundy
    return 'rgba(228, 226, 255, 0.1)';
  };

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
      },
    },
  };

  return (
    <div className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:container lg:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <TitleText>OUR TEAM</TitleText>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Our dedicated team brings together a wealth of knowledge and practical
          insights from both the academic and professional spheres
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`text-center space-y-3 rounded-lg p-4 ${getborderClass(index)}`}
          >
            <div className="relative overflow-hidden">
              <div
                className="absolute rounded-full"
                style={{
                  height: '400px',
                  width: '400px',
                  background: `radial-gradient(circle at center, ${getGradientColor(index)} 0%, rgba(228,226,255,0) 90%)`,
                  bottom: '-150px',
                  transform: 'rotate(-45deg)',
                }}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg p-4"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  width={400}
                  height={400}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-4 relative z-10 py-4"
              >
                <h3 className="text-base sm:text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {member.role}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/1.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/2.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/3.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/4.png',
  },
];
