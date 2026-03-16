'use client';

import { RoundSize, SocialIssue } from '@/lib/types';

interface LandingProps {
  onStart: (round: RoundSize) => void;
  previousWinner?: SocialIssue | null;
  onResume?: () => void;
  onFullReset?: () => void;
}

const ROUNDS: { size: RoundSize; label: string; desc: string; time: string }[] = [
  { size: 64, label: '64강', desc: '80개 중 64개', time: '~10분' },
  { size: 32, label: '32강', desc: '32개 이슈', time: '~5분' },
  { size: 16, label: '16강', desc: '16개 이슈', time: '~3분' },
  { size: 8, label: '8강', desc: '8개 이슈', time: '~1분' },
];

export default function Landing({ onStart, previousWinner, onResume, onFullReset }: LandingProps) {
  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* 헤더 — 컴팩트 */}
        <div className="text-center mb-5">
          <h1 className="text-xl sm:text-2xl font-medium text-[#171717] mb-1.5">
            🔍 사회문제 탐구 주제 탐색기
          </h1>
          <p className="text-sm text-[#525252] font-light">
            이상형 월드컵 + AI 대화로 나만의 탐구 주제 만들기
          </p>
        </div>

        {/* 이전 주제 — 컴팩트 인라인 */}
        {previousWinner && onResume && (
          <button
            onClick={onResume}
            className="w-full flex items-center gap-3 p-3 mb-4 rounded-xl border-2 border-[#D2886F] bg-[#FDF6F3] text-left transition-all hover:shadow-md active:scale-[0.98]"
          >
            <span className="text-2xl shrink-0">{previousWinner.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#D2886F] font-medium">이전 주제로 계속하기</p>
              <p className="text-sm text-[#171717] font-medium truncate">{previousWinner.title}</p>
            </div>
            <span className="text-[#D2886F] text-lg shrink-0">→</span>
          </button>
        )}

        {/* 라운드 선택 */}
        <div className="mb-4">
          {previousWinner && (
            <p className="text-xs text-[#a3a3a3] font-light mb-2 text-center">또는 새로운 주제 찾기</p>
          )}
          <div className="grid grid-cols-4 gap-2">
            {ROUNDS.map(({ size, label, time }) => (
              <button
                key={size}
                onClick={() => onStart(size)}
                className="py-3 rounded-xl border border-[#e5e5e5] text-center transition-all hover:border-[#D2886F] hover:shadow-md active:scale-[0.97] group"
              >
                <span className="text-lg font-medium text-[#171717] group-hover:text-[#D2886F] transition-colors block">
                  {label}
                </span>
                <span className="text-[10px] text-[#a3a3a3] block mt-0.5">{time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 안내 — 간결하게 */}
        <div className="rounded-xl bg-[#f9f9f9] p-3 text-xs text-[#737373] font-light">
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <span className="text-base block mb-0.5">🏆</span>
              이슈 월드컵
            </div>
            <div className="text-[#D2886F]">→</div>
            <div className="text-center">
              <span className="text-base block mb-0.5">💬</span>
              AI 대화 5단계
            </div>
            <div className="text-[#D2886F]">→</div>
            <div className="text-center">
              <span className="text-base block mb-0.5">🎯</span>
              탐구 주제 완성
            </div>
          </div>
        </div>

        {/* 초기화 버튼 — 캐시 있을 때만 */}
        {previousWinner && onFullReset && (
          <button
            onClick={onFullReset}
            className="mt-3 text-xs text-[#a3a3a3] font-light mx-auto block hover:text-[#D2886F] transition-colors"
          >
            이전 기록 초기화
          </button>
        )}
      </div>
    </div>
  );
}
