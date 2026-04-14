export interface SocialIssue {
  id: number;
  title: string;
  shortDescription: string;
  category: string;
  emoji: string;
  keyFacts: string[];
}

export interface Match {
  a: SocialIssue;
  b: SocialIssue;
}

export type AppPhase = 'landing' | 'worldcup' | 'winner' | 'chat' | 'complete';

export type ChatMode = 'guided' | 'free';

export type RoundSize = 64 | 32 | 16 | 8;

export interface ChatStage {
  stage: number;
  name: string;
}

export interface ParsedResponse {
  stage: number | null;
  options: string[];
  finalTopic: string | null;
  cleanText: string;
}

export interface TopicSummary {
  topic: string;
  question: string;
  rationale: string;
}
