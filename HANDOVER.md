# HANDOVER — 사회문제 탐구 주제 탐색기

## 프로젝트 위치
- 로컬: `C:\dev\social-issue-research\`
- GitHub: `1000ssam/social-issue-research` (private, main branch)
- 프로덕션: https://social-issue-research.vercel.app
- Vercel 프로젝트: `1000s-projects-a51f0c2a/social-issue-research`

## 기술 스택
- Next.js 16.1.6 (App Router, Turbopack) / React 19 / TypeScript
- Tailwind CSS 4 (1000ssam 디자인 시스템, `#D2886F` accent)
- Vercel AI SDK v6 (`ai@6.0.116`, `@ai-sdk/react@3.0.118`, `@ai-sdk/google`)
- 모델: `gemini-3.1-flash-lite-preview` (Gemini API)
- DB/인증 없음, 클라이언트 완결형

## AI SDK v6 핵심 주의사항
이 프로젝트는 AI SDK **v6**을 사용함. v4/v5와 크게 다르므로 주의:

1. **`useChat` 반환값**: `input`/`setInput` 없음 → 직접 `useState`로 관리
2. **`sendMessage({ text: '...' })`** 사용 (v5의 `append` 아님)
3. **`status`** 사용 (`'submitted' | 'streaming' | 'ready' | 'error'`), `isLoading` 직접 없음
4. **Transport 패턴**: `useChat`에 `api` 직접 전달 불가 → `DefaultChatTransport({ api, body })` 사용
5. **UIMessage vs ModelMessage**: 클라이언트는 UIMessage(`parts` 배열), 서버 route에서 `convertToModelMessages()`로 변환 필요
6. **`toUIMessageStreamResponse()`**: route.ts에서 반환 (v5의 `toDataStreamResponse` 아님)
7. **`onFinish({ message })`**: 구조 분해 필요, `message.parts`로 접근 (`content` 아님)

## 현재 상태
- 전체 플로우 동작 확인: 랜딩 → 이상형 월드컵(80개 이슈) → AI 5단계 대화 → 최종 주제 카드
- sessionStorage로 상태 복구 (winner 유지, 월드컵 중간은 landing 폴백)
- Web Share API 공유 버튼 (모바일 카톡 공유 가능)
- NavBar 전역 네비게이션
- 이전 주제로 계속하기 기능

## 파일 구조 요약
```
src/app/page.tsx              — 앱 상태 머신 + sessionStorage
src/app/api/chat/route.ts     — Gemini 스트리밍 + rate limit
src/lib/issues.ts             — 80개 이슈 (10카테고리 + 트렌드·밈)
src/lib/bracket.ts            — 셔플 + 카테고리 분산 매칭
src/lib/chat-prompt.ts        — 5단계 소크라테스식 시스템 프롬프트
src/lib/parse-ai-response.ts  — [STAGE:N], [OPTIONS:...], [FINAL_TOPIC:...] 파싱
src/components/NavBar.tsx     — 전역 네비게이션 (처음으로)
src/components/worldcup/      — 이상형 월드컵 UI (5개 컴포넌트)
src/components/chat/          — AI 채팅 UI (6개 컴포넌트)
```

## 환경변수
- `GOOGLE_GENERATIVE_AI_API_KEY` — Vercel Production + Development에 설정됨
- 로컬: `.env.local`에 설정

## 미완료 / 후속 과제
1. **보안 점검** — 기능 완성 시점이므로 `security-audit` 스킬 실행 필요
2. **채팅 대화 내역 sessionStorage 저장** — 현재는 winner만 유지, 채팅 메시지는 새로고침 시 리셋
3. **OG 이미지 미리보기 확인** — metadataBase 경고 해결 (실제 도메인 설정)
4. **모바일 테스트** — 실기기 테스트 필요 (DevTools만 확인)

## 커밋 히스토리
1. `5e52de1` — 초기 구현
2. `392bc7b` — keyFacts, 라운드 브레이크, 트렌드·밈 카테고리
3. `ad5eb2d` — 전역 네비게이션 바
4. `95ab905` — Web Share API 공유
5. `7e837e6` — UIMessage→ModelMessage 변환 수정
6. `e6feed0` — Gemini 모델명 수정 + sessionStorage
7. `97943d2` — gemini-3.1-flash-lite-preview로 모델 확정
8. `3cfdd66` — 이전 주제 유지 + 계속하기 버튼
