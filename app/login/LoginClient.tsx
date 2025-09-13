// app/login/LoginClient.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const searchParams = useSearchParams();
  // 如果暂时不用参数，这行也可以先不写：const from = searchParams.get("from");

  return (
    <div className="wrap">
      <h1>登录</h1>
      {/* 把你原来 /login 页的 JSX 内容放到这里 */}
    </div>
  );
}
