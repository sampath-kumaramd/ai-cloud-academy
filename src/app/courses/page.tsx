import CourseHeroSection from '@/components/course/hero-section';
import WhatWillYouLearn from '@/components/course/what-will-you-learn';
import KeyOffering from '@/components/home-page/key-offering';
import CourseCurriculum from '@/components/course/course-curriculum';
import ThisCourseIsFor from '@/components/course/this-course-is-for';
import TestimonialSection from '@/components/home-page/testimonial-section';
import FAQSection from '@/components/home-page/faq-section';
import ShowcaseAchievements from '@/components/home-page/showcase-achievements';
import SpecialProjects from '@/components/course/special-projects';

export default function CoursePage() {
  return (
    <div className="bg-black pt-20">
      <CourseHeroSection />
      <WhatWillYouLearn />
      <KeyOffering />
      <CourseCurriculum />
      <ThisCourseIsFor />
      <TestimonialSection />
      <SpecialProjects />
      <ShowcaseAchievements />
      <FAQSection />
    </div>
  );
}
