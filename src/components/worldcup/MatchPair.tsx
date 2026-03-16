'use client';

import { Match, SocialIssue } from '@/lib/types';
import MatchCard from './MatchCard';

interface MatchPairProps {
  match: Match;
  onSelect: (winner: SocialIssue) => void;
}

export default function MatchPair({ match, onSelect }: MatchPairProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch">
      <div className="flex-1">
        <MatchCard issue={match.a} onClick={() => onSelect(match.a)} side="left" />
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-[#a3a3a3] sm:text-2xl">VS</span>
      </div>
      <div className="flex-1">
        <MatchCard issue={match.b} onClick={() => onSelect(match.b)} side="right" />
      </div>
    </div>
  );
}
