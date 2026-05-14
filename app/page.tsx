'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const fadeInRef = useRef<NodeListOf<Element> | null>(null)

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        const event = e as MouseEvent
        const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (target) {
          const element = document.querySelector(target)
          if (element) {
            event.preventDefault()
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">
          HM<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-tag">available for internships</div>
        <h1>
          Harshvardhan<br />
          <span className="dim">Magar</span>
        </h1>
        <p className="hero-desc">
          <strong>Full-stack developer</strong> and 2nd-year CS student at VIT Bhopal. I build real things — not
          tutorials. Two production applications shipped, both live on GitHub.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="https://github.com/Harshvardhan-M" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/harshvardhan-magar-455b16308"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="stat-num">2</span>
            <span className="stat-label">Production Apps</span>
          </div>
          <div>
            <span className="stat-num">85%</span>
            <span className="stat-label">ML Model Accuracy</span>
          </div>
          <div>
            <span className="stat-num">30+</span>
            <span className="stat-label">LeetCode Solved</span>
          </div>
          <div>
            <span className="stat-num">6+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ABOUT */}
      <section id="about">
        <p className="section-tag">// about me</p>
        <h2>Who I am</h2>
        <p className="section-sub">A developer who learns by building, not just studying.</p>

        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I&apos;m a 2nd-year Computer Science student at <strong>VIT Bhopal</strong>. In my first year, instead of
              stopping at coursework, I built two complete applications from scratch — designed, coded, debugged,
              deployed, and documented entirely on my own.
            </p>
            <p>
              I&apos;m comfortable across the full stack: <strong>Python backends with FastAPI</strong>,{' '}
              <strong>React/Next.js frontends</strong>, real ML models with scikit-learn, Supabase for cloud data, and
              GitHub Actions for automated deployments.
            </p>
            <p>
              I&apos;m not going to pretend I know everything — I&apos;m 2 years into a 4-year degree. But I learn fast,
              I move independently, and I don&apos;t stop at the first roadblock. That&apos;s the kind of intern I am.
            </p>
          </div>
          <div className="about-sidebar fade-in fade-in-delay-2">
            <div className="info-card">
              <div className="info-card-label">Location</div>
              <div className="info-card-value">Pune, India</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Education</div>
              <div className="info-card-value">
                B.Tech CSE — VIT Bhopal<br />
                <span style={{ fontSize: '0.82rem', color: 'var(--muted2)', fontWeight: '400' }}>
                  Aug 2024 – May 2028
                </span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Email</div>
              <div className="info-card-value">
                <a href="mailto:harshavardhanmagar0@gmail.com">harshavardhanmagar0@gmail.com</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">GitHub</div>
              <div className="info-card-value">
                <a href="https://github.com/Harshvardhan-M" target="_blank" rel="noopener noreferrer">
                  github.com/Harshvardhan-M
                </a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Status</div>
              <div className="info-card-value" style={{ color: 'var(--accent2)' }}>
                ● Open to internships
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROJECTS */}
      <section id="projects">
        <p className="section-tag">// projects</p>
        <h2>Things I&apos;ve built</h2>
        <p className="section-sub">Both are live. Both are on GitHub. Neither was a tutorial.</p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card fade-in">
            <div className="project-number">01 / 02</div>
            <div className="project-date">Jan 2026 – Mar 2026</div>
            <div className="project-title">Sales Forecast Pro</div>
            <p className="project-desc">
              A full-stack ML forecasting application. Python backend with a trained scikit-learn model, wired to a live
              Next.js frontend — returns predictions in under 2 seconds.
            </p>
            <ul className="project-highlights">
              <li>Trained Linear Regression on 1,000+ records — 85% test accuracy</li>
              <li>Live chart updates via FastAPI REST endpoints — no page reload</li>
              <li>Data validation pipeline catches bad inputs before model inference</li>
              <li>Interactive dashboards for non-technical users</li>
            </ul>
            <div className="project-stack">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">scikit-learn</span>
              <span className="tag">Next.js 16</span>
              <span className="tag">TypeScript</span>
              <span className="tag">pandas</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Harshvardhan-M/sales-forecast_ai" target="_blank" rel="noopener noreferrer" className="project-link">
                ↗ GitHub Repo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card fade-in fade-in-delay-2">
            <div className="project-number">02 / 02</div>
            <div className="project-date">Oct 2025 – Dec 2025</div>
            <div className="project-title">CoolieConnect</div>
            <p className="project-desc">
              A service booking marketplace for 10+ Indian cities. Full auth, payments, real-time database, and
              automated deployments — all in one codebase.
            </p>
            <ul className="project-highlights">
              <li>Stripe payments + Supabase auth/DB/storage integrated end-to-end</li>
              <li>Codebase 40% smaller by replacing custom backend with Supabase BaaS</li>
              <li>40% drop-off reduction through user flow analysis and redesign</li>
              <li>GitHub Actions CI/CD — every push deploys automatically</li>
            </ul>
            <div className="project-stack">
              <span className="tag">React 18</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Supabase</span>
              <span className="tag">Stripe</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Vercel</span>
              <span className="tag">GitHub Actions</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Harshvardhan-M/Coolie-Connect" target="_blank" rel="noopener noreferrer" className="project-link">
                ↗ GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* SKILLS */}
      <section id="skills">
        <p className="section-tag">// skills</p>
        <h2>What I work with</h2>
        <p className="section-sub">Technologies I&apos;ve used in production, not just tutorials.</p>

        <div className="skills-grid">
          <div className="skill-group fade-in">
            <div className="skill-group-title">Languages</div>
            <ul className="skill-list">
              <li>Python</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-group fade-in fade-in-delay-1">
            <div className="skill-group-title">Frontend</div>
            <ul className="skill-list">
              <li>React 18</li>
              <li>Next.js 16</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="skill-group fade-in fade-in-delay-2">
            <div className="skill-group-title">Backend & APIs</div>
            <ul className="skill-list">
              <li>FastAPI</li>
              <li>REST APIs</li>
              <li>Supabase</li>
              <li>Stripe API</li>
            </ul>
          </div>
          <div className="skill-group fade-in fade-in-delay-1">
            <div className="skill-group-title">Data & ML</div>
            <ul className="skill-list">
              <li>scikit-learn</li>
              <li>pandas</li>
              <li>Linear Regression</li>
              <li>Data Preprocessing</li>
            </ul>
          </div>
          <div className="skill-group fade-in fade-in-delay-2">
            <div className="skill-group-title">Tools & DevOps</div>
            <ul className="skill-list">
              <li>Git & GitHub</li>
              <li>GitHub Actions</li>
              <li>Vercel</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className="skill-group fade-in fade-in-delay-3">
            <div className="skill-group-title">CS Fundamentals</div>
            <ul className="skill-list">
              <li>Data Structures & Algorithms</li>
              <li>OOP</li>
              <li>Operating Systems</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-tag">// contact</p>
        <h2>Let&apos;s work together</h2>
        <p className="section-sub" style={{ margin: '0 auto 0' }}>
          I&apos;m open to software engineering internships — remote or Pune-based. If you think I&apos;d be a fit, reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:harshavardhanmagar0@gmail.com" className="btn btn-primary">
            Send me an email →
          </a>
          <a
            href="https://linkedin.com/in/harshvardhan-magar-455b16308"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
          <a href="https://github.com/Harshvardhan-M" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>built by harshvardhan magar · 2026 · vit bhopal</footer>
    </>
  )
}
