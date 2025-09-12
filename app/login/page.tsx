'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const from = useSearchParams().get('from') ?? 'home';
  const [role, setRole] = useState<'student'|'teacher'>('student');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !pwd) { alert('请填写姓名和密码'); return; }
    // TODO: 这里将来换成真实鉴权（Supabase / 自建后端）
    if (role === 'student') router.push('/student');
    else router.push('/teacher');
  };

  return (
    <main className="container" style={{maxWidth: 520}}>
      <div className="card" style={{marginTop: 24}}>
        <h2>登录</h2>
        <p className="muted">来源：{from}</p>

        <div className="tabs">
          <button
            className={`tab ${role==='student' ? 'active' : ''}`}
            onClick={()=>setRole('student')}
            type="button"
          >学生</button>
          <button
            className={`tab ${role==='teacher' ? 'active' : ''}`}
            onClick={()=>setRole('teacher')}
            type="button"
          >老师</button>
        </div>

        <form onSubmit={submit} className="form">
          <label>姓名
            <input
              className="input"
              placeholder={role==='student'?'请输入学生姓名':'请输入老师姓名'}
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </label>

          <label>登录密码
            <input
              className="input"
              type="password"
              placeholder="请输入密码"
              value={pwd}
              onChange={e=>setPwd(e.target.value)}
            />
          </label>

          <button className="btn" type="submit" style={{width:'100%'}}>进入{role==='student'?'学生':'老师'}页面</button>
        </form>

        <p className="muted" style={{marginTop:12}}>
          还没有账号？可先使用演示密码：<code>demo123</code>（仅前端示例）
        </p>
      </div>
    </main>
  );
}
