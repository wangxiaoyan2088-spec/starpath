'use client';

import { useMemo, useState } from 'react';

type Status = '未开始' | '进行中' | '已完成';

type Task = {
  id: string;
  title: string;
  status: Status;
  percent: number;          // 0 / 50 / 100（或任意 0-100）
  owner?: string;           // 负责人
  dueDate?: string;         // YYYY-MM-DD
  hours?: number;           // 工时
};

const OWNERS = ['侯蒙蒙','李静文','张凡','史梦诺','靳梦雅','王晓燕'];

const initialTasks: Task[] = [
  { id:'t01', title:'合同扫描',                  status:'已完成', percent:100, owner:'侯蒙蒙' },
  { id:'t02', title:'缴费凭证',                  status:'已完成', percent:100, owner:'侯蒙蒙' },
  { id:'t03', title:'申请',                      status:'进行中', percent:50,  owner:'侯蒙蒙' },
  { id:'t04', title:'确定申请方向 - 第一次协商',  status:'已完成', percent:100, owner:'李静文' },
  { id:'t05', title:'确定申请方向 - 第二次协商',  status:'已完成', percent:100, owner:'李静文' },
  { id:'t06', title:'确定申请方向 - 第三次协商',  status:'已完成', percent:100, owner:'靳梦雅' },
  { id:'t07', title:'选校与专业 - 第一次协商',    status:'进行中', percent:50,  owner:'史梦诺' },
  { id:'t08', title:'选校与专业 - 第二次协商',    status:'未开始', percent:0,   owner:'王晓燕' },
  { id:'t09', title:'选校与专业 - 第三次协商',    status:'未开始', percent:0,   owner:'王晓燕' },
  { id:'t10', title:'核对申请要求 - 第一次核对',  status:'进行中', percent:50,  owner:'侯蒙蒙' },
  { id:'t11', title:'核对申请要求 - 第二次核对',  status:'未开始', percent:0,   owner:'侯蒙蒙' },
  { id:'t12', title:'核对申请要求 - 第三次核对',  status:'未开始', percent:0,   owner:'侯蒙蒙' },
  { id:'t13', title:'推荐信 1',                  status:'未开始', percent:0 },
  { id:'t14', title:'推荐信 2',                  status:'未开始', percent:0 },
  { id:'t15', title:'Activities List',          status:'未开始', percent:0 },
  { id:'t16', title:'PS 初稿',                   status:'已完成', percent:100 },
  { id:'t17', title:'PS 润色稿',                 status:'进行中', percent:50 },
  { id:'t18', title:'PS 终稿',                   status:'未开始', percent:0 },
  { id:'t19', title:'CV(简历)',                  status:'已完成', percent:100, dueDate:'2025-08-28' },
  { id:'t20', title:'成绩单',                    status:'已完成', percent:100 },
  { id:'t21', title:'毕业证/在读证明',            status:'未开始', percent:0 },
  { id:'t22', title:'Supplemental Essays',      status:'未开始', percent:0 },
  { id:'t23', title:'Portfolio',                status:'未开始', percent:0 },
  { id:'t24', title:'补充科研',                  status:'未开始', percent:0 },
  { id:'t25', title:'补充实习',                  status:'未开始', percent:0 }
];

const statusToPercent = (s: Status) => s==='未开始'?0:(s==='进行中'?50:100);

export default function StudentBoard(){
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // 小进度条颜色
  const barColor = (p:number) => p>=100 ? 'linear-gradient(90deg,#16a34a,#22c55e)' 
                          : p>0 ? 'linear-gradient(90deg,#60a5fa,#22d3ee)'
                                : 'rgba(255,255,255,.25)';

  const setStatus = (id:string, value:Status) => {
    setTasks(prev => prev.map(t => t.id===id ? {...t, status:value, percent:statusToPercent(value)} : t));
  };
  const setOwner = (id:string, owner:string) => {
    setTasks(prev => prev.map(t => t.id===id ? {...t, owner} : t));
  };
  const setDue = (id:string, date:string) => {
    setTasks(prev => prev.map(t => t.id===id ? {...t, dueDate:date} : t));
  };
  const setHours = (id:string, hours:string) => {
    const v = hours===''? undefined : Math.max(0, Number(hours));
    setTasks(prev => prev.map(t => t.id===id ? {...t, hours:v} : t));
  };

  const overall = useMemo(()=>{
    if (!tasks.length) return 0;
    const sum = tasks.reduce((acc,t)=>acc + (t.percent||0), 0);
    return Math.round(sum / tasks.length);
  },[tasks]);

  return (
    <main className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2>学生申请 · 工作台</h2>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span className="badge">示例数据（稍后接 Supabase）</span>
          <div className="progress" style={{width:220}}><span style={{width:`${overall}%`}}/></div>
          <span>{overall}% 总体进度</span>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th style={{width:280}}>任务</th>
              <th style={{width:110}}>状态</th>
              <th style={{width:160}}>进度</th>
              <th style={{width:130}}>负责人</th>
              <th style={{width:140}}>截止日期</th>
              <th style={{width:120}}>耗用工时</th>
              <th style={{width:110}}>进入表单</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(t=>(
              <tr key={t.id}>
                <td>{t.title}</td>

                <td>
                  <select className="input" value={t.status}
                          onChange={e=>setStatus(t.id, e.target.value as Status)}>
                    <option>未开始</option>
                    <option>进行中</option>
                    <option>已完成</option>
                  </select>
                </td>

                <td>
                  <div className="progress" style={{height:8}}>
                    <span style={{width:`${t.percent}%`, background:barColor(t.percent)}}/>
                  </div>
                </td>

                <td>
                  <select className="input" value={t.owner ?? ''}
                          onChange={e=>setOwner(t.id, e.target.value)}>
                    <option value="">未指定</option>
                    {OWNERS.map(o=> <option key={o} value={o}>{o}</option>)}
                  </select>
                </td>

                <td>
                  <input className="input" type="date" value={t.dueDate ?? ''}
                         onChange={e=>setDue(t.id, e.target.value)} />
                </td>

                <td>
                  <input className="input" type="number" min={0} step={0.5}
                         value={t.hours ?? ''} placeholder="小时"
                         onChange={e=>setHours(t.id, e.target.value)} />
                </td>

                <td>
                  <a className="btn" href={`/student/tasks/${t.id}`}>进入</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
