import { approach, projects, stack, EMAIL, GITHUB, LINKEDIN } from './data';

const shot = (name) => `/shots/${name}.webp`;

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="wordmark">Luis Miguel Follero</a>
        <nav aria-label="Primary" className="nav">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="label">Quezon City, Philippines · Open to freelance work</p>
      <h1>I build the internal systems organizations run on.</h1>
      <p className="lede">
        HR and payroll, inventory, helpdesk, reservations. I am a full-stack developer and a BSIT
        student at Bestlink College, and I build most of it with Claude as my coding partner.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href="#work">See the work</a>
        <a className="btn" href={`mailto:${EMAIL}`}>Email me</a>
      </div>
      <figure className="hero-shot">
        <div className="frame">
          <img src={shot('erp-home')} alt="HONOR-ERP home screen with company feed and approvals" width="1440" height="900" />
        </div>
        <figcaption className="label">HONOR-ERP, the company platform I built at HONOR Philippines</figcaption>
      </figure>
    </section>
  );
}

function Approach() {
  return (
    <section className="section wrap" id="approach">
      <div className="section-head">
        <h2>How I work</h2>
        <p className="section-note">
          Most of my recent projects were built with AI as my main coding tool, and Claude is the one
          I use most. I treat it like a very fast pair: I decide what to build, it writes a large
          share of the code, and I am responsible for whether it is right.
        </p>
      </div>
      <ol className="approach">
        {approach.map((a) => (
          <li key={a.title}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Project({ p }) {
  return (
    <article className={`project${p.phone ? ' project-phone' : ''}`}>
      <div className="project-text">
        <p className="label">
          {p.kind}
          {p.ai && <span className="tag">{p.ai}</span>}
        </p>
        <h3>{p.name}</h3>
        <p>{p.blurb}</p>
        {p.points && (
          <ul>
            {p.points.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
        <p className="stack-line">{p.stack}</p>
        {p.link && (
          <a className="text-link" href={p.link.href} target="_blank" rel="noreferrer">
            {p.link.label}
          </a>
        )}
      </div>
      <div className="project-shots">
        {p.shots.map((s) => (
          <div className="frame" key={s.src}>
            <img src={shot(s.src)} alt={s.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="section wrap" id="work">
      <div className="section-head">
        <h2>Work</h2>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <Project key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section wrap" id="stack">
      <div className="section-head">
        <h2>Stack</h2>
      </div>
      <dl className="stack">
        {stack.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <h2>Need a system built?</h2>
      <p className="section-note">
        Tell me what the organization does and what is painful today. I will tell you plainly what
        I can build, and that AI is part of how I build it.
      </p>
      <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <p className="links">
        <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Work />
        <Stack />
        <Contact />
      </main>
      <footer className="wrap footer label">
        <span>Luis Miguel N. Follero · Tandang Sora, Quezon City</span>
        <span>Built with React and Vite</span>
      </footer>
    </>
  );
}
