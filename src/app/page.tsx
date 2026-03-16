'use client';

import { useState, useCallback } from 'react';
import { AppPhase, RoundSize, SocialIssue } from '@/lib/types';
import Landing from '@/components/Landing';
import WorldCupGame from '@/components/worldcup/WorldCupGame';
import WinnerReveal from '@/components/worldcup/WinnerReveal';
import ChatContainer from '@/components/chat/ChatContainer';
import Footer from '@/components/Footer';

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>('landing');
  const [roundSize, setRoundSize] = useState<RoundSize>(32);
  const [winner, setWinner] = useState<SocialIssue | null>(null);

  const handleStart = useCallback((size: RoundSize) => {
    setRoundSize(size);
    setPhase('worldcup');
  }, []);

  const handleWorldCupComplete = useCallback((selected: SocialIssue) => {
    setWinner(selected);
    setPhase('winner');
  }, []);

  const handleStartChat = useCallback(() => {
    setPhase('chat');
  }, []);

  const handleChatComplete = useCallback(() => {
    setPhase('complete');
  }, []);

  const handleRestart = useCallback(() => {
    setPhase('landing');
    setWinner(null);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {phase === 'landing' && <Landing onStart={handleStart} />}

      {phase === 'worldcup' && (
        <WorldCupGame roundSize={roundSize} onComplete={handleWorldCupComplete} />
      )}

      {phase === 'winner' && winner && (
        <WinnerReveal winner={winner} onStartChat={handleStartChat} />
      )}

      {(phase === 'chat' || phase === 'complete') && winner && (
        <ChatContainer
          issue={winner}
          onComplete={handleChatComplete}
          onRestart={handleRestart}
        />
      )}

      {(phase === 'landing' || phase === 'winner') && <Footer />}
    </div>
  );
}
