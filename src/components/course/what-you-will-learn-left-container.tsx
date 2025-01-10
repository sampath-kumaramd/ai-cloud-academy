'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatYouWillLearnLeftContainer() {
  const subjects = [
    {
      title: 'Data Structures and Algorithms',
      description:
        'Build a solid foundation in fundamentals of programming such as conditional statements, logical operators, and arrays.',
      image: '/course/what-will-you-learn/data-structures.svg',
    },
    {
      title: 'Programming Basics',
      description:
        'Build a solid foundation in fundamentals of programming such as conditional statements, logical operators, and arrays.',
      image: '/course/what-will-you-learn/programming-basic.svg',
    },
    {
      title: 'Build your own apps',
      description:
        'Build scalable apps that can be used by millions of users by applying concepts like JavaScript, Node.js, Express.js, SQL, etc.',
      image: '/course/what-will-you-learn/app.svg',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col space-y-8 gap-8"
    >
      {subjects.map((subject, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 "
        >
          <div className="col-span-1 relative flex justify-center sm:justify-start">
            <div className="top-white-border w-28 sm:w-36 h-28 sm:h-36 rounded-xl">
              <div className="bg-zinc-900/90 p-4 flex items-center justify-center">
                <Image
                  src={subject.image}
                  alt={subject.title}
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-3 text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              {subject.title}
            </div>
            <p className="text-base sm:text-lg text-gray-300">
              {subject.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
