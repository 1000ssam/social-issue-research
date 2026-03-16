export const APP_VERSION = 'v1.0.0';

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: 'v1.0.0',
    date: '2026-03-16',
    changes: [
      '이상형 월드컵으로 관심 이슈 선택 기능',
      'AI 대화를 통한 5단계 탐구 주제 도출',
      '최종 연구 주제 카드 생성 및 복사',
    ],
  },
];
