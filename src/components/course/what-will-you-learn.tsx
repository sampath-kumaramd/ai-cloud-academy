'use client';

import Image from 'next/image';
import { TitleText } from '../title-text';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface VideoFrameProps {
  videoSrc: string;
  posterImage?: string;
}

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

const technologies = [
  {
    id: 1,
    image: '/course/technologies/docker.svg',
  },
  {
    id: 2,
    image: '/course/technologies/aws.svg',
  },
  {
    id: 3,
    image: '/course/technologies/kubernetes.svg',
  },
  {
    id: 4,
    image: '/course/technologies/parrot.svg',
  },
  {
    id: 5,
    image: '/course/technologies/terraform.svg',
  },
  {
    id: 6,
    image: '/course/technologies/openai.svg',
  },
  {
    id: 7,
    image: '/course/technologies/jenkins.svg',
  },
  {
    id: 8,
    image: '/course/technologies/gemini.svg',
  },
];

export function Technologies() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {technologies.map((technology) => (
        <div
          key={technology.id}
          className="top-white-border w-full h-auto rounded-sm"
        >
          <div className=" bg-zinc-900/90 p-4 flex items-center justify-center">
            <Image
              src={technology.image}
              alt="description"
              width={100}
              height={100}
              className="w-full h-20 p-5"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function VideoFrame({ videoSrc, posterImage }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  React.useEffect(() => {
    // Any video-related initialization can go here
  }, []);

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
    <div
      className="relative w-full max-w-[969px] mx-auto"
      suppressHydrationWarning
    >
      <video
        ref={videoRef}
        className="h-[600px] w-auto object-cover"
        poster={posterImage}
        onEnded={() => setIsPlaying(false)}
        aria-label="Video content"
      >
        <source src={videoSrc} type="video/mp4" />
        <track
          kind="captions"
          src="/path-to-your-captions.vtt"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>

      {/* Play button overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
          <button
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform hover:scale-110"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            onClick={handlePlayClick}
          >
            <Play className="h-8 w-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function WhatWillYouLearn() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <TitleText>WHAT YOU WILL LEARN</TitleText>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            The curriculum and our expert senior instructors will guide you
            through on the following technologies which you make you a gem in
            the job market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-36 py-16">
          <div className="flex flex-col space-y-8 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="grid grid-cols-4 gap-36">
                <div className="col-span-1 relative">
                  <div className="top-white-border w-36 h-36 rounded-xl">
                    <div className=" bg-zinc-900/90 p-4 flex items-center justify-center">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        width={100}
                        height={100}
                        className="w-16 h-16"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="text-2xl font-semibold mb-4">
                    {subject.title}
                  </div>
                  <p className="text-lg text-gray-300">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <VideoFrame
              videoSrc="/course/what-will-you-learn/person-with-vr.mp4"
              posterImage="/course/what-will-you-learn/person-with-vr.png"
            />
          </div>
        </div>

        <Technologies />
      </div>
    </div>
  );
}
