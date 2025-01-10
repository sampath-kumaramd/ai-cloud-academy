'use client';

import {
  Star,
  Monitor,
  FolderKanban,
  Clock,
  FileText,
  Users,
  CameraIcon,
} from 'lucide-react';
import { TitleText } from '../title-text';
import { GradientButton } from '../ui/gradient-button';
import {
  TestimonialCard,
  testimonials,
} from '../home-page/testimonial-section';
import { motion } from 'framer-motion';
export default function HeroSection() {
  const features = [
    {
      text: '13 Interactive live sessions',
      icon: <CameraIcon className="w-5 h-5" />,
    },
    {
      text: '2 projects to apply learnings',
      icon: <FolderKanban className="w-5 h-5" />,
    },
    { text: '6 month duration', icon: <Clock className="w-5 h-5" /> },
    { text: '20+ Assignment', icon: <FileText className="w-5 h-5" /> },
    { text: 'Private community of peers', icon: <Users className="w-5 h-5" /> },
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

  return (
    <div className="relative min-h-screen bg-black text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <img
          src="/course/image.png"
          alt="Course Hero"
          className="object-cover mx-auto relative z-10"
        />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-4 pt-96 pb-20 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Rating and enrollment */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">4.5</span>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-200">3000+ student enrolled</span>
        </motion.div>

        {/* Main heading */}
        <TitleText>
          AI AND CLOUD
          <br />
          DEVELOPMENT
        </TitleText>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-gray-100 mb-12 text-lg"
          variants={itemVariants}
        >
          Our programs helps motivated students become a career ready hireable
          developers a career ready hireable developers. Our programs helps
          motivated students become a career ready hireable developersa career
          ready hireable developers.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <GradientButton>Sign in</GradientButton>
          <button
            className="rounded-lg h-10 border border-white/15 bg-white/10 px-4 py-8  items-center flex justify-center font-medium text-white transition-all
             hover:bg-white/[0.06] hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]"
          >
            View Curriculum
          </button>
        </div>

        {/* Features */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 backdrop-blur-sm border border-white/10"
              variants={itemVariants}
            >
              {feature.icon}
              <span className="text-gray-300">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient border at bottom */}
      <div className="relative top-2 left-0 right-0 h-1   bg-custom-gradient" />
      <div className="container mx-auto  pt-20 pb-20 text-center flex  gap-4">
        {testimonials.slice(3, 5).map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
