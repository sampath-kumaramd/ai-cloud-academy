'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
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
    <section className="relative w-full overflow-hidden bg-black py-20 -mt-60">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <TitleText>FEATURED COURSES</TitleText>
          <p className="mx-auto max-w-lg text-gray-400 md:text-xl">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <VideoFrame
            videoSrc="/home-page/featured_video.mp4"
            posterImage="/home-page/featured_image.png"
          />

          {/* Decorative gradient effects */}
          <div className="absolute -left-4 top-0 h-72 w-72 bg-purple-500 opacity-20 blur-[100px]" />
          <div className="absolute -right-4 bottom-0 h-72 w-72 bg-blue-500 opacity-20 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
