'use client';

import { getRoundName } from '@/lib/bracket';

interface RoundBreakProps {
  nextRoundSize: number;
  onContinue: () => void;
}

export default function RoundBreak({ nextRoundSize, onContinue }: RoundBreakProps) {
  const roundName = getRoundName(nextRoundSize);

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-md w-full text-center animate-bounce-in">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-medium text-[#171717] mb-2">
          {roundName} 진출!
        </h2>
        <p className="text-[#525252] font-light mb-8">
          {nextRoundSize / 2}개의 이슈가 다음 라운드에서 기다리고 있어요
        </p>
        <button
          onClick={onContinue}
          className="px-8 py-3 rounded-lg bg-[#D2886F] text-white font-medium transition-all hover:bg-[#C17760] hover:shadow-md"
        >
          {roundName} 시작하기
        </button>
      </div>
    </div>
  );
}
