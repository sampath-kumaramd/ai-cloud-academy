'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function GradientButton({
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        'bg-[linear-gradient(148.14deg,#0F1225_16.91%,#020411_80.84%)]',
        'shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]',
        'relative p-[2px] rounded-xl text-base sm:text-lg md:text-xl font-medium text-white transition-all hover:scale-105',
        'bg-gradient-to-r from-[#FF1558] to-[#3920DF]',
        className
      )}
      {...props}
    >
      <span className="block whitespace-nowrap rounded-xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-[linear-gradient(148.14deg,#0F1225_16.91%,#020411_80.84%)]">
        {children}
      </span>
    </button>
  );
}
