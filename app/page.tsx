import React from "react";
import "./globals.css";

export default function Home() {
  const sections = [
    { title: "星途英才", href: "/login?type=starpath", num: "01" },
    { title: "本科", href: "/login?type=undergraduate", num: "02" },
    { title: "硕士", href: "/login?type=master", num: "03" },
    { title: "博士", href: "/login?type=phd", num: "04" },
    { title: "课程", href: "/login?type=course", num: "05" },
    { title: "导师", href: "/login?type=mentor", num: "06" },
  ];

  return (
    <main className="landing">
      <div className="landing-wrap">
        {sections.map((s, i) => (
          <a key={i} href={s.href} className="bubble">
            <strong>{s.title}</strong>
            <span className="num">{s.num}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
