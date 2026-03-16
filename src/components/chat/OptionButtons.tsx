'use client';

interface OptionButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export default function OptionButtons({ options, onSelect, disabled }: OptionButtonsProps) {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 animate-slide-up">
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
  );
}
