import React from 'react';
import './JobRow.css';

const STATUS_CONFIG = {
  Applied: { class: 'status--applied', label: 'Applied' },
  Interview: { class: 'status--interview', label: 'Interview' },
  Rejected: { class: 'status--rejected', label: 'Rejected' },
  Selected: { class: 'status--selected', label: 'Selected' },
};

function JobRow({ job, onDelete, onEdit }) {
  const status = STATUS_CONFIG[job.status] || STATUS_CONFIG['Applied'];

  return (
    <tr className="job-row">
      <td className="job-row__company">
        <span className="company-avatar">{job.company.charAt(0).toUpperCase()}</span>
        {job.company}
      </td>
      <td className="job-row__role">{job.role}</td>
      <td>
        <span className={`job-status ${status.class}`}>{status.label}</span>
      </td>
      <td className="job-row__date">
        {job.interviewDate ? new Date(job.interviewDate).toLocaleDateString('en-IN', {
          day: '2-digit', month: 'short', year: 'numeric'
        }) : '—'}
      </td>
      <td className="job-row__actions">
        <button className="action-btn action-btn--edit" onClick={() => onEdit(job)} title="Edit">✎</button>
        <button className="action-btn action-btn--delete" onClick={() => onDelete(job.id)} title="Delete">✕</button>
      </td>
    </tr>
  );
}

export default JobRow;
