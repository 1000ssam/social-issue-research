'use client';

import { useRef, useEffect, KeyboardEvent } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({ value, onChange, onSubmit, disabled, placeholder }: ChatInputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${Math.min(ref.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSubmit();
      }
    }
  };

  return (
    <div className="flex gap-2 p-4 border-t border-[#e5e5e5] bg-white">
      <textarea
        ref={ref}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder ?? '메시지를 입력하세요...'}
        rows={1}
        className="flex-1 resize-none rounded-lg border border-[#e5e5e5] px-3 py-2 text-sm font-light placeholder:text-[#a3a3a3] focus:border-[#D2886F] focus:ring-1 focus:ring-[#D2886F] focus:outline-none disabled:opacity-50 disabled:bg-[#f5f5f5]"
      />
      <button
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
        className="px-4 py-2 rounded-lg bg-[#D2886F] text-white text-sm font-medium transition-all hover:bg-[#C17760] hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
      >
        전송
      </button>
    </div>
  );
}
