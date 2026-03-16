import { streamText, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { buildSystemPrompt } from '@/lib/chat-prompt';

export const maxDuration = 30;

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30; // requests per minute
const RATE_WINDOW = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return new Response('Too many requests', { status: 429 });
  }

  const { messages, issueTitle, issueDescription } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: buildSystemPrompt(issueTitle, issueDescription),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
