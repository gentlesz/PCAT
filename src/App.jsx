import React from 'react';

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#">✈ $PCAT</a>
          <nav>
            <ul className="nav-links">
              <li><a href="#origin">Origin</a></li>
              <li><a href="#moment">The Moment</a></li>
              <li><a href="#historic">Historic Cat</a></li>
              <li><a href="#run">The Run</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>

        {/* ── 1. Hero ── */}
        <section className="hero">
          <div className="neural-bg" aria-hidden="true">
            <div className="node n1" /><div className="node n2" /><div className="node n3" />
            <div className="node n4" /><div className="node n5" />
            <div className="edge e1" /><div className="edge e2" /><div className="edge e3" />
          </div>
          <div className="container hero-copy">
            <p className="eyebrow">✈ 35,000 ft · En Route to Austin</p>
            <h1>The First<br /><span>Mind-Made</span><br />Meme</h1>
            <p className="hero-sub">
              Created mid-flight by <strong>Noland Arbaugh</strong> — the first
              Neuralink human implant recipient — using only his thoughts.
            </p>
            <blockquote className="quote">
              "Pretty sure this is a first. Not long ago this would have been impossible."
              <cite>— Noland Arbaugh</cite>
            </blockquote>
            <div className="cta-row">
              <a className="btn btn-primary" href="#origin">Read the Story</a>
              <a className="btn btn-ghost" href="#run">Join the Community</a>
            </div>
          </div>
        </section>

        {/* ── 2. Origin ── */}
        <section id="origin" className="section">
          <div className="container text-block">
            <h2>Origin Story</h2>
            <p>
              <strong>Noland Arbaugh</strong> became the first person in the world to receive a
              Neuralink brain-computer interface implant. Paralysed below the
              shoulders, Neuralink restored his ability to interact with the
              digital world using only his mind.
            </p>
            <p>
              On a flight to Austin, Texas, Noland did something no human had
              ever done before — he used his Neuralink implant mid-flight to
              create <strong>$PCAT</strong>, the Pilot Cat meme, entirely through neural
              signals. No hands. No keyboard. Just thought and intent, broadcast
              at 35,000 feet.
            </p>
          </div>
        </section>

        {/* ── 3. The Moment — 3 cards ── */}
        <section id="moment" className="section">
          <div className="container">
            <h2>The Moment</h2>
            <div className="cards-grid">
              <article className="info-card">
                <div className="card-icon">🧠</div>
                <h3>Neuralink Implant</h3>
                <p>
                  The N1 chip interfaces directly with the motor cortex, translating
                  neural intent into digital commands — no physical movement required.
                </p>
              </article>
              <article className="info-card">
                <div className="card-icon">✈</div>
                <h3>Mid-Flight Creation</h3>
                <p>
                  At cruising altitude en route to Austin, Noland used his implant
                  to interact with the internet — a world first at 35,000 ft.
                </p>
              </article>
              <article className="info-card">
                <div className="card-icon">🐱</div>
                <h3>Pilot Cat is Born</h3>
                <p>
                  $PCAT emerged as a meme capturing the moment: a cat piloting the
                  plane, a human piloting the future with nothing but his mind.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── 4. Timeline ── */}
        <section className="section">
          <div className="container text-block">
            <h2>How It Happened</h2>
            <div className="timeline">
              <div className="tl-item">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>Jan 2024</strong>
                  <p>Noland Arbaugh becomes the first Neuralink human implant recipient.</p>
                </div>
              </div>
              <div className="tl-item">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>In-flight to Austin</strong>
                  <p>Using only neural signals, Noland goes online at cruising altitude.</p>
                </div>
              </div>
              <div className="tl-item">
                <span className="tl-dot accent" />
                <div className="tl-body">
                  <strong>$PCAT is created</strong>
                  <p>"Pretty sure this is a first. Not long ago this would have been impossible."</p>
                </div>
              </div>
              <div className="tl-item">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>The internet reacts</strong>
                  <p>A meme becomes a movement — a symbol of the neural era.</p>
                </div>
              </div>
              <div className="tl-item">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>No proper run. Yet.</strong>
                  <p>
                    Despite being one of the most significant cultural moments of the
                    decade, $PCAT has never had its moment on-chain. No proper launch.
                    No real community push. A historic cat, sitting quietly, waiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Historic Cat ── */}
        <section id="historic" className="section">
          <div className="container text-block">
            <h2>A Historic Cat</h2>
            <p>
              Every great memecoin needs a reason to exist beyond the ticker.
              $PCAT has one of the strongest in the space — a cat literally
              summoned into existence by a paralysed man's thoughts, mid-air,
              using a chip in his brain, in a moment that made global headlines.
            </p>
            <p>
              Doge had a Shiba. Pepe had a frog. $PCAT has the first creature
              born from a human mind interfaced with a computer at 35,000 feet.
              That's not just a meme. That's a timestamp on the beginning of a
              new era of human capability.
            </p>
            <p>
              Most meme coins are built on nothing. $PCAT is built on one of the
              most documented, verifiable, and genuinely astonishing moments in
              the history of human-computer interaction. The cat exists. The
              flight exists. The Neuralink exists. The quote exists. Every part
              of this story is real — and somehow, the coin has never had its run.
            </p>
          </div>
        </section>

        {/* ── 6. CTA ── */}
        <section id="run" className="section">
          <div className="container join-box">
            <h2>The Run It Never Had</h2>
            <p>
              $PCAT is the most historically grounded memecoin that has never
              been given a fair shot. This is that shot.
            </p>
            <form className="join-form" action="#" method="post">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Stay Updated</button>
            </form>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 $PCAT · Pilot Cat · Created at 35,000 ft by Noland Arbaugh via Neuralink</p>
        </div>
      </footer>
    </>
  );
}

export default App;
