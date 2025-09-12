'use client';

type StudentRow = {
  id: string; name: string; grade: string;
  target: string; overall: number; owner: string;
};

const rows: StudentRow[] = [
  { id:'S001', name:'李明', grade:'大四', target:'CS / 美国', overall:72, owner:'王老师' },
  { id:'S002', name:'王芳', grade:'研一', target:'DS / 英国', overall:45, owner:'张老师' },
  { id:'S003', name:'陈雨', grade:'大三', target:'商科 / 美国', overall:18, owner:'王老师' },
];

export default function TeacherOverview(){
  return (
    <main className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2>老师总览</h2>
        <p className="badge">示例数据（未接数据库/权限）</p>
      </div>

      <div className="card">
        <h3>全体学生进度</h3>
        <table className="table">
          <thead>
            <tr><th>ID</th><th>姓名</th><th>年级</th><th>目标</th><th>总体进度</th><th>负责人</th><th>进入</th></tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.grade}</td>
                <td>{r.target}</td>
                <td style={{width:220}}>
                  <div className="progress"><span style={{width:`${r.overall}%`}}/></div>
                </td>
                <td>{r.owner}</td>
                <td><a className="btn" href={`/student?id=${r.id}`}>查看</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
