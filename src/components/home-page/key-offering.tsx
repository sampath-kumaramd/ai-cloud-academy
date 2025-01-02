import { TitleText } from '../common/title-text';
import { Card } from '../ui/card';

const offerings = [
  {
    title: 'Live Classes',
    description: 'Weekly live classes with industry experts',
    icon: '/home-page/key-offerings/live-classes.png',
    gradient: 'from-blue-500/20 to-blue-900/20',
    borderGradient: 'from-blue-500 to-blue-900',
  },
  {
    title: 'Capstone Projects',
    description: 'Build real-world projects that get you hired',
    icon: '/home-page/key-offerings/capstone.png',
    gradient: 'from-purple-500/20 to-purple-900/20',
    borderGradient: 'from-purple-500 to-purple-900',
  },
  {
    title: 'Doubt Solving',
    description: 'Get your doubts solved by expert developers',
    icon: '/home-page/key-offerings/doubt-solving.png',
    gradient: 'from-orange-500/20 to-orange-900/20',
    borderGradient: 'from-orange-500 to-orange-900',
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'Well-structured curriculum to master development',
    icon: '/home-page/key-offerings/curriculum.png',
    gradient: 'from-green-500/20 to-green-900/20',
    borderGradient: 'from-green-500 to-green-900',
  },
];

export default function KeyOffering() {
  return (
    <section className="w-full bg-black py-16 px-4 ">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <TitleText>KEY OFFERINGS OF THE PROGRAM</TitleText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="relative rounded-2xl overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${offering.gradient}`}
                style={{
                  maskImage:
                    'radial-gradient(circle at center, white, transparent)',
                }}
              />
              <div
                className={`relative border border-transparent bg-gradient-to-br ${offering.borderGradient} rounded-2xl p-[1px]`}
              >
                <Card className="relative bg-black/50 backdrop-blur-sm p-6 rounded-2xl border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12">
                      <img
                        src={offering.icon}
                        alt={offering.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        {offering.title}
                      </h3>
                      <p className="text-gray-400">{offering.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
