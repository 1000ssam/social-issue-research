'use client';

import { SocialIssue } from '@/lib/types';
import NavBar from '@/components/NavBar';

interface WinnerRevealProps {
  winner: SocialIssue;
  onStartChat: () => void;
  onHome: () => void;
}

export default function WinnerReveal({ winner, onStartChat, onHome }: WinnerRevealProps) {
  return (
    <>
      <NavBar onHome={onHome} />
      <div className="min-h-[calc(100vh-45px)] flex items-center justify-center py-6 px-4">
        <div className="max-w-md w-full text-center animate-bounce-in">
          <div className="text-6xl mb-4">{winner.emoji}</div>
          <p className="text-sm text-[#D2886F] font-medium mb-2">🏆 최종 선택</p>
          <h2 className="text-2xl font-medium text-[#171717] mb-2">{winner.title}</h2>
          <p className="text-[#525252] font-light mb-1">{winner.shortDescription}</p>
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#f5f5f5] text-[#a3a3a3] mb-8">
            {winner.category}
          </span>

          <div className="space-y-3">
            <button
              onClick={onStartChat}
              className="w-full py-3 px-6 rounded-lg bg-[#D2886F] text-white font-medium transition-all hover:bg-[#C17760] hover:shadow-md"
            >
              이 주제로 탐구 시작하기
            </button>
            <p className="text-xs text-[#a3a3a3]">
              AI와 대화하며 구체적인 연구 질문을 만들어봐요
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
