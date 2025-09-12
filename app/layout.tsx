import "./globals.css";
import React from "react";

export const metadata = {
  title: "优英 · 动态申请平台",
  description: "学生/老师协作 · 智能匹配 · 进度追踪",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header style={{ padding: "12px 24px", background: "#1e293b" }}>
          <nav style={{ display: "flex", gap: "16px" }}>
            <a href="/" style={{ color: "white", fontWeight: "bold" }}>
              优英申请平台
            </a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
