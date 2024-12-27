import FAQSection from '@/components/home-page/faq-section';
import { FeaturedCourses } from '@/components/home-page/featured-courses';
import FeaturedCoursesVideo from '@/components/home-page/featured-courses-video';
import { HeroSection } from '@/components/home-page/hero';
import TestimonialSection from '@/components/home-page/testimonial-section';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturedCoursesVideo />
      <FeaturedCourses />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}
