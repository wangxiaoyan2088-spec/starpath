'use client';

import { useState } from 'react';

type Task = { id: number; title: string; status: '未开始'|'进行中'|'已完成'; percent: number };

const initTasks: Task[] = [
  { id: 1, title: '确定申请方向 - 第一次协商', status: '已完成', percent: 100 },
  { id: 2, title: '选择学校与专业 - 第一次协商', status: '进行中', percent: 60 },
  { id: 3, title: 'PS 初稿', status: '未开始', percent: 0 },
  { id: 4, title: '推荐信 1', status: '未开始', percent: 0 },
];

export default function StudentDashboard(){
  const [tasks, setTasks] = useState<Task[]>(initTasks);

  const toggleProgress = (id:number) => {
    setTasks(prev => prev.map(t => t.id===id ? {
      ...t,
      percent: (t.percent>=100?0:Math.min(100, t.percent+20)),
      status: (t.percent+20>=100 ? '已完成' : (t.percent>0 ? '进行中' : '未开始'))
    } : t));
  };

  return (
    <main className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2>我的工作台</h2>
        <p className="badge">示例数据（未接数据库）</p>
      </div>

      <div className="card" style={{marginBottom:16}}>
        <h3>任务进度</h3>
        <table className="table">
          <thead>
            <tr><th>任务</th><th>状态</th><th>进度</th><th>操作</th></tr>
          </thead>
          <tbody>
          {tasks.map(t=>(
            <tr key={t.id}>
              <td>{t.title}</td>
              <td><span className="badge">{t.status}</span></td>
              <td style={{width:220}}>
                <div className="progress"><span style={{width:`${t.percent}%`}} /></div>
              </td>
              <td><button className="btn" onClick={()=>toggleProgress(t.id)}>+20%</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>资料上传（占位）</h3>
        <p>后续接入存储（如 Supabase Storage）。现在可先用表单占位：</p>
        <form onSubmit={(e)=>{e.preventDefault(); alert('已收到占位上传（未真正存储）')}}>
          <input className="input" type="file" />
          <div style={{height:8}} />
          <button className="btn" type="submit">上传</button>
        </form>
      </div>
    </main>
  );
}
