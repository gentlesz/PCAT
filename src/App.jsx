import React, { useEffect, useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = '/stuff/11.mp4';

    let minDone = false;
    let videoDone = false;

    const tryComplete = () => {
      if (minDone && videoDone) {
        setProgress(100);
        setTimeout(() => setHiding(true), 400);
        setTimeout(() => setLoaded(true), 1000);
      }
    };

    setTimeout(() => { minDone = true; tryComplete(); }, 1800);

    video.addEventListener('progress', () => {
      if (video.buffered.length > 0 && video.duration) {
        const pct = (video.buffered.end(video.buffered.length - 1) / video.duration) * 100;
        setProgress(Math.min(Math.round(pct), 95));
      }
    });

    video.addEventListener('canplaythrough', () => { videoDone = true; tryComplete(); });
    video.addEventListener('error', () => { videoDone = true; tryComplete(); });

    return () => { video.src = ''; };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <>
      {/* ── Loading screen ── */}
      {!loaded && (
        <div className={`loader ${hiding ? 'loader--hide' : ''}`}>
          <img src="/stuff/Plogo.jpg" alt="PCAT logo" className="loader-logo" />
          <p className="loader-title">PILOTCAT</p>
          <div className="loader-bar-wrap">
            <div className="loader-bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="loader-pct">{progress}%</p>
        </div>
      )}

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#">
            <img src="/stuff/Plogo.jpg" alt="PCAT logo" className="nav-logo" />
            ✈ $PCAT
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#story">Origin</a></li>
              <li><a href="#moment">The Moment</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a></li>
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
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">✈ 35,000 ft · En Route to Austin</p>
              <h1 className="hero-title reveal">PILOT CAT</h1>
              <p className="hero-subtitle reveal">The First Mind-Made Meme</p>
              <p className="hero-sub reveal">
                Created mid-flight by <strong>Noland Arbaugh</strong> — the first
                Neuralink human implant recipient — using only his thoughts.
              </p>
              <blockquote className="quote reveal">
                "Pretty sure this is a first. Not long ago this would have been impossible."
                <cite>— Noland Arbaugh</cite>
              </blockquote>
              <div className="cta-row reveal">
                <a className="btn btn-primary" href="#story">Read the Story</a>
                <a className="btn btn-tweet" href="https://x.com/ModdedQuad/status/1803673635250642987" target="_blank" rel="noreferrer">The Tweet</a>
              </div>
            </div>
            <div className="hero-video reveal">
              <video src="/stuff/11.mp4" autoPlay loop muted playsInline />
            </div>
          </div>
        </section>

        {/* ── 2. Origin + Historic Cat ── */}
        <section id="story" className="story-section">
          <div className="container">
            <p className="story-label reveal">Origin · Historic Cat</p>
            <div className="story-grid">
              <div className="story-paras">
                <p className="story-text reveal">
                  <strong>Noland Arbaugh</strong> was the first human to receive a Neuralink
                  brain-computer interface implant. Paralysed below the shoulders, the
                  N1 chip restored his ability to interact with the digital world using
                  only his mind.
                </p>
                <p className="story-text reveal">
                  On a flight to Austin, he used that implant mid-air — no hands, no
                  keyboard — to create <strong>$PCAT</strong>: the Pilot Cat meme.
                  A cat piloting the plane. A human piloting the future.
                </p>
                <p className="story-text reveal">
                  Doge had a Shiba. Pepe had a frog. $PCAT has the first creature born
                  from a human mind interfaced with a computer at 35,000 feet. That's
                  not just a meme. That's a timestamp on a new era.
                </p>
                <p className="story-text reveal">
                  Most meme coins are built on nothing. Every part of this story is
                  real — the cat, the flight, the Neuralink, the quote. And somehow,
                  it has never had a proper run. No organised community. No real launch.
                  A historic cat, sitting quietly, waiting.
                </p>
              </div>
              <div className="story-video reveal">
                <video src="/stuff/intro.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. The Moment ── */}
        <section id="moment" className="section section-center">
          <div className="container">
            <h2 className="reveal section-heading-big">The Moment</h2>
            <div className="cards-grid">
              <article className="info-card reveal">
                <div className="card-icon">🧠</div>
                <h3>Neuralink Implant</h3>
                <p>
                  The N1 chip interfaces directly with the motor cortex, translating
                  neural intent into digital commands — no physical movement required.
                </p>
              </article>
              <article className="info-card reveal">
                <div className="card-icon">✈</div>
                <h3>Mid-Flight Creation</h3>
                <p>
                  At cruising altitude en route to Austin, Noland used his implant
                  to interact with the internet — a world first at 35,000 ft.
                </p>
              </article>
              <article className="info-card reveal">
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
        <section id="timeline" className="section section-center">
          <div className="container text-block">
            <h2 className="reveal section-heading-big">How It Happened</h2>
            <div className="timeline">
              <div className="tl-item reveal">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>Jan 2024</strong>
                  <p>Noland Arbaugh becomes the first Neuralink human implant recipient.</p>
                </div>
              </div>
              <div className="tl-item reveal">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>In-flight to Austin</strong>
                  <p>Using only neural signals, Noland goes online at cruising altitude.</p>
                </div>
              </div>
              <div className="tl-item reveal">
                <span className="tl-dot accent" />
                <div className="tl-body">
                  <strong>$PCAT is created</strong>
                  <p>"Pretty sure this is a first. Not long ago this would have been impossible."</p>
                </div>
              </div>
              <div className="tl-item reveal">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>The internet reacts</strong>
                  <p>A meme becomes a movement — a symbol of the neural era.</p>
                </div>
              </div>
              <div className="tl-item reveal">
                <span className="tl-dot" />
                <div className="tl-body">
                  <strong>No proper run. Yet.</strong>
                  <p>
                    Despite being one of the most significant cultural moments of the
                    decade, $PCAT has never had its moment on-chain. A historic cat,
                    sitting quietly, waiting.
                  </p>
                </div>
              </div>
            </div>
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
