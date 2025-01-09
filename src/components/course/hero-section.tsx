'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TitleText } from '../title-text';
import { Badge } from '../ui/badge';
import { GradientButton } from '../ui/gradient-button';
import {
  TestimonialCard,
  testimonials,
} from '../home-page/testimonial-section';

export default function HeroSection() {
  const features = [
    { text: '13 Interactive live sessions' },
    { text: '2 projects to apply learnings' },
    { text: '6 month duration' },
    { text: '20+ Assignment' },
    { text: 'Private community of peers' },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90">
        <img
          src="/course/image.png"
          alt="Course Hero"
          className="object-cover mx-auto relative z-10"
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
          <GradientButton>Sign in</GradientButton>
          <button
            className="rounded-lg h-10 border border-white/15 bg-white/10 px-4 py-8  items-center flex justify-center font-medium text-white transition-all
             hover:bg-white/[0.06] hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]"
          >
            View Curriculum
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Badge key={index} className="mx-4 my-2">
              <p className="text-gray-300">{feature.text}</p>
            </Badge>
          ))}
        </div>
      </div>

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
