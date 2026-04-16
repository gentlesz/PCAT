import React from 'react';

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="menu left">
          <a href="#">MANIFESTO</a>
          <a href="#">MEMBERS</a>
        </nav>

        <nav className="menu right">
          <a href="#">TELEGRAM</a>
        </nav>
      </header>

      <main className="hero">
        <section className="title-block">
          <h1>PCAT</h1>
          <div className="glitch-bar" aria-hidden="true" />
          <p>
            A collection of 4,444 unseen.<br />
            No origin.
          </p>

          <div className="cta-row">
            <button type="button">BUY COIN</button>
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
