'use client';

import { useState, useCallback, useEffect } from 'react';
import { AppPhase, RoundSize, SocialIssue } from '@/lib/types';
import Landing from '@/components/Landing';
import WorldCupGame from '@/components/worldcup/WorldCupGame';
import WinnerReveal from '@/components/worldcup/WinnerReveal';
import ChatContainer from '@/components/chat/ChatContainer';
import Footer from '@/components/Footer';

const SESSION_KEY = 'social-issue-research-state';

interface SessionState {
  phase: AppPhase;
  roundSize: RoundSize;
  winner: SocialIssue | null;
}

function loadSession(): SessionState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSession(state: SessionState) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    // sessionStorage full or unavailable
  }
}

function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>('landing');
  const [roundSize, setRoundSize] = useState<RoundSize>(32);
  const [winner, setWinner] = useState<SocialIssue | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // 세션 복구
  useEffect(() => {
    const saved = loadSession();
    if (saved) {
      // 월드컵 중간은 복구 불가 → landing으로 (winner 유지)
      if (saved.phase === 'worldcup') {
        setPhase('landing');
        setWinner(saved.winner);
      } else {
        setPhase(saved.phase);
        setRoundSize(saved.roundSize);
        setWinner(saved.winner);
      }
    }
    setHydrated(true);
  }, []);

  // 상태 변경 시 세션 저장
  useEffect(() => {
    if (!hydrated) return;
    if (phase === 'landing' && !winner) {
      clearSession();
    } else {
      saveSession({ phase, roundSize, winner });
    }
  }, [phase, roundSize, winner, hydrated]);

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
    // winner는 유지 → 랜딩에서 "이전 주제로 계속" 표시용
  }, []);

  const handleFullReset = useCallback(() => {
    setPhase('landing');
    setWinner(null);
    clearSession();
  }, []);

  if (!hydrated) return null;

  return (
    <div className="min-h-screen bg-white">
      {phase === 'landing' && (
        <Landing
          onStart={handleStart}
          previousWinner={winner}
          onResume={() => { setPhase('chat'); }}
          onFullReset={winner ? handleFullReset : undefined}
        />
      )}

      {phase === 'worldcup' && (
        <WorldCupGame roundSize={roundSize} onComplete={handleWorldCupComplete} onHome={handleRestart} />
      )}

      {phase === 'winner' && winner && (
        <WinnerReveal winner={winner} onStartChat={handleStartChat} onHome={handleRestart} />
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
