interface GlowCircleProps {
  className?: string;
  size?: string;
  color?: string;
}

export function GlowCircle({
  className = '',
  size = '600px',
  color = 'rgba(147, 51, 234, 0.35)', // Purple default
}: GlowCircleProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
        filter: 'blur(60px)',
      }}
    />
  );
}
