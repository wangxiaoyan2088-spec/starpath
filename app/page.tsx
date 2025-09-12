import Link from 'next/link';

type Section = { key:string; title:string; idx:string; row:1|2 };

const sections: Section[] = [
  { key:'xingtu',  title:'星途英才', idx:'01', row:1 },
  { key:'benke',   title:'本科',     idx:'02', row:2 },
  { key:'shuoshi', title:'硕士',     idx:'03', row:1 },
  { key:'boshi',   title:'博士',     idx:'04', row:2 },
  { key:'kecheng', title:'课程',     idx:'05', row:1 },
  { key:'daoshi',  title:'导师',     idx:'06', row:2 },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-wrap">
        {sections.map(s => (
          <Link
            key={s.key}
            href={`/login?from=${s.key}`}
            className={`bubble ${s.row === 1 ? 'row1' : 'row2'}`}
          >
            <span className="bubble-title">{s.title}</span>
            <span className="bubble-index">{s.idx}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
