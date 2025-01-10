import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { TitleText } from '../title-text';
import WhatYouWillLearnLeftContainer from '../course/what-you-will-learn-left-container';
import { Technologies } from './technologies';

export default function CrashCourseHeroSection() {
  return (
    <section className="min-h-screen bg-black px-4 py-16 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <TitleText>AI AND CLOUD DEVELOPMENT</TitleText>
              <p className="max-w-2xl text-gray-400">
                Our programs helps motivated students become a career ready
                hireable developers. Our programs helps motivated students
                become a career ready hireable developers.sa career ready
                hireable developers.
              </p>
            </div>

            <div className="space-y-8 mt-10">
              <TitleText> WHAT YOU WILL LEARN</TitleText>
              <WhatYouWillLearnLeftContainer />
              <Technologies />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:mt-0">
            {/* <Card className="overflow-hidden bg-gray-900/50 text-white">
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-black/50">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZZY51PTcK9VFMcnDCHAjU3NSv6QgsK.png"
                    alt="Course preview"
                    className="h-full w-full object-cover opacity-75"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-xl text-gray-400 line-through">
                    $399
                  </span>
                </div>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  Enrolled
                </Button>
                <div className="space-y-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span>•</span>
                    <span>13 Interactive live sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>•</span>
                    <span>20+ Assignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>•</span>
                    <span>Private community of peers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>•</span>
                    <span>6 month duration</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
