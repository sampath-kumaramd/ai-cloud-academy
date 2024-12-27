'use client';

import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GlowCircle } from './glow-circle';

interface Course {
  title: string;
  description: string;
  rating: number;
  students: string;
  image: string;
  tags: string[];
}

const courses: Course[] = [
  {
    title: 'AI and Cloud Development',
    description:
      'Our programs helps motivated students become a career ready hireable developers. Our programs helps motivated students become a career ready hireable developers.',
    rating: 4.5,
    students: '3000+ student enrolled',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Product Design', 'Advance', 'Advance'],
  },
  {
    title: 'AI Full Stack Web Development',
    description:
      'Our programs helps motivated students become a career ready hireable developers. Our programs helps motivated students become a career ready hireable developers.',
    rating: 4.5,
    students: '3000+ student enrolled',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Product Design', 'Advance', 'Advance'],
  },
];

export function FeaturedCourses() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[url('/home-page/featured_background.svg')] bg-cover bg-center bg-no-repeat " />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FEATURED COURSES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="relative">
              {/* Decorative circles */}
              <GlowCircle
                className={`${index === 0 ? '-top-20 -right-20' : '-bottom-0 -right-0'} absolute`}
                color={
                  index === 0
                    ? 'rgba(147, 51, 234, 0.35)'
                    : 'rgba(16, 185, 129, 0.35)'
                }
              />
              {/* <div 
                className="absolute left-0 bottom-0 w-[600px] h-[600px] rounded-full"
                style={{
                  background: 'linear-gradient(145.97deg, rgba(107, 234, 122, 0.1) 1.98%, rgba(182, 246, 226, 0.04) 31.96%, rgba(255, 255, 255, 0.02) 96.88%)',
                  filter: 'blur(40px)',
                  transform: 'translate(-30%, 30%)',
                }}
              /> */}

              {/* ${    index === 0 ? 'bg-[#1F1934]' : 'bg-[#0A1B1A]' } */}
              <Card
                className={`relative rounded-xl overflow-hidden gradient-border bg-black
                `}
                style={{
                  border: '1px solid transparent',
                  backgroundClip: 'padding-box',
                  WebkitBackgroundClip: 'padding-box',
                }}
              >
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  {index === 0 ? (
                    <>
                      <div className="md:w-1/2">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-1/2 space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            <span className="font-medium text-yellow-500">
                              {course.rating}
                            </span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400 text-sm">
                            {course.students}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {course.title}
                        </h3>
                        <p className="text-gray-400">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="bg-gray-900/50 text-gray-300 border-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="relative bg-transparent border-0 text-white mt-4 overflow-hidden
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:rounded-lg
                            after:absolute after:inset-[1px] after:bg-inherit after:rounded-lg
                            hover:before:opacity-75 transition-all duration-300"
                        >
                          <span className="relative z-10">View details</span>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            <span className="font-medium text-yellow-500">
                              {course.rating}
                            </span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400 text-sm">
                            {course.students}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {course.title}
                        </h3>
                        <p className="text-gray-400">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="bg-gray-900/50 text-gray-300 border-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="relative bg-transparent border-0 text-white mt-4 overflow-hidden
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:rounded-lg
                            after:absolute after:inset-[1px] after:bg-inherit after:rounded-lg
                            hover:before:opacity-75 transition-all duration-300"
                        >
                          <span className="relative z-10">View details</span>
                        </Button>
                      </div>
                      <div className="md:w-1/2">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
