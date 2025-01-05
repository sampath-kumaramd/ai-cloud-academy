import React from 'react';
import { TitleText } from '../common/title-text';
import Image from 'next/image';

export default function showcaseAchievements() {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <TitleText>SHOWCASE YOUR ACHIEVEMENTS</TitleText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dedicated team brings together a wealth of knowledge and
            practical insights from both the academic and professional spheres
          </p>
          <div className="relative text-white flex items-center justify-center mx-32">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[url('/home-page/achievments_background.svg')] bg-cover bg-center bg-no-repeat w-full h-full" />
            <div className="relative py-32">
              <div className="relative z-10 ">
                <Image
                  src="/home-page/certificate.png"
                  alt="achievments_background"
                  width={500}
                  height={400}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
