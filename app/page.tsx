export default function Home(){
  return (
    <main className="container">
      <div className="grid grid-2">
        <div className="card">
          <h2>动态网站 · 必须具备</h2>
          <ul>
            <li>登录与角色（学生/老师/主管）</li>
            <li>数据库（学生画像、应用、任务、文书、匹配结果）</li>
            <li>实时图表：散点图（分数 vs QS）、进度条、环形图</li>
            <li>API：选校匹配、任务更新、文书</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
