'use client';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl text-sm font-light leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-[#D2886F] text-white rounded-br-md'
            : 'bg-[#f5f5f5] text-[#171717] rounded-bl-md'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
