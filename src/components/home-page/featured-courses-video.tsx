'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { VideoFrame } from './video-frame';
import { TitleText } from '../title-text';

export default function FeaturedCoursesVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 sm:py-16 lg:py-20 -mt-40 sm:-mt-48 lg:-mt-60">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TitleText>FEATURED COURSES</TitleText>
          </motion.div>

          <motion.p
            className="mx-auto max-w-lg text-gray-400 text-sm sm:text-base md:text-xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our programs helps motivated students become a career ready hireable
            developers
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-5xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <VideoFrame
            videoSrc="/home-page/featured_video.mp4"
            posterImage="/home-page/featured_image.png"
          />

          {/* Decorative gradient effects */}
          <div className="absolute -left-4 top-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-purple-500 opacity-20 blur-[100px]" />
          <div className="absolute -right-4 bottom-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-blue-500 opacity-20 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
