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
      className={`w-full p-5 rounded-xl border-2 border-[#e5e5e5] bg-white transition-all hover:border-[#D2886F] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-left group ${
        side === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
    >
      <div className="text-3xl mb-2">{issue.emoji}</div>
      <h3 className="text-base font-medium text-[#171717] group-hover:text-[#D2886F] transition-colors mb-1">
        {issue.title}
      </h3>
      <p className="text-sm text-[#525252] font-light mb-3">{issue.shortDescription}</p>

      <ul className="space-y-1">
        {issue.keyFacts.map((fact, i) => (
          <li key={i} className="text-xs text-[#737373] font-light flex gap-1.5 leading-relaxed">
            <span className="text-[#D2886F] shrink-0 mt-0.5">•</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>

      <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-[#f5f5f5] text-[#a3a3a3]">
        {issue.category}
      </span>
    </button>
  );
}
