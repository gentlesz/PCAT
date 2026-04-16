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
              <li><a href="#why">Why It Matters</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="neural-bg" aria-hidden="true">
            <div className="node n1" /><div className="node n2" /><div className="node n3" />
            <div className="node n4" /><div className="node n5" />
            <div className="edge e1" /><div className="edge e2" /><div className="edge e3" />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">✈ 35,000 ft · En Route to Austin</p>
              <h1>
                The First<br /><span>Mind-Made</span><br />Meme
              </h1>
              <p className="hero-sub">
                Created mid-flight by <strong>Noland Arbaugh</strong> — the first
                Neuralink human implant recipient — using only his thoughts.
              </p>
              <blockquote className="quote">
                "Pretty sure this is a first. Not long ago this would have been
                impossible."
                <cite>— Noland Arbaugh</cite>
              </blockquote>
              <div className="cta-row">
                <a className="btn btn-primary" href="#moment">Read the Story</a>
                <a className="btn btn-ghost" href="#community">Join the Community</a>
              </div>
            </div>
            <div className="hero-card">
              <p className="card-tag">Signal Locked · Live</p>
              <div className="flight-row">
                <div className="airport">
                  <span className="iata">???</span>
                  <span className="city">Origin</span>
                </div>
                <div className="flight-path">
                  <span className="dot" />
                  <span className="dash-line" />
                  <span className="plane-emoji">✈</span>
                  <span className="dash-line" />
                  <span className="dot" />
                </div>
                <div className="airport">
                  <span className="iata">AUS</span>
                  <span className="city">Austin, TX</span>
                </div>
              </div>
              <div className="signal-row">
                <div className="signal-item">
                  <span className="signal-label">Interface</span>
                  <span className="signal-value">Neuralink N1</span>
                </div>
                <div className="signal-item">
                  <span className="signal-label">Input</span>
                  <span className="signal-value">Thought only</span>
                </div>
                <div className="signal-item">
                  <span className="signal-label">Result</span>
                  <span className="signal-value">$PCAT born</span>
                </div>
              </div>
              <div className="chip-row">
                <span>🧠 BCI Active</span>
                <span>✈ In-flight</span>
                <span>🐱 History made</span>
              </div>
            </div>
          </div>
        </section>

        <section id="origin" className="section">
          <div className="container">
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

        <section id="moment" className="section section-alt">
          <div className="container cards-grid">
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
                $PCAT — Pilot Cat — emerged as a meme capturing the moment:
                a cat piloting the plane, a human piloting the future with
                nothing but his mind.
              </p>
            </article>
          </div>
        </section>

        <section id="why" className="section">
          <div className="container stat-wrap">
            <h2>Why It Matters</h2>
            <p>
              This wasn't just a meme. It was a proof-of-concept broadcast to
              the world — that the boundary between human thought and digital
              action had been crossed, at altitude, casually, irreversibly.
            </p>
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
            </div>
          </div>
        </section>

        <section id="community" className="section section-alt">
          <div className="container join-box">
            <h2>Join the Neural Era</h2>
            <p>
              $PCAT is more than a meme. It's a timestamp — proof that the
              future arrived mid-flight.
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
