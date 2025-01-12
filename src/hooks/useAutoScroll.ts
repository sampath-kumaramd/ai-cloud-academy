import { useEffect, useState } from 'react';

export const useAutoScroll = (itemCount: number, interval = 3000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval]);

  return activeIndex;
};
