import { Card, CardContent, CardHeader } from '../ui/card';

export default function OutTeam() {
  const getborderClass = (index: number) => {
    if (index === 0) return 'bottom-right-blue-border';
    if (index === 1) return 'bottom-right-green-border';
    if (index === 2) return 'bottom-right-yellow-border';
    if (index === 3) return 'bottom-right-purple-border';
    return '';
  };

  const getGradientColor = (index: number) => {
    // rgb(16, 13, 40)
    if (index === 0) return 'rgba(16, 13, 40, )'; // dark blue
    if (index === 1) return 'rgba(13, 42, 21, 0.8)'; // dark green
    if (index === 2) return 'rgba(46, 28, 16, 0.8)'; // dark purple/navy
    if (index === 3) return 'rgba(47, 17, 37, 0.8)'; // dark burgundy
    return 'rgba(228, 226, 255, 0.1)';
  };

  return (
    <div className="bg-black text-white py-16 container mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">OUR TEAM</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our dedicated team brings together a wealth of knowledge and practical
          insights from both the academic and professional spheres
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`text-center space-y-3 rounded-lg p-4
               ${getborderClass(index)}
               `}
            >
              <div className="relative overflow-hidden">
                <div
                  className="absolute  rounded-full "
                  style={{
                    height: '400px',
                    width: '400px',
                    background: `radial-gradient(circle at center, ${getGradientColor(index)} 0%, rgba(228,226,255,0) 90%)`,
                    bottom: '-150px',
                    transform: 'rotate(-45deg)',
                  }}
                />
                <div className="aspect-square overflow-hidden rounded-lg p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-4 relative z-10 py-4 ">
                  <h3 className=" text-lg">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/1.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/2.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/3.png',
  },
  {
    name: 'Md Towfiqul Alom',
    role: 'Head of Content',
    image: '/home-page/our-team/4.png',
  },
];
