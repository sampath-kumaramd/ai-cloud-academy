'use client';

import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GlowCircle } from './glow-circle';
import { TitleText } from '../title-text';
import { GradientButton } from '../ui/gradient-button';

interface Course {
  title: string;
  description: string;
  rating: number;
  students: string;
  image: string;
  tags: string[];
}

interface CrashCourse {
  title: string;
  duration: string;
  image: string;
  price: string;
  rating: number;
  students: string;
}

const courses: Course[] = [
  {
    title: 'AI and Cloud Development',
    description:
      'Our programs helps motivated students become a career ready hireable developers. Our programs helps motivated students become a career ready hireable developers.',
    rating: 4.5,
    students: '3000+ student enrolled',
    image: '/home-page/courses/1.png',
    tags: ['Product Design', 'Advance', 'Advance'],
  },
  {
    title: 'AI Full Stack Web Development',
    description:
      'Our programs helps motivated students become a career ready hireable developers. Our programs helps motivated students become a career ready hireable developers.',
    rating: 4.5,
    students: '3000+ student enrolled',
    image: '/home-page/courses/2.png',
    tags: ['Product Design', 'Advance', 'Advance'],
  },
];

const crashCourses: CrashCourse[] = [
  {
    title: 'AI Full Stack Web Development',
    duration: '8 weeks',
    image: '/home-page/courses/3.png',
    price: 'Free',
    rating: 4.5,
    students: '3000+ student enrolled',
  },
  {
    title: 'AI and Cloud Development',
    duration: '6 weeks',
    image: '/home-page/courses/3.png',
    price: 'Free',
    rating: 4.5,
    students: '3000+ student enrolled',
  },
  {
    title: 'AI and Cloud Development',
    duration: '4 weeks',
    image: '/home-page/courses/3.png',
    price: 'Free',
    rating: 4.5,
    students: '3000+ student enrolled',
  },
  {
    title: 'AI and Cloud Development',
    duration: '6 weeks',
    image: '/home-page/courses/3.png',
    price: 'Free',
    rating: 4.5,
    students: '3000+ student enrolled',
  },
];

const getGradientColor = (index: number) => {
  // rgb(16, 13, 40)
  if (index === 0) return 'rgba(47, 17, 37, 0.8)'; // dark burgundy
  if (index === 1) return 'rgba(13, 42, 21, 0.6)'; // dark green
  if (index === 2) return 'rgba(46, 25, 74, 0.8)'; // dark purple/navy
  if (index === 3) return 'rgba(16, 13, 40, )'; // dark blue
  return 'rgba(228, 226, 255, 0.1)';
};

export function FeaturedCourses() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[url('/home-page/featured_background.svg')] bg-cover bg-center bg-no-repeat " />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <TitleText>FEATURED COURSES</TitleText>
          <p className="text-gray-400 max-w-lg mx-auto">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-black overflow-hidden rounded-xl"
            >
              <div
                className="absolute  rounded-full "
                style={{
                  height: '400px',
                  width: '400px',
                  background: `radial-gradient(circle at center,
                   ${getGradientColor(index)} 0%, 
                  rgba(228,226,255,0) 90%)`,
                  top: '-100px',
                  filter: 'blur(20px)',
                  transform: 'rotate(-45deg)',
                }}
              />
              <div
                className="absolute  rounded-full "
                style={{
                  height: '400px',
                  width: '400px',
                  background: `radial-gradient(circle at center,
                   ${getGradientColor(index + 2)} 0%,
                   rgba(28,226,255,0) 90%)`,
                  bottom: '-100px',
                  right: '-100px',
                  filter: 'blur(20px)',
                  transform: 'rotate(-45deg)',
                }}
              />
              <div
                className={`relative rounded-xl overflow-hidden gradient-border
                  ${index === 0 ? 'gradient-purple-border' : 'gradient-green-border'}
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
                      <div className="md:w-1/2 space-y-4 p-4">
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
                              className={`bg-gray-900/50 border-gray-700 text-sm 
                                ${tagIndex === 0 ? 'text-[#80a65a]' : 'text-white'}
                                `}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <GradientButton>View Courses</GradientButton>
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
                        <GradientButton>View Courses</GradientButton>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-40">
        <div className="text-center mb-16">
          <TitleText>CRASH COURSES</TitleText>
          <p className="text-gray-400 max-w-lg mx-auto">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crashCourses.map((course, index) => (
            <div
              key={index}
              className="relative  overflow-hidden rounded-xl gradient-purple-to-blue-border p-[2px]"
              style={{
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'padding-box',
              }}
            >
              <div className="relative h-fit">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-gray-400 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-thin">{course.price}</span>
                </div>
              </div>

              <div className="p-4 space-y-2 absolute bottom-0 left-0 right-0 pb-10">
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
                <h3 className="text-xl font-semibold text-white max-w-60 ">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
