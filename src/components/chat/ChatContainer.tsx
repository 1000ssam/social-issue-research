'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useEffect, useRef, useMemo } from 'react';
import { SocialIssue } from '@/lib/types';
import { parseAIResponse, parseFinalTopic } from '@/lib/parse-ai-response';
import StageIndicator from './StageIndicator';
import MessageBubble from './MessageBubble';
import OptionButtons from './OptionButtons';
import ChatInput from './ChatInput';
import TopicSummaryCard from './TopicSummaryCard';
import NavBar from '@/components/NavBar';

interface ChatContainerProps {
  issue: SocialIssue;
  onComplete: () => void;
  onRestart: () => void;
}

export default function ChatContainer({ issue, onComplete, onRestart }: ChatContainerProps) {
  const [currentStage, setCurrentStage] = useState(1);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [finalTopic, setFinalTopic] = useState<{ topic: string; question: string; rationale: string } | null>(null);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  const transport = useMemo(() => new DefaultChatTransport({
    api: '/api/chat',
    body: {
      issueTitle: issue.title,
      issueDescription: issue.shortDescription,
    },
  }), [issue.title, issue.shortDescription]);

  const { messages, sendMessage, regenerate, status, error } = useChat({
    transport,
    onFinish({ message }) {
      const text = message.parts.filter(p => p.type === 'text').map(p => (p as { text: string }).text).join('');
      const parsed = parseAIResponse(text);
      if (parsed.stage) setCurrentStage(parsed.stage);
      if (parsed.options.length > 0) setCurrentOptions(parsed.options);
      else setCurrentOptions([]);
      if (parsed.finalTopic) {
        const ft = parseFinalTopic(parsed.finalTopic);
        setFinalTopic(ft);
        onComplete();
      }
    },
    onError() {
      // error state handled via `error` prop
    },
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  // 1단계 자동 시작
  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    sendMessage({
      text: `저는 "${issue.title}" 주제에 관심이 있어요. 탐구 주제를 정하는 걸 도와주세요.`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    setCurrentOptions([]);
    sendMessage({ text: input });
    setInput('');
  };

  const handleOptionSelect = (option: string) => {
    if (isLoading) return;
    setCurrentOptions([]);
    sendMessage({ text: option });
  };

  // 메시지에서 태그 제거한 텍스트
  const getCleanText = (parts: Array<{ type: string; text?: string }>) => {
    const raw = parts.filter(p => p.type === 'text').map(p => p.text ?? '').join('');
    return parseAIResponse(raw).cleanText;
  };

  // 첫 번째 메시지(자동 전송) 이후만 표시
  const displayMessages = useMemo(() => messages.filter((_, i) => i > 0), [messages]);

  return (
    <div className="h-dvh flex flex-col max-w-2xl mx-auto">
      {/* 네비게이션 + 헤더 */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#e5e5e5]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#f5f5f5]">
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-sm text-[#525252] font-light transition-colors hover:text-[#D2886F]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M8 2L2 7.5V14h4.5v-3.5h3V14H14V7.5L8 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            처음으로
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg">{issue.emoji}</span>
            <span className="text-xs text-[#a3a3a3] font-light">{issue.title}</span>
          </div>
        </div>
        <StageIndicator currentStage={currentStage} />
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {displayMessages.map((msg) => (
          <MessageBubble
            key={msg.id}
            role={msg.role as 'user' | 'assistant'}
            content={getCleanText(msg.parts as Array<{ type: string; text?: string }>)}
          />
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-[#f5f5f5] rounded-2xl rounded-bl-md px-4 py-3 text-sm text-[#a3a3a3]">
              생각하고 있어요...
            </div>
          </div>
        )}

        {!isLoading && currentOptions.length > 0 && !finalTopic && (
          <OptionButtons options={currentOptions} onSelect={handleOptionSelect} disabled={isLoading} />
        )}

        {error && (
          <div className="flex justify-center">
            <div className="bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm">
              오류가 발생했습니다.
              <button onClick={() => regenerate()} className="ml-2 underline">
                재시도
              </button>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 최종 주제 카드 */}
      {finalTopic && (
        <TopicSummaryCard
          topic={finalTopic.topic}
          question={finalTopic.question}
          rationale={finalTopic.rationale}
          onRestart={onRestart}
        />
      )}

      {/* 입력 */}
      {!finalTopic && (
        <ChatInput
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          disabled={isLoading}
        />
      )}
    </div>
  );
}
