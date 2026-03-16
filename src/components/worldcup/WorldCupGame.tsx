'use client';

import { useState, useCallback } from 'react';
import { SocialIssue, Match, RoundSize } from '@/lib/types';
import { createBracket, nextRound } from '@/lib/bracket';
import MatchPair from './MatchPair';
import RoundIndicator from './RoundIndicator';

interface WorldCupGameProps {
  roundSize: RoundSize;
  onComplete: (winner: SocialIssue) => void;
}

export default function WorldCupGame({ roundSize, onComplete }: WorldCupGameProps) {
  const [matches, setMatches] = useState<Match[]>(() => createBracket(roundSize));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [winners, setWinners] = useState<SocialIssue[]>([]);
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = useCallback((winner: SocialIssue) => {
    const newWinners = [...winners, winner];

    if (currentIndex + 1 < matches.length) {
      // 같은 라운드 내 다음 매치
      setWinners(newWinners);
      setCurrentIndex(prev => prev + 1);
      setAnimKey(prev => prev + 1);
    } else if (newWinners.length === 1) {
      // 최종 우승
      onComplete(newWinners[0]);
    } else {
      // 다음 라운드
      const newMatches = nextRound(newWinners);
      setMatches(newMatches);
      setWinners([]);
      setCurrentIndex(0);
      setAnimKey(prev => prev + 1);
    }
  }, [winners, currentIndex, matches, onComplete]);

  const currentMatch = matches[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-[#171717]">
            사회 이슈 이상형 월드컵
          </h2>
          <p className="text-sm text-[#525252] font-light mt-1">
            더 관심 가는 이슈를 선택하세요
          </p>
        </div>

        <RoundIndicator
          totalInRound={matches.length}
          currentIndex={currentIndex}
        />

        <div key={animKey}>
          <MatchPair match={currentMatch} onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
}
