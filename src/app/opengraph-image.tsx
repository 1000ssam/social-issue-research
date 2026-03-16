import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '사회문제 탐구 주제 탐색기';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FDF6F3 0%, #FFFFFF 50%, #FDF6F3 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🔍</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: '#171717',
            marginBottom: 16,
          }}
        >
          사회문제 탐구 주제 탐색기
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#525252',
            fontWeight: 300,
          }}
        >
          이상형 월드컵 + AI 대화로 나만의 탐구 주제 만들기
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#D2886F',
            }}
          />
          <span style={{ fontSize: 18, color: '#a3a3a3', fontWeight: 300 }}>
            1000쌤
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
