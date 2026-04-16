import React from 'react';

const figures = [
  { className: 'f1', accent: '✕ ✕' },
  { className: 'f2', accent: '•' },
  { className: 'f3', accent: '⚠' },
  { className: 'f4 featured', accent: 'PCAT' },
  { className: 'f5', accent: '+' },
  { className: 'f6', accent: 'OFF' },
  { className: 'f7', accent: '◎' }
];

function App() {
  return (
    <div className="page-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <nav className="menu left">
          <a href="#">COLLECTION</a>
          <a href="#">MANIFESTO</a>
          <a href="#">MEMBERS</a>
        </nav>

        <div className="center-icon" aria-hidden="true">
          <span />
          <span />
        </div>

        <nav className="menu right">
          <a href="#">TELEGRAM</a>
        </nav>
      </header>

      <main className="hero">
        <section className="lineup" aria-label="Character lineup">
          {figures.map((figure, index) => (
            <article key={index} className={`figure ${figure.className}`}>
              <div className="head">{figure.accent}</div>
              <div className="torso" />
              <div className="reflection" />
            </article>
          ))}
        </section>

        <section className="title-block">
          <h1>PCAT</h1>
          <div className="glitch-bar" aria-hidden="true" />
          <p>
            A collection of 4,444 unseen.<br />
            No origin.
          </p>

          <div className="cta-row">
            <button type="button">BUY COIN</button>
            <button type="button" className="ghost">
              MINT NFT
            </button>
          </div>
        </section>
      </main>

      <footer className="meta">
        <span>[ DEV NOTE ]</span>
        <span>SCROLL</span>
      </footer>
    </div>
  );
}

export default App;
