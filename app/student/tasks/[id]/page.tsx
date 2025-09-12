'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TaskForm(){
  const { id } = useParams<{id:string}>();
  const router = useRouter();
  const [note, setNote] = useState('');
  const [fileName, setFileName] = useState<string|undefined>();

  return (
    <main className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2>任务表单 · {id}</h2>
        <p className="badge">占位页：后续对接存储/数据库</p>
      </div>

      <div className="card" style={{display:'grid', gap:12, maxWidth:560}}>
        <label>上传文件（PDF/Doc/图片）
          <input className="input" type="file" onChange={(e)=>{
            const f = e.target.files?.[0];
            setFileName(f ? f.name : undefined);
          }} />
        </label>

        {fileName && <p>已选择：{fileName}</p>}

        <label>备注 / 进展说明
          <textarea className="input" rows={4} value={note} onChange={e=>setNote(e.target.value)} />
        </label>

        <div style={{display:'flex', gap:12}}>
          <button className="btn" onClick={()=>{ alert('已暂存（示例，未真正保存）'); }}>
            暂存
          </button>
          <button className="btn" onClick={()=>{ alert('模拟提交成功'); router.push('/student'); }}>
            提交并返回
          </button>
        </div>
      </div>
    </main>
  );
}
