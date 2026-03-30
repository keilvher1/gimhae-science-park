import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김해사이언스일반산업단지 | 분양안내",
  description: "김해사이언스일반산업단지 분양 - 절토 기반 안정적 지반, 부산권 대비 합리적 분양가, 책임준공 기반, 물류 접근성 우수",
  keywords: "김해산업단지, 사이언스파크, 산업단지분양, 김해분양, 공장부지, 산업용지",
  openGraph: {
    title: "김해사이언스일반산업단지 | 분양안내",
    description: "4차 산업혁명을 선도하는 김해사이언스일반산업단지 분양",
    type: "website",
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
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
