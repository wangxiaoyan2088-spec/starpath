export default function Home() {
  return (
    <div>
      {/* 装饰层：星尘 + 两层星点 + 云气漂移 */}
      <div className="fx" />
      <div className="nebula" />

      <div className="wrap">
        <header>
          <h1>优英 · 动态申请平台</h1>
          <nav className="nav">
            <a className="btn" href="/student">学生入口</a>
            <a className="btn" href="/teacher">老师入口</a>
          </nav>
        </header>

        <p className="muted">请选择你的服务板块：</p>

        {/* 六个功能按钮 */}
        <section className="grid" aria-label="功能板块">
          {/* 星途英才 */}
          <a className="bubble" href="/student">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#9ad0ff"/><stop offset="1" stopColor="#b798ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g1)" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.7 7.3-2 5.4a2 2 0 0 1-1.2 1.2l-5.4 2 2-5.4a2 2 0 0 1 1.2-1.2l5.4-2zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </div>
            <div className="b-title">星途英才</div>
          </a>

          {/* 本科申请 */}
          <a className="bubble" href="/student">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#a6baff"/><stop offset="1" stopColor="#7fe1ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g2)" d="M4 5a2 2 0 0 1 2-2h10.5A1.5 1.5 0 0 1 18 4.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 .5V18h7.5a.5.5 0 0 0 .5-.5V4.5H7z"/>
              </svg>
            </div>
            <div className="b-title">本科申请</div>
          </a>

          {/* 硕士申请 */}
          <a className="bubble" href="/student">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#b7a8ff"/><stop offset="1" stopColor="#80b7ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g3)" d="M12 3 2 8l10 5 8-4.1V16h2V8L12 3zm0 14-6-3v3l6 3 6-3v-3l-6 3z"/>
              </svg>
            </div>
            <div className="b-title">硕士申请</div>
          </a>

          {/* 博士申请 */}
          <a className="bubble" href="/student">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#87e3ff"/><stop offset="1" stopColor="#d3a6ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g4)" d="M6 3h9a3 3 0 0 1 3 3v11a4 4 0 1 1-8 0H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm7 14a2 2 0 1 0 4 0V6a1 1 0 0 0-1-1h-3v12zM5 7v8a1 1 0 0 0 1 1h6V6H6a1 1 0 0 0-1 1z"/>
              </svg>
            </div>
            <div className="b-title">博士申请</div>
          </a>

          {/* 课程中心 */}
          <a className="bubble" href="/student">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#9ed3ff"/><stop offset="1" stopColor="#9fb0ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g5)" d="M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 1-2-2V5zm16-2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6V3h6z"/>
              </svg>
            </div>
            <div className="b-title">课程中心</div>
          </a>

          {/* 导师中心 */}
          <a className="bubble" href="/teacher">
            <div className="cap" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g6" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#b0a2ff"/><stop offset="1" stopColor="#79d7ff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#g6)" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0H5zm14-11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM5 9a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/>
              </svg>
            </div>
            <div className="b-title">导师中心</div>
          </a>
        </section>

        {/* 登录区（按钮两行） */}
        <section className="cols">
          <div className="card">
            <div className="chip">Portal</div>
            <h2 className="col-title">学生登录</h2>
            <form action="/student" method="get">
              <div className="field">
                <input className="input" placeholder="姓名 / Name" required />
                <input className="input" type="password" placeholder="登录密码 / Password" required />
                <button className="btn btn-2l" type="submit">
                  <span>进入</span><span>工作台</span>
                </button>
              </div>
            </form>
          </div>

          <div className="card">
            <div className="chip">Console</div>
            <h2 className="col-title">老师登录</h2>
            <form action="/teacher" method="get">
              <div className="field">
                <input className="input" placeholder="姓名 / Name" required />
                <input className="input" type="password" placeholder="登录密码 / Password" required />
                <button className="btn btn-2l" type="submit">
                  <span>进入</span><span>总览</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer>© 优英教育 · StarPath</footer>
      </div>
    </div>
  );
}
