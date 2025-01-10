interface TimelineIndicatorProps {
  number: number;
  isLast?: boolean;
}

export function TimelineIndicator({
  number,
  isLast = false,
}: TimelineIndicatorProps) {
  return (
    <div className="relative flex items-start pt-4">
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-gradient-to-b from-white via-white/80 to-white/50 text-sm font-medium text-black font-bold">
        {number}
      </div>
      {!isLast && (
        <div className="absolute left-4 top-12 h-[calc(100%-24px)] w-[1px] bg-white/10" />
      )}
    </div>
  );
}
