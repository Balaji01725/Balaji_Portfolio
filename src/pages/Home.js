import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/balaji.jpeg';
import SkillBadge from '../components/SkillBadge';
import './Home.css';

const QUICK_SKILLS = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java'];

function Home() {
  return (
    <div className="home">
      {/* ── Hero ────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-pattern" aria-hidden />
        <div className="container">
          <div className="hero__inner">
            <div className="hero__text">
              <div className="hero__greeting">Hello, I'm</div>
              <h1 className="hero__name">Balaji Maharajan</h1>
              <div className="hero__role">Full-Stack MERN Developer <span>|</span> CSE Student</div>
              <p className="hero__bio">
                Motivated Computer Science Engineering student with a robust foundation in
                full-stack web development and algorithm design. Proficient in building
                scalable applications using the MERN stack, with a keen eye for
                performance optimization and user experience.
              </p>
              <div className="hero__skills">
                {QUICK_SKILLS.map((s) => <SkillBadge key={s} label={s} size="sm" />)}
              </div>
              <div className="hero__cta">
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <Link to="/resume" className="btn btn-outline">Download Resume</Link>
                <Link to="/job-tracker" className="btn btn-gold">Job Tracker</Link>
              </div>
              <div className="hero__stats">
                <div className="stat">
                  <span className="stat__num">200+</span>
                  <span className="stat__label">LeetCode Problems</span>
                </div>
                <div className="stat__divider" />
                <div className="stat">
                  <span className="stat__num">2</span>
                  <span className="stat__label">Projects Built</span>
                </div>
                <div className="stat__divider" />
                <div className="stat">
                  <span className="stat__num">8.0</span>
                  <span className="stat__label">CGPA</span>
                </div>
              </div>
            </div>

            <div className="hero__photo-col">
              <div className="hero__photo-wrapper">
                <div className="hero__photo-ring" />
                <img src={photo} alt="Balaji Maharajan" className="hero__photo" />
                <div className="hero__photo-badge">
                  <span>CSE</span>
                  <span className="badge-year">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Links ─────────────────────────── */}
      <section className="social-strip">
        <div className="container">
          <div className="social-strip__inner">
            <a href="mailto:balajimaharajan017@gmail.com" className="social-item">
              <span className="social-icon">✉</span>
              <span>balajimaharajan017@gmail.com</span>
            </a>
            <a href="https://github.com/Balaji01725" target="_blank" rel="noopener noreferrer" className="social-item">
              <span className="social-icon">⌥</span>
              <span>github.com/Balaji01725</span>
            </a>
            <a href="https://www.linkedin.com/in/balaji017/" target="_blank" rel="noopener noreferrer" className="social-item">
              <span className="social-icon">in</span>
              <span>linkedin.com/in/balaji017</span>
            </a>
            <a href="https://leetcode.com/balaji1725" target="_blank" rel="noopener noreferrer" className="social-item">
              <span className="social-icon">lc</span>
              <span>leetcode.com/balaji1725</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Highlights ─────────────────────── */}
      <section className="section highlights">
        <div className="container">
          <div className="section-heading">
            <h2>What I Bring</h2>
            <div className="underline-bar" />
            <p>A snapshot of my capabilities and what I can contribute to your team</p>
          </div>
          <div className="highlights__grid">
            {[
              { icon: '⚡', title: 'MERN Stack', desc: 'End-to-end web apps with MongoDB, Express, React & Node.js — from database design to polished UI.' },
              { icon: '🧩', title: 'Algorithm Design', desc: '200+ LeetCode problems solved. Strong foundation in Data Structures, Algorithms, and OOP.' },
              { icon: '🎨', title: 'Responsive UI', desc: 'Mobile-first, accessible interfaces with smooth interactions and performance-optimized assets.' },
              { icon: '🔐', title: 'Auth & APIs', desc: 'RESTful API development, JWT authentication, role-based access control, and state management.' },
            ].map((item) => (
              <div key={item.title} className="highlight-card card">
                <div className="highlight-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
