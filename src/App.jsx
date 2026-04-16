import React from 'react';

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="logo" href="#">
          PCAT
        </a>

        <nav className="menu left">
          <a href="#">MANIFESTO</a>
          <a href="#">MEMBERS</a>
          <a href="#">TELEGRAM</a>
        </nav>
      </header>

      <main className="hero-grid">
        <section className="intro-card">
          <p className="kicker">Pilot Cat Transmission</p>
          <h1>PCAT</h1>
          <p className="lead">
            A collection of 4,444 unseen.<br />
            No origin.
          </p>
          <button type="button">BUY COIN</button>
        </section>

        <section className="meta-panel">
          <article>
            <h2>Manifesto</h2>
            <p>
              A culture-native signal from internet lore, built with minimalist
              presence and maximal attitude.
            </p>
          </article>

          <article>
            <h2>Members</h2>
            <p>
              Builders, creators, and meme pilots connecting around one shared
              visual language.
            </p>
          </article>

          <article>
            <h2>Status</h2>
            <p>Live feed active. Scroll for updates and drops.</p>
          </article>
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
