'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { TitleText } from '../title-text';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  content: string;
  image: string;
  columnPosition: 'left' | 'middle' | 'right';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Waldo',
    rating: 5,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres',
    image: '/home-page/waldo.png',
    columnPosition: 'left',
  },
  {
    id: 2,
    name: 'Waldo',
    rating: 4,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres. Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres. Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres.',
    image: '/home-page/waldo.png',
    columnPosition: 'middle',
  },
  {
    id: 3,
    name: 'Waldo',
    rating: 5,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres',
    image: '/home-page/waldo.png',
    columnPosition: 'right',
  },
  {
    id: 4,
    name: 'Waldo',
    rating: 4,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres',
    image: '/home-page/waldo.png',
    columnPosition: 'left',
  },
  {
    id: 5,
    name: 'Waldo',
    rating: 4,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres',
    image: '/home-page/waldo.png',
    columnPosition: 'middle',
  },
  {
    id: 6,
    name: 'Waldo',
    rating: 4,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres. Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres.',
    image: '/home-page/waldo.png',
    columnPosition: 'right',
  },
  {
    id: 7,
    name: 'Waldo',
    rating: 4,
    content:
      'Our dedicated team brings together a wealth of knowledge and practical insights from both the academic and professional spheres',
    image: '/home-page/waldo.png',
    columnPosition: 'left',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  const leftColumnTestimonials = testimonials.filter(
    (t) => t.columnPosition === 'left'
  );
  const middleColumnTestimonials = testimonials.filter(
    (t) => t.columnPosition === 'middle'
  );
  const rightColumnTestimonials = testimonials.filter(
    (t) => t.columnPosition === 'right'
  );

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <TitleText>WHAT OUR STUDENTS SAY ABOUT US</TitleText>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our dedicated team brings together a wealth of knowledge and
            practical insights from both the academic and professional spheres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {middleColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="w-full max-w-xl relative overflow-hidden rounded-lg border-0 top-white-border">
      <div
        className="absolute  rounded-full z-30 "
        style={{
          height: '200px',
          width: '200px',
          borderRadius: '200px',
          background:
            'radial-gradient(circle at center, rgba(228,226,255,0.1) 0%, rgba(228,226,255,0) 60%)',
          top: '-100px',
          right: '100px',
          transform: 'rotate(-45deg)',
        }}
      />
      <CardContent className="p-6 relative z-10 bg-[#141517] bg-gradient-to-b from-white/10 via-white/5 to-transparent ">
        <div className="relative rounded-lg p-6  z-10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name}'s profile picture`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium text-white">{testimonial.name}</h3>
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
          <p className="text-gray-400 text-sm">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
