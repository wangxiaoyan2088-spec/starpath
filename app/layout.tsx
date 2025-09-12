import './globals.css';
import React from 'react';

export const metadata = {
  title: '优英 · 动态申请平台',
  description: '学生/老师协作、智能匹配、文书生成、进度追踪',
};

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="header">
          <a href="/"><strong>优英 · 申请平台</strong></a>
          <nav style={{ display:'flex', gap:12 }}>
            <a className="btn" href="/student">学生</a>
            <a className="btn" href="/teacher">老师</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
