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
    if (!name || !pwd) { alert('请填写姓名与密码'); return; }
    // 先做演示跳转；后续换成真实鉴权
    router.push(role === 'student' ? '/student' : '/teacher');
  };

  return (
    <main className="container" style={{maxWidth:520}}>
      <div className="card" style={{marginTop:24}}>
        <h2>登录</h2>
        <p className="muted">来源：{from}</p>

        <div className="tabs">
          <button type="button" className={`tab ${role==='student'?'active':''}`} onClick={()=>setRole('student')}>学生</button>
          <button type="button" className={`tab ${role==='teacher'?'active':''}`} onClick={()=>setRole('teacher')}>老师</button>
        </div>

        <form className="form" onSubmit={submit}>
          <label>姓名
            <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="请输入姓名" />
          </label>
          <label>登录密码
            <input className="input" type="password" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="请输入密码" />
          </label>
          <button className="btn" type="submit" style={{width:'100%'}}>进入{role==='student'?'学生':'老师'}页面</button>
        </form>
      </div>
    </main>
  );
}
