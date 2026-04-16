import React from 'react';

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#">
            ✈ PCAT
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#routes">Routes</a></li>
              <li><a href="#book">Book</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="runway-lines" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Premium Aviation Experience</p>
              <h1>
                Fly <span>Higher</span><br />with PCAT Air
              </h1>
              <p>
                Next-generation aviation — where cutting-edge aircraft design
                meets unmatched comfort for every journey.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#book">Book a Flight</a>
                <a className="btn btn-ghost" href="#fleet">View Fleet</a>
              </div>
            </div>
            <div className="hero-card" aria-label="Flight status card">
              <p className="card-tag">Live Status</p>
              <div className="flight-info">
                <div className="airport">
                  <span className="iata">JFK</span>
                  <span className="city">New York</span>
                </div>
                <div className="flight-path">
                  <span className="dot" />
                  <span className="line" />
                  <span className="plane-icon">✈</span>
                  <span className="line" />
                  <span className="dot" />
                </div>
                <div className="airport">
                  <span className="iata">LHR</span>
                  <span className="city">London</span>
                </div>
              </div>
              <div className="status-list">
                <span>🟢 On Time</span>
                <span>⏱ 7h 20m</span>
                <span>🛫 FL380</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About PCAT Air</h2>
            <p>
              PCAT Air is a next-generation airline concept built around
              passenger experience, fuel-efficient aircraft, and precision
              routing. We connect major hubs and hidden destinations with
              reliability and style.
            </p>
          </div>
        </section>

        <section id="fleet" className="section section-alt">
          <div className="container">
            <h2>Our Fleet</h2>
            <div className="cards-grid">
              <article className="info-card">
                <div className="aircraft-icon">✈</div>
                <h3>PCAT-900X</h3>
                <p>
                  Wide-body long-haul flagship. 350 seats, twin-aisle comfort,
                  and a range of 9,000 nm on a single tank.
                </p>
              </article>
              <article className="info-card">
                <div className="aircraft-icon">🛩</div>
                <h3>PCAT-500S</h3>
                <p>
                  Narrow-body regional workhorse. Fast turnarounds, 180 seats,
                  perfect for short to medium routes.
                </p>
              </article>
              <article className="info-card">
                <div className="aircraft-icon">🚀</div>
                <h3>PCAT-X1 Concept</h3>
                <p>
                  Our supersonic future. Mach 1.4 cruise, carbon-neutral fuel,
                  and a seat count of 60 for premium travelers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="routes" className="section">
          <div className="container stat-wrap">
            <h2>Network Coverage</h2>
            <p>Destinations served across six continents and growing.</p>
            <div className="stats-row">
              <div className="stat">
                <span className="stat-num">120+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat">
                <span className="stat-num">48</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat">
                <span className="stat-num">99.2%</span>
                <span className="stat-label">On-time Rate</span>
              </div>
              <div className="stat">
                <span className="stat-num">6</span>
                <span className="stat-label">Continents</span>
              </div>
            </div>
            <div className="altitude-meter">
              <p className="meter-label">Fleet utilisation</p>
              <div className="meter" role="img" aria-label="Fleet utilisation 92%">
                <div className="meter-fill" style={{ width: "92%" }} />
              </div>
              <p className="score">92% — peak efficiency</p>
            </div>
          </div>
        </section>

        <section id="book" className="section section-alt">
          <div className="container join-box">
            <h2>Book Your Flight</h2>
            <p>Enter your email and we'll send you our best fares and departure alerts.</p>
            <form className="join-form" action="#" method="post">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Get Fares</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 PCAT Air. All rights reserved. Safe skies ahead.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
