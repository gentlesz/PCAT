function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#">
            PCAT
          </a>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#highlights">Highlights</a>
              </li>
              <li>
                <a href="#memeability">Memeability</a>
              </li>
              <li>
                <a href="#join">Join</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Neural Era Meme Aesthetic</p>
              <h1>
                Pilot Cat <span>PCAT</span>
              </h1>
              <p>
                A web concept celebrating the crossover of futuristic tech,
                internet culture, and iconic cat-energy.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#join">
                  Explore Community
                </a>
                <a className="btn btn-ghost" href="#about">
                  Read Story
                </a>
              </div>
            </div>
            <div className="hero-card" aria-label="Pilot Cat feature card">
              <p className="card-tag">Signal Locked</p>
              <h2>Mind → Meme → Movement</h2>
              <p>
                Built for speed, remix culture, and the next-gen narrative layer
                of the internet.
              </p>
              <div className="status-list">
                <span>⚡ Viral-ready</span>
                <span>🛰️ Story-driven</span>
                <span>🐾 Cat-certified</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About PCAT</h2>
            <p>
              PCAT is a landing-page design mockup for a meme-native brand. It
              blends a sci-fi UI style with clear messaging so fans, creators,
              and curious newcomers can understand the idea in seconds.
            </p>
          </div>
        </section>

        <section id="highlights" className="section section-alt">
          <div className="container cards-grid">
            <article className="info-card">
              <h3>Strong Origin Story</h3>
              <p>
                A memorable narrative foundation makes the concept instantly
                recognizable across social platforms.
              </p>
            </article>
            <article className="info-card">
              <h3>Visual Identity</h3>
              <p>
                Neon gradients, motion cues, and space-inspired UI keep the
                brand modern and remix-friendly.
              </p>
            </article>
            <article className="info-card">
              <h3>Community Focus</h3>
              <p>
                Designed to support creators, meme artists, and builders through
                a single clear home page.
              </p>
            </article>
          </div>
        </section>

        <section id="memeability" className="section">
          <div className="container stat-wrap">
            <h2>Memeability Meter</h2>
            <p>
              A playful indicator of how shareable the concept feels in culture.
            </p>
            <div
              className="meter"
              role="img"
              aria-label="Memeability score 85 out of 100"
            >
              <div className="meter-fill"></div>
            </div>
            <p className="score">85 / 100 — high remix potential</p>
          </div>
        </section>

        <section id="join" className="section section-alt">
          <div className="container join-box">
            <h2>Join the Crew</h2>
            <p>Stay updated on drops, ideas, and visual experiments.</p>
            <form className="join-form" action="#" method="post">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 PCAT. Concept landing page design.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
