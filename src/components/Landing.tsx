'use client';

import { RoundSize, SocialIssue } from '@/lib/types';

interface LandingProps {
  onStart: (round: RoundSize) => void;
  previousWinner?: SocialIssue | null;
  onResume?: () => void;
  onFullReset?: () => void;
}

const ROUNDS: { size: RoundSize; label: string; desc: string }[] = [
  { size: 64, label: '64강', desc: '전체 80개 이슈 중 64개' },
  { size: 32, label: '32강', desc: '32개 이슈로 빠르게' },
  { size: 16, label: '16강', desc: '16개 이슈로 간편하게' },
  { size: 8, label: '8강', desc: '8개 이슈로 초고속' },
];

export default function Landing({ onStart, previousWinner, onResume, onFullReset }: LandingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-lg w-full animate-slide-up">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-medium text-[#171717] mb-2">
            사회문제 탐구 주제 탐색기
          </h1>
          <p className="text-[#525252] font-light leading-relaxed">
            이상형 월드컵으로 관심 이슈를 선택하고,<br />
            AI와 대화하며 나만의 탐구 주제를 만들어보세요.
          </p>
        </div>

        {previousWinner && onResume && (
          <div className="bg-white rounded-2xl border-2 border-[#D2886F] shadow-sm p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{previousWinner.emoji}</span>
              <div>
                <p className="text-xs text-[#D2886F] font-medium">이전에 선택한 주제</p>
                <p className="text-sm font-medium text-[#171717]">{previousWinner.title}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={onResume}
                className="flex-1 py-2.5 rounded-lg bg-[#D2886F] text-white text-sm font-medium transition-all hover:bg-[#C17760] hover:shadow-md"
              >
                이 주제로 계속하기
              </button>
              {onFullReset && (
                <button
                  onClick={onFullReset}
                  className="py-2.5 px-4 rounded-lg border border-[#e5e5e5] text-sm text-[#a3a3a3] font-light transition-all hover:border-[#D2886F] hover:text-[#D2886F]"
                >
                  초기화
                </button>
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-6 mb-6">
          <h2 className="text-sm font-medium text-[#525252] mb-4">
            {previousWinner ? '새로운 주제로 시작하기' : '라운드를 선택하세요'}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {ROUNDS.map(({ size, label, desc }) => (
              <button
                key={size}
                onClick={() => onStart(size)}
                className="p-4 rounded-lg border-2 border-[#e5e5e5] text-left transition-all hover:border-[#D2886F] hover:shadow-md group"
              >
                <span className="text-xl font-medium text-[#171717] group-hover:text-[#D2886F] transition-colors">
                  {label}
                </span>
                <p className="text-xs text-[#a3a3a3] mt-1">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#FDF6F3] rounded-lg p-4 text-sm text-[#525252] font-light">
          <p className="font-medium text-[#D2886F] mb-1">💡 이렇게 진행돼요</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>이상형 월드컵으로 가장 관심 가는 사회 이슈 선택</li>
            <li>AI와 5단계 대화로 구체적인 탐구 주제 도출</li>
            <li>최종 연구 주제를 카드로 정리해서 복사</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
