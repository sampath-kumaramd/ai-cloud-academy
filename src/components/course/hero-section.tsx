'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TitleText } from '../common/title-text';
import { Badge } from '../ui/badge';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90">
        <img
          src="/course/image.png"
          alt="Course Hero"
          className="object-cover absolute mx-auto relative z-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-96 pb-20 text-center">
        {/* Rating and enrollment */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">4.5</span>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-200">3000+ student enrolled</span>
        </div>

        {/* Main heading */}
        <TitleText>
          AI AND CLOUD
          <br />
          DEVELOPMENT
        </TitleText>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-lg">
          Our programs helps motivated students become a career ready hireable
          developers a career ready hireable developers. Our programs helps
          motivated students become a career ready hireable developersa career
          ready hireable developers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-800 text-white px-8 py-6 text-lg"
          >
            View Curriculum
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Badge className="mx-4 my-2">
            <p className="text-gray-300">13 Interactive live sessions</p>
          </Badge>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-800">
            <p className="text-gray-300">2 projects to apply learnings</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-800">
            <p className="text-gray-300">6 month duration</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-800">
            <p className="text-gray-300">20+ Assignment</p>
          </div>
        </div>

        {/* Community badge */}
        <div className="mt-4 inline-block bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-800">
          <p className="text-gray-300">Private community of peers</p>
        </div>
      </div>

      {/* Gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1   bg-custom-gradient"></div>
    </div>
  );
}
