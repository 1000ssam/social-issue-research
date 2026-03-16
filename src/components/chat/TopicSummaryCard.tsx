'use client';

import { useState } from 'react';

interface TopicSummaryCardProps {
  topic: string;
  question: string;
  rationale: string;
  onRestart: () => void;
}

export default function TopicSummaryCard({ topic, question, rationale, onRestart }: TopicSummaryCardProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `📋 탐구 주제 요약\n\n주제: ${topic}\n연구 질문: ${question}\n선정 근거: ${rationale}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '나의 탐구 주제',
          text: shareText,
        });
      } catch {
        // 사용자가 공유 취소한 경우 무시
      }
    } else {
      // Web Share API 미지원 시 클립보드 복사로 대체
      handleCopy();
    }
  };

  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="mx-4 my-4 animate-slide-up">
      <div className="bg-white rounded-2xl border-2 border-[#D2886F] shadow-sm p-6">
        <div className="text-center mb-4">
          <span className="text-3xl">🎯</span>
          <h3 className="text-lg font-medium text-[#171717] mt-2">나의 탐구 주제</h3>
        </div>

        <div className="space-y-3 mb-6">
          <div>
            <span className="text-xs font-medium text-[#D2886F]">주제</span>
            <p className="text-sm text-[#171717] font-light mt-0.5">{topic}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-[#D2886F]">연구 질문</span>
            <p className="text-sm text-[#171717] font-light mt-0.5">{question}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-[#D2886F]">선정 근거</span>
            <p className="text-sm text-[#171717] font-light mt-0.5">{rationale}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 rounded-lg bg-[#D2886F] text-white text-sm font-medium transition-all hover:bg-[#C17760] hover:shadow-md"
          >
            {copied ? '✓ 복사 완료!' : '📋 복사'}
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-2.5 rounded-lg border-2 border-[#D2886F] text-[#D2886F] text-sm font-medium transition-all hover:bg-[#D2886F] hover:text-white"
          >
            {canShare ? '📤 공유하기' : '📤 복사해서 공유'}
          </button>
          <button
            onClick={onRestart}
            className="py-2.5 px-3 rounded-lg border border-[#e5e5e5] text-sm text-[#525252] font-light transition-all hover:border-[#D2886F] hover:text-[#D2886F]"
          >
            처음부터
          </button>
        </div>
      </div>
    </div>
  );
}
