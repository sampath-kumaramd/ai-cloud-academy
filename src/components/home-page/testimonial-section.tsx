'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { TitleText } from '../title-text';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <TitleText>WHAT OUR STUDENTS SAY ABOUT US</TitleText>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            Our dedicated team brings together a wealth of knowledge and
            practical insights from both the academic and professional spheres
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {leftColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {middleColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {rightColumnTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div whileHover={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Card className="w-full relative overflow-hidden rounded-lg border-0 top-white-border">
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
    </motion.div>
  );
}
