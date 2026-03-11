import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="section about-hero">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <div className="underline-bar" />
            <p>Driven by a passion for building things that matter on the web.</p>
          </div>

          <div className="about__summary card">
            <div className="about__summary-icon">👨‍💻</div>
            <p>
              I'm <strong>Balaji Maharajan</strong>, a Computer Science Engineering student at P.S.R Engineering College,
              Sivakasi, graduating in November 2026 with a CGPA of 8.0/10.0. I specialize in full-stack
              development with the MERN stack and have a deep interest in building scalable, performant
              web applications. Beyond coding, I actively sharpen my problem-solving skills on LeetCode
              and continuously learn new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Education</h2>
            <div className="underline-bar" />
          </div>
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__line" />
              <div className="timeline__card card">
                <div className="timeline__header">
                  <div>
                    <h3>Bachelor of Engineering — Computer Science</h3>
                    <div className="timeline__school">P.S.R Engineering College, Sivakasi</div>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__date">Nov 2026</span>
                    <span className="tag tag-gold">CGPA: 8.0 / 10.0</span>
                  </div>
                </div>
                <p>Focused on full-stack development, data structures, algorithms, OOP principles, and database management systems. Active participant in coding contests and technical events.</p>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__dot timeline__dot--past" />
              <div className="timeline__card card">
                <div className="timeline__header">
                  <div>
                    <h3>Higher Secondary Certificate (HSC)</h3>
                    <div className="timeline__school">Sacred Heart Higher Secondary School, Tuticorin</div>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__date">May 2022</span>
                    <span className="tag tag-teal">75%</span>
                  </div>
                </div>
                <p>Completed HSC with a strong foundation in Mathematics and Sciences, which sparked my interest in Computer Science and Engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="section about-internship">
        <div className="container">
          <div className="section-heading">
            <h2>Experience</h2>
            <div className="underline-bar" />
          </div>
          <div className="internship-card card">
            <div className="internship-card__header">
              <div className="internship-card__logo">PS</div>
              <div>
                <h3>Web Development Intern</h3>
                <div className="internship-card__company">Phoenix Softech &nbsp;·&nbsp; Remote</div>
                <div className="internship-card__date">February 2024</div>
              </div>
              <span className="tag tag-green internship-card__badge">Internship</span>
            </div>
            <ul className="internship-card__list">
              <li>Designed and developed responsive web applications using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility across all major platforms and devices.</li>
              <li>Optimized front-end performance through efficient DOM manipulation and asset minification techniques, resulting in significantly faster page load times and better user retention.</li>
              <li>Collaborated with senior developers to implement interactive UI components that improved user engagement and streamlined site navigation flows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Certifications & Achievements</h2>
            <div className="underline-bar" />
          </div>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-card__icon">🏆</div>
              <h3>LeetCode Problem Solving</h3>
              <p>Solved <strong>200+ algorithmic problems</strong> on LeetCode, demonstrating a strong grasp of Data Structures and Algorithms across arrays, trees, graphs, DP, and more.</p>
              <a href="https://leetcode.com/balaji1725" target="_blank" rel="noopener noreferrer" className="achievement-card__link">
                View Profile →
              </a>
            </div>

            <div className="achievement-card card">
              <div className="achievement-card__icon">☕</div>
              <h3>Java for Beginners</h3>
              <p>Certified in Java fundamentals via <strong>Amigoscode</strong>. Covers core Java concepts including OOP, collections, streams, and exception handling.</p>
              <span className="tag tag-orange">Amigoscode</span>
            </div>

            <div className="achievement-card card">
              <div className="achievement-card__icon">🗄️</div>
              <h3>Introduction to MySQL</h3>
              <p>Certified in MySQL fundamentals via <strong>Simplilearn</strong>. Covers relational database design, queries, joins, indexing, and normalization techniques.</p>
              <span className="tag tag-teal">Simplilearn</span>
            </div>

            <div className="achievement-card card">
              <div className="achievement-card__icon">⚙️</div>
              <h3>Performance Optimization</h3>
              <p>Enhanced full-stack project performance by <strong>refactoring legacy code</strong>, resulting in improved maintainability, readability, and runtime efficiency.</p>
              <span className="tag tag-blue">Project Impact</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
