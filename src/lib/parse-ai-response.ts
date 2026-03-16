import { ParsedResponse } from './types';

export function parseAIResponse(text: string): ParsedResponse {
  let stage: number | null = null;
  let options: string[] = [];
  let finalTopic: string | null = null;

  // [STAGE:N]
  const stageMatch = text.match(/\[STAGE:(\d+)\]/);
  if (stageMatch) {
    stage = parseInt(stageMatch[1], 10);
  }

  // [OPTIONS:A|B|C]
  const optionsMatch = text.match(/\[OPTIONS:([^\]]+)\]/);
  if (optionsMatch) {
    options = optionsMatch[1].split('|').map(s => s.trim()).filter(Boolean);
  }

  // [FINAL_TOPIC:주제|질문|근거]
  const finalMatch = text.match(/\[FINAL_TOPIC:([^\]]+)\]/);
  if (finalMatch) {
    finalTopic = finalMatch[1];
  }

  // 태그 제거
  const cleanText = text
    .replace(/\[STAGE:\d+\]\s*/g, '')
    .replace(/\[OPTIONS:[^\]]+\]\s*/g, '')
    .replace(/\[FINAL_TOPIC:[^\]]+\]\s*/g, '')
    .trim();

  return { stage, options, finalTopic, cleanText };
}

export function parseFinalTopic(raw: string): { topic: string; question: string; rationale: string } {
  const parts = raw.split('|').map(s => s.trim());
  return {
    topic: parts[0] || '',
    question: parts[1] || '',
    rationale: parts[2] || '',
  };
}
