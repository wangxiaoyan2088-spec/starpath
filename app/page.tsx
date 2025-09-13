export default function Home() {
  return (
    <div>
      <div className="fx" />
      <div className="nebula" />
      <div className="wrap">
        <h1>优英 · 动态申请平台</h1>
        <p className="muted">请选择你的服务板块：</p>
        <section className="grid">
          <a className="bubble" href="/student"><div className="cap" /><div className="b-title">星途英才</div></a>
          <a className="bubble" href="/student"><div className="cap" /><div className="b-title">本科申请</div></a>
          <a className="bubble" href="/student"><div className="cap" /><div className="b-title">硕士申请</div></a>
          <a className="bubble" href="/student"><div className="cap" /><div className="b-title">博士申请</div></a>
          <a className="bubble" href="/student"><div className="cap" /><div className="b-title">课程中心</div></a>
          <a className="bubble" href="/teacher"><div className="cap" /><div className="b-title">导师中心</div></a>
        </section>
      </div>
    </div>
  );
}
