import Image from 'next/image';

export function GradientPill() {
  return (
    <div className="relative sm:w-[175px] sm:h-[50px] w-[120px] h-[35px]">
      {/* Gradient border container */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'linear-gradient(100.53deg, #FF354D 47.08%, #FF6535 57.26%, #2737FF 73.35%, #D798FF 86.79%)',
          padding: '3px',
        }}
      >
        {/* Main container with gradient background and inset shadow */}
        <div
          className="relative w-full h-full rounded-full flex items-center justify-center"
          style={{
            background:
              'linear-gradient(100.53deg, #FF354D 47.08%, #FF6535 57.26%, #2737FF 73.35%, #D798FF 86.79%)',
            boxShadow: '-9px -9px 9.6px 0px rgba(0, 0, 0, 0.25) inset',
          }}
        >
          {/* Center metallic icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center">
            <Image
              src="/home-page/chat-gpt.png"
              alt="Gradient Pill"
              width={200}
              height={200}
            />
          </div>

          {/* Rotated black icon */}
          <div className="absolute right-0 -top-4 w-[40px] h-[40px]  rounded-2xl transform rotate-12 flex items-center justify-center">
            <Image
              src="/home-page/perplexity.png"
              alt="Gradient Pill"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
