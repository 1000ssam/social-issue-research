import { SocialIssue, Match, RoundSize } from './types';
import { ISSUES } from './issues';

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 카테고리 분산 매칭: 같은 카테고리끼리 1라운드 충돌 최소화 */
function disperseByCategory(issues: SocialIssue[]): SocialIssue[] {
  const groups = new Map<string, SocialIssue[]>();
  for (const issue of issues) {
    const g = groups.get(issue.category) ?? [];
    g.push(issue);
    groups.set(issue.category, g);
  }

  // 각 그룹을 셔플
  for (const [key, val] of groups) {
    groups.set(key, shuffle(val));
  }

  // 라운드 로빈으로 분산 배치
  const result: SocialIssue[] = [];
  const keys = shuffle([...groups.keys()]);
  let added = true;
  while (added) {
    added = false;
    for (const key of keys) {
      const g = groups.get(key)!;
      if (g.length > 0) {
        result.push(g.shift()!);
        added = true;
      }
    }
  }

  return result;
}

/** 라운드 크기에 맞춰 이슈를 선택하고 매치 배열 생성 */
export function createBracket(roundSize: RoundSize): Match[] {
  const shuffled = shuffle(ISSUES);
  const selected = shuffled.slice(0, roundSize);
  const dispersed = disperseByCategory(selected);

  const matches: Match[] = [];
  for (let i = 0; i < dispersed.length; i += 2) {
    matches.push({ a: dispersed[i], b: dispersed[i + 1] });
  }
  return matches;
}

/** 승자들로 다음 라운드 매치 생성 */
export function nextRound(winners: SocialIssue[]): Match[] {
  const matches: Match[] = [];
  for (let i = 0; i < winners.length; i += 2) {
    matches.push({ a: winners[i], b: winners[i + 1] });
  }
  return matches;
}

export function getRoundName(count: number): string {
  if (count === 2) return '결승';
  if (count === 4) return '준결승';
  return `${count}강`;
}
