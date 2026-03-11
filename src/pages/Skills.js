import React from 'react';
import SkillBadge from '../components/SkillBadge';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    desc: 'Core programming languages I work with',
    skills: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: '⚛',
    desc: 'Frontend and backend frameworks for building applications',
    skills: ['React.js', 'Node.js', 'Express.js'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄',
    desc: 'Relational and NoSQL database systems',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    icon: '🛠',
    desc: 'Tools and platforms I use in my development workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'IntelliJ IDEA'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    icon: '🧠',
    desc: 'Computer science fundamentals and software engineering principles',
    skills: ['DSA', 'OOP', 'DBMS'],
  },
];

const PROFICIENCY = [
  { skill: 'React.js', level: 85 },
  { skill: 'JavaScript', level: 88 },
  { skill: 'Node.js', level: 80 },
  { skill: 'MongoDB', level: 78 },
  { skill: 'Java', level: 82 },
  { skill: 'MySQL', level: 75 },
  { skill: 'HTML5 / CSS3', level: 92 },
  { skill: 'Git / GitHub', level: 80 },
];

function ProficiencyBar({ skill, level }) {
  return (
    <div className="prof-bar">
      <div className="prof-bar__label">
        <span>{skill}</span>
        <span className="prof-bar__pct">{level}%</span>
      </div>
      <div className="prof-bar__track">
        <div className="prof-bar__fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Technical Skills</h2>
            <div className="underline-bar" />
            <p>A comprehensive overview of the technologies and tools in my toolkit</p>
          </div>

          <div className="skills__categories">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id} className="skill-category card">
                <div className="skill-category__header">
                  <div className="skill-category__icon">{cat.icon}</div>
                  <div>
                    <h3>{cat.label}</h3>
                    <p>{cat.desc}</p>
                  </div>
                </div>
                <div className="skill-category__badges">
                  {cat.skills.map((s) => (
                    <SkillBadge key={s} label={s} size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency bars */}
      <section className="section skills-proficiency">
        <div className="container">
          <div className="section-heading">
            <h2>Proficiency Levels</h2>
            <div className="underline-bar" />
            <p>Self-assessed proficiency based on project experience and study</p>
          </div>

          <div className="proficiency-grid">
            {PROFICIENCY.map((item) => (
              <ProficiencyBar key={item.skill} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* LeetCode callout */}
      <section className="section-sm">
        <div className="container">
          <div className="leetcode-callout card">
            <div className="leetcode-callout__left">
              <div className="leetcode-callout__num">200+</div>
              <div className="leetcode-callout__label">Problems Solved</div>
            </div>
            <div className="leetcode-callout__divider" />
            <div className="leetcode-callout__body">
              <h3>LeetCode Problem Solving</h3>
              <p>
                Consistent practice on LeetCode covering arrays, strings, linked lists, trees, graphs,
                dynamic programming, sliding window, and two-pointer patterns. Actively improving
                algorithmic thinking and time/space complexity analysis.
              </p>
            </div>
            <a
              href="https://leetcode.com/balaji1725"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              View LeetCode →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
