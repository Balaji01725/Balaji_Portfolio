import React from 'react';
import resumePdf from '../assets/Balaji_Resume.pdf';
import './Resume.css';

const HIGHLIGHTS = [
  { label: 'Degree', value: 'B.E. Computer Science Engineering' },
  { label: 'University', value: 'P.S.R Engineering College, Sivakasi' },
  { label: 'CGPA', value: '8.0 / 10.0' },
  { label: 'Graduation', value: 'November 2026' },
  { label: 'Internship', value: 'Web Dev Intern @ Phoenix Softech' },
  { label: 'LeetCode', value: '200+ Problems Solved' },
];

function Resume() {
  return (
    <div className="resume-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>My Resume</h2>
            <div className="underline-bar" />
            <p>Download my full resume to learn more about my background and experience</p>
          </div>

          <div className="resume__layout">
            {/* Left: summary cards */}
            <div className="resume__sidebar">
              <div className="resume__profile card">
                <div className="resume__avatar">BM</div>
                <h3>Balaji Maharajan</h3>
                <p className="resume__role-label">Full-Stack MERN Developer</p>
                <p className="resume__university">P.S.R Engineering College</p>

                <a href={resumePdf} download="Balaji_Maharajan_Resume.pdf" className="btn btn-primary resume__download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume (PDF)
                </a>

                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline resume__view-btn">
                  Open in Browser →
                </a>
              </div>

              <div className="resume__highlights card">
                <h4>Quick Facts</h4>
                {HIGHLIGHTS.map(({ label, value }) => (
                  <div key={label} className="resume__fact">
                    <span className="resume__fact-label">{label}</span>
                    <span className="resume__fact-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: preview */}
            <div className="resume__preview-col">
              <div className="resume__preview-header">
                <span>Resume Preview</span>
                <a href={resumePdf} download="Balaji_Maharajan_Resume.pdf" className="btn btn-gold btn-sm">
                  ⬇ Download
                </a>
              </div>
              <div className="resume__pdf-viewer">
                <iframe
                  src={`${resumePdf}#view=FitH`}
                  title="Balaji Maharajan Resume"
                  className="resume__iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
