'use client';

interface NavBarProps {
  onHome: () => void;
  title?: string;
}

export default function NavBar({ onHome, title }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-2.5">
        <button
          onClick={onHome}
          className="flex items-center gap-1.5 text-sm text-[#525252] font-light transition-colors hover:text-[#D2886F]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M8 2L2 7.5V14h4.5v-3.5h3V14H14V7.5L8 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          처음으로
        </button>
        {title && (
          <span className="text-xs text-[#a3a3a3] font-light truncate ml-4">{title}</span>
        )}
      </div>
    </nav>
  );
}
