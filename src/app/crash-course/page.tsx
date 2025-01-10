import ThisCourseIsFor from '@/components/course/this-course-is-for';
import CourseCurriculum from '@/components/crash-courses/course-curriculum';
import CrashCourseHeroSection from '@/components/crash-courses/hero-section';
import FAQSection from '@/components/home-page/faq-section';
import KeyOffering from '@/components/home-page/key-offering';
import ShowcaseAchievements from '@/components/home-page/showcase-achievements';
import TestimonialSection from '@/components/home-page/testimonial-section';
import { TitleText } from '@/components/title-text';

export default function CrashCoursePage() {
  return (
    <div className="bg-black pt-20">
      <CrashCourseHeroSection />
      <div className="bg-black container mx-auto">
        <div className="max-w-4xl text-white">
          <KeyOffering isLeftAligned={true} />
          <CourseCurriculum />
          <ThisCourseIsFor isLeftAligned={true} />
          <TestimonialSection isLeftAligned={true} />
          <ShowcaseAchievements isLeftAligned={true} />
          <FAQSection isLeftAligned={true} />
        </div>
      </div>
    </div>
  );
}
