'use client';

import { SocialIssue } from '@/lib/types';

interface MatchCardProps {
  issue: SocialIssue;
  onClick: () => void;
  side: 'left' | 'right';
}

export default function MatchCard({ issue, onClick, side }: MatchCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl border-2 border-[#e5e5e5] bg-white transition-all hover:border-[#D2886F] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-left group ${
        side === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
    >
      <div className="text-3xl mb-3">{issue.emoji}</div>
      <h3 className="text-lg font-medium text-[#171717] group-hover:text-[#D2886F] transition-colors mb-1">
        {issue.title}
      </h3>
      <p className="text-sm text-[#525252] font-light">{issue.shortDescription}</p>
      <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-[#f5f5f5] text-[#a3a3a3]">
        {issue.category}
      </span>
    </button>
  );
}
