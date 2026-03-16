import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "사회문제 탐구 주제 탐색기",
  description: "이상형 월드컵으로 관심 이슈를 선택하고, AI와 대화하며 나만의 탐구 주제를 만들어보세요.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "사회문제 탐구 주제 탐색기",
    description: "이상형 월드컵으로 관심 이슈를 선택하고, AI와 대화하며 나만의 탐구 주제를 만들어보세요.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "사회문제 탐구 주제 탐색기",
    description: "이상형 월드컵으로 관심 이슈를 선택하고, AI와 대화하며 나만의 탐구 주제를 만들어보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
