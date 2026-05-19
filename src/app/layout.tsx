import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "好安颐 | AI 智慧健康与安全守护系统",
  description: "以心电智能感知为入口，连接老人、子女与机构，提供健康监测、风险预警、远程守护与安全支持的一体化解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
