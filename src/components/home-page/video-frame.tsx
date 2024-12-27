import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface VideoFrameProps {
  videoSrc: string;
  posterImage?: string;
}

export function VideoFrame({ videoSrc, posterImage }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="relative w-full max-w-[969px] mx-auto">
      {/* Curved frame container */}
      <div
        className="relative aspect-[969/584] w-full overflow-hidden"
        style={{
          borderRadius: '24px',
          transform: 'perspective(1000px) rotateX(2deg)',
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          boxShadow: `
            0 20px 40px rgba(0,0,0,0.3),
            inset 0 0 0 1px rgba(255,255,255,0.1)
          `,
        }}
      >
        {/* Video element with curved bottom */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 85%, transparent 100%)',
          }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
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
        </div>

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
    </div>
  );
}
