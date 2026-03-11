import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const PROJECTS = [
  {
    title: 'EzyKart',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'A scalable full-stack e-commerce platform featuring secure authentication, role-based access control, and a seamless shopping experience. Built with the MERN stack for high performance and maintainability.',
    features: [
      'Secure user authentication using JWT with role-based access for administrators and customers',
      'Dynamic shopping cart and checkout flow powered by React Context API and Redux for state management',
      'RESTful backend APIs with Express.js handling product inventory, order processing, and payment status updates',
      'Responsive, intuitive UI with optimized performance and smooth navigation flows',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Redux'],
    githubUrl: 'https://github.com/Balaji01725',
    accent: true,
  },
  {
    title: 'Restaurant Finder',
    subtitle: 'Restaurant Recommendation System',
    description:
      'A smart restaurant recommendation platform built with the MERN stack. Leverages MongoDB aggregation pipelines and real-time WebSockets to deliver personalized dining suggestions with a mobile-first experience.',
    features: [
      'Smart recommendation engine using MongoDB aggregation pipelines to filter by user preferences, ratings, and reviews',
      'WebSockets integration for real-time booking update notifications, enhancing user engagement',
      'Mobile-first responsive frontend with React.js and CSS3 for accessibility across all screen sizes',
      'Full MERN stack architecture with efficient database querying and RESTful API design',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'WebSockets', 'CSS3'],
    githubUrl: 'https://github.com/Balaji01725',
    accent: false,
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>My Projects</h2>
            <div className="underline-bar" />
            <p>Real-world applications built with the MERN stack — from concept to deployment</p>
          </div>

          <div className="projects__grid">
            {PROJECTS.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </div>

          <div className="projects__github-cta">
            <div className="github-cta-card card">
              <div className="github-cta-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3>More on GitHub</h3>
                <p>Check out my GitHub profile for all repositories, contributions, and code samples.</p>
              </div>
              <a
                href="https://github.com/Balaji01725"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
