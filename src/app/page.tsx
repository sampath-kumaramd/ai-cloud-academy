import FAQSection from '@/components/home-page/faq-section';
import { FeaturedCourses } from '@/components/home-page/featured-courses';
import FeaturedCoursesVideo from '@/components/home-page/featured-courses-video';
import { HeroSection } from '@/components/home-page/hero-section';
import KeyOffering from '@/components/home-page/key-offering';
import OutTeam from '@/components/home-page/out-team';
import TestimonialSection from '@/components/home-page/testimonial-section';
import ShowcaseAchievements from '@/components/home-page/showcase-achievements';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturedCoursesVideo />
      <FeaturedCourses />
      <KeyOffering />
      <OutTeam />
      <TestimonialSection />
      <ShowcaseAchievements />
      <FAQSection />
    </div>
  );
}
