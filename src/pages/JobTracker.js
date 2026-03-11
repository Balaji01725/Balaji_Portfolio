import React, { useState, useEffect } from 'react';
import JobRow from '../components/JobRow';
import './JobTracker.css';

const STATUSES = ['All', 'Applied', 'Interview', 'Rejected', 'Selected'];

const EMPTY_JOB = {
  company: '',
  role: '',
  status: 'Applied',
  interviewDate: '',
};

function JobTracker() {
  const [jobs, setJobs] = useState(() => {
    try {
      const stored = localStorage.getItem('balaji_jobs');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState(EMPTY_JOB);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('balaji_jobs', JSON.stringify(jobs));
  }, [jobs]);

  const validate = () => {
    const errs = {};
    if (!formData.company.trim()) errs.company = 'Company name required';
    if (!formData.role.trim()) errs.role = 'Role required';
    return errs;
  };

  const openAddModal = () => {
    setEditingJob(null);
    setFormData(EMPTY_JOB);
    setFormErrors({});
    setShowModal(true);
  };

  const openEditModal = (job) => {
    setEditingJob(job);
    setFormData({
      company: job.company,
      role: job.role,
      status: job.status,
      interviewDate: job.interviewDate || '',
    });
    setFormErrors({});
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSave = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }

    if (editingJob) {
      setJobs((prev) => prev.map((j) =>
        j.id === editingJob.id ? { ...j, ...formData } : j
      ));
    } else {
      const newJob = { ...formData, id: Date.now().toString() };
      setJobs((prev) => [newJob, ...prev]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Remove this application?')) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const filtered = jobs.filter((j) => {
    const matchStatus = filterStatus === 'All' || j.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || j.company.toLowerCase().includes(q) || j.role.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const statusCounts = STATUSES.slice(1).reduce((acc, s) => {
    acc[s] = jobs.filter((j) => j.status === s).length;
    return acc;
  }, {});

  return (
    <div className="tracker-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Job Application Tracker</h2>
            <div className="underline-bar" />
            <p>Track all your job applications, interviews, and outcomes in one place</p>
          </div>

          {/* Stats */}
          <div className="tracker__stats">
            <div className="tracker-stat">
              <span className="tracker-stat__num">{jobs.length}</span>
              <span className="tracker-stat__label">Total</span>
            </div>
            <div className="tracker-stat tracker-stat--applied">
              <span className="tracker-stat__num">{statusCounts.Applied || 0}</span>
              <span className="tracker-stat__label">Applied</span>
            </div>
            <div className="tracker-stat tracker-stat--interview">
              <span className="tracker-stat__num">{statusCounts.Interview || 0}</span>
              <span className="tracker-stat__label">Interview</span>
            </div>
            <div className="tracker-stat tracker-stat--selected">
              <span className="tracker-stat__num">{statusCounts.Selected || 0}</span>
              <span className="tracker-stat__label">Selected</span>
            </div>
            <div className="tracker-stat tracker-stat--rejected">
              <span className="tracker-stat__num">{statusCounts.Rejected || 0}</span>
              <span className="tracker-stat__label">Rejected</span>
            </div>
          </div>

          {/* Controls */}
          <div className="tracker__controls">
            <div className="tracker__search">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search by company or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="tracker__filters">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  className={`filter-btn ${filterStatus === s ? 'filter-btn--active' : ''}`}
                  onClick={() => setFilterStatus(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <button className="btn btn-primary" onClick={openAddModal}>
              + Add Application
            </button>
          </div>

          {/* Table */}
          <div className="tracker__table-wrapper card">
            {filtered.length === 0 ? (
              <div className="tracker__empty">
                <div className="tracker__empty-icon">📋</div>
                <h3>{jobs.length === 0 ? 'No applications yet' : 'No results found'}</h3>
                <p>{jobs.length === 0 ? 'Start tracking your job applications by clicking "Add Application".' : 'Try a different search or filter.'}</p>
                {jobs.length === 0 && (
                  <button className="btn btn-primary" onClick={openAddModal}>Add Your First Application</button>
                )}
              </div>
            ) : (
              <table className="tracker__table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Interview Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job) => (
                    <JobRow key={job.id} job={job} onDelete={handleDelete} onEdit={openEditModal} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <p className="tracker__footer-note">
            📌 Data saved locally in your browser — {jobs.length} application{jobs.length !== 1 ? 's' : ''} stored
          </p>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="modal card">
            <div className="modal__header">
              <h3>{editingJob ? 'Edit Application' : 'Add New Application'}</h3>
              <button className="modal__close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <div className="modal__body">
              <div className="form-group">
                <label>Company Name *</label>
                <input name="company" type="text" placeholder="e.g. Google, Infosys" value={formData.company} onChange={handleFormChange} className={formErrors.company ? 'input--error' : ''} />
                {formErrors.company && <span className="form-error">{formErrors.company}</span>}
              </div>

              <div className="form-group">
                <label>Role Applied *</label>
                <input name="role" type="text" placeholder="e.g. Full Stack Developer Intern" value={formData.role} onChange={handleFormChange} className={formErrors.role ? 'input--error' : ''} />
                {formErrors.role && <span className="form-error">{formErrors.role}</span>}
              </div>

              <div className="form-group">
                <label>Application Status</label>
                <select name="status" value={formData.status} onChange={handleFormChange}>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Selected">Selected</option>
                </select>
              </div>

              <div className="form-group">
                <label>Interview Date (optional)</label>
                <input name="interviewDate" type="date" value={formData.interviewDate} onChange={handleFormChange} />
              </div>
            </div>

            <div className="modal__footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSave}>
                {editingJob ? 'Save Changes' : 'Add Application'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobTracker;
