'use client';

import { CHAT_STAGES } from '@/lib/constants';

interface StageIndicatorProps {
  currentStage: number;
}

export default function StageIndicator({ currentStage }: StageIndicatorProps) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 px-4 py-3 bg-white border-b border-[#e5e5e5] overflow-x-auto">
      {CHAT_STAGES.map(({ stage, name }) => {
        const isActive = stage === currentStage;
        const isComplete = stage < currentStage;

        return (
          <div key={stage} className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
                isActive
                  ? 'bg-[#D2886F] text-white'
                  : isComplete
                  ? 'bg-[#D2886F]/20 text-[#D2886F]'
                  : 'bg-[#f5f5f5] text-[#a3a3a3]'
              }`}
            >
              {isComplete ? '✓' : stage}
            </div>
            <span
              className={`text-xs whitespace-nowrap ${
                isActive ? 'text-[#D2886F] font-medium' : 'text-[#a3a3a3]'
              }`}
            >
              {name}
            </span>
            {stage < 5 && (
              <div className={`w-4 sm:w-8 h-px ${stage < currentStage ? 'bg-[#D2886F]' : 'bg-[#e5e5e5]'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
