import Image from 'next/image';
import { TitleText } from '../common/title-text';
import { Card, CardContent } from '../ui/card';

const offerings = [
  {
    title: 'Live Classes',
    description: 'Weekly live classes with industry experts',
    icon: '/home-page/key-offerings/live-classes.svg',
    gradient: 'from-blue-500/20 to-blue-900/20',
    borderGradient: 'from-blue-500 to-blue-900',
  },
  {
    title: 'Capstone Projects',
    description: 'Build real-world projects that get you hired',
    icon: '/home-page/key-offerings/capstone.svg',
    gradient: 'from-purple-500/20 to-purple-900/20',
    borderGradient: 'from-purple-500 to-purple-900',
  },
  {
    title: 'Doubt Solving',
    description: 'Get your doubts solved by expert developers',
    icon: '/home-page/key-offerings/doubt-solving.svg',
    gradient: 'from-orange-500/20 to-orange-900/20',
    borderGradient: 'from-orange-500 to-orange-900',
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'Well-structured curriculum to master development',
    icon: '/home-page/key-offerings/curriculum.svg',
    gradient: 'from-green-500/20 to-green-900/20',
    borderGradient: 'from-green-500 to-green-900',
  },
];

export default function KeyOffering() {
  const getborderClass = (index: number) => {
    if (index === 0) return 'border-live-classes';
    if (index === 1) return 'border-capstone';
    if (index === 2) return 'border-doubt-solving';
    if (index === 3) return 'border-curriculum';
    return '';
  };

  const getGradientColor = (index: number) => {
    // rgb(16, 13, 40)
    if (index === 0) return '#6558FF'; // dark blue
    if (index === 1) return '#FF58C5'; // dark green
    if (index === 2) return '#FF9858'; // dark purple/navy
    if (index === 3) return '#46EB75'; // dark burgundy
    return 'rgba(228, 226, 255, 0.1)';
  };
  return (
    <section className="w-full bg-black py-16 px-4 ">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <TitleText>KEY OFFERINGS OF THE PROGRAM</TitleText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {offerings.map((offering, index) => (
            <Card
              key={offering.title}
              className={`w-full bg-black max-w-xl  overflow-hidden rounded-lg border-none  ${getborderClass(index)}`}
            >
              <div className="relative">
                <div
                  className="absolute rounded-full z-30 "
                  style={{
                    height: '150px',
                    width: '200px',
                    borderRadius: '200px',
                    background: getGradientColor(index),
                    top: '-100px',
                    right: '320px',
                    transform: 'rotate(-45deg)',
                    filter: 'blur(80px)',
                  }}
                />
                <CardContent className="relative z-50 flex flex-col items-start">
                  <div className="w-32 h-32">
                    <Image
                      src={offering.icon}
                      alt={offering.title}
                      width={64}
                      height={64}
                      className="w-full h-full -ml-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {offering.title}
                    </h3>
                    <p className="text-base font-extralight text-gray-400">
                      {offering.description}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
