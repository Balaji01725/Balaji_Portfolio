import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__initials">BM</span>
            <div>
              <div className="footer__name">Balaji Maharajan</div>
              <div className="footer__role">Full-Stack MERN Developer</div>
            </div>
          </div>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/job-tracker">Job Tracker</Link>
          </div>
          <div className="footer__social">
            <a href="https://linkedin.com/in/balaji" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href="https://github.com/Balaji01725" target="_blank" rel="noopener noreferrer" title="GitHub">gh</a>
            <a href="https://leetcode.com/balaji1725" target="_blank" rel="noopener noreferrer" title="LeetCode">lc</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {year} Balaji Maharajan. Built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
