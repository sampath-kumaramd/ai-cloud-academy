import { GradientButton } from '@/components/ui/gradient-button';
import { GradientPill } from './gradient-pill';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('/home-page/hero.svg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 " />
      <div className="container relative flex min-h-screen flex-col sm:flex-row gap-4 items-start justify-center px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            AI UNLEASHED.
            <br />
            <div className="flex items-center space-x-4">
              BECOME A <GradientPill />
            </div>
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              DEVELOPER
            </span>{' '}
            WITH US.
          </h1>
          <p className="mb-8 max-w-xl text-lg text-white/80">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
          <GradientButton>View Courses</GradientButton>
        </div>

        {/* Decorative Elements */}
        <div className="">
          <div className=" h-[400px] w-[400px] md:h-[600px] md:w-[600px]">
            <Image
              src="/home-page/hero-image.svg"
              alt="Hero Decorative"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
