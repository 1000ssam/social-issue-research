'use client';

import { getRoundName } from '@/lib/bracket';

interface RoundIndicatorProps {
  totalInRound: number;
  currentIndex: number;
}

export default function RoundIndicator({ totalInRound, currentIndex }: RoundIndicatorProps) {
  const roundName = getRoundName(totalInRound * 2);
  const progress = ((currentIndex + 1) / totalInRound) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#171717]">{roundName}</span>
        <span className="text-sm text-[#a3a3a3]">
          {currentIndex + 1} / {totalInRound}
        </span>
      </div>
      <div className="w-full h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#D2886F] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
