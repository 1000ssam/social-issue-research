'use client';

interface OptionButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
  onContinueChat: () => void;
  disabled?: boolean;
}

export default function OptionButtons({ options, onSelect, onContinueChat, disabled }: OptionButtonsProps) {
  if (options.length === 0) return null;

  return (
    <div className="animate-slide-up space-y-3">
      <div className="flex flex-wrap gap-2">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelect(option)}
            disabled={disabled}
            className="px-4 py-2 text-sm rounded-lg border-2 border-[#D2886F] text-[#D2886F] font-light transition-all hover:bg-[#D2886F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={onContinueChat}
        disabled={disabled}
        className="flex items-center gap-1.5 text-xs text-[#a3a3a3] font-light transition-colors hover:text-[#D2886F] disabled:opacity-50"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1.75C4.1 1.75 1.75 4.1 1.75 7s2.35 5.25 5.25 5.25c1.05 0 2.03-.31 2.85-.84L12.25 12.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.25 6.5h3.5M5.25 8.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        좀 더 이야기하고 싶어요
      </button>
    </div>
  );
}
