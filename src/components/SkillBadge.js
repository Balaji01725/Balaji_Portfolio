import React from 'react';
import './SkillBadge.css';

const COLOR_MAP = {
  java: 'tag-orange',
  javascript: 'tag-gold',
  html5: 'tag-rose',
  css3: 'tag-blue',
  sql: 'tag-teal',
  'react.js': 'tag-blue',
  'node.js': 'tag-green',
  'express.js': 'tag-teal',
  mongodb: 'tag-green',
  mysql: 'tag-blue',
  git: 'tag-orange',
  github: 'tag-purple',
  'vs code': 'tag-blue',
  postman: 'tag-orange',
  dsa: 'tag-purple',
  oop: 'tag-teal',
  dbms: 'tag-gold',
  'intellij idea': 'tag-purple',
  jwt: 'tag-rose',
  redux: 'tag-purple',
  websockets: 'tag-teal',
  default: 'tag-navy',
};

function SkillBadge({ label, size = 'md' }) {
  const colorClass = COLOR_MAP[label.toLowerCase()] || COLOR_MAP.default;
  return (
    <span className={`skill-badge tag ${colorClass} skill-badge--${size}`}>
      {label}
    </span>
  );
}

export default SkillBadge;
