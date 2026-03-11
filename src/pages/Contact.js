import React, { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Get In Touch</h2>
            <div className="underline-bar" />
            <p>I'm open to internship opportunities, collaborations, and project discussions</p>
          </div>

          <div className="contact__layout">
            {/* Left info */}
            <div className="contact__info">
              <h3>Let's Connect</h3>
              <p className="contact__intro">
                Whether you have a project idea, an internship opportunity, or just want to say hello —
                I'd love to hear from you. I typically respond within 24 hours.
              </p>

              <div className="contact__channels">
                <a href="mailto:balajimaharajan017@gmail.com" className="contact-channel card">
                  <div className="channel-icon">✉</div>
                  <div>
                    <div className="channel-label">Email</div>
                    <div className="channel-value">balajimaharajan017@gmail.com</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/balaji017" target="_blank" rel="noopener noreferrer" className="contact-channel card">
                  <div className="channel-icon channel-icon--linkedin">in</div>
                  <div>
                    <div className="channel-label">LinkedIn</div>
                    <div className="channel-value">linkedin.com/in/balaji017</div>
                  </div>
                </a>

                <a href="https://github.com/Balaji01725" target="_blank" rel="noopener noreferrer" className="contact-channel card">
                  <div className="channel-icon channel-icon--github">⌥</div>
                  <div>
                    <div className="channel-label">GitHub</div>
                    <div className="channel-value">github.com/Balaji01725</div>
                  </div>
                </a>

                <a href="https://leetcode.com/balaji1725" target="_blank" rel="noopener noreferrer" className="contact-channel card">
                  <div className="channel-icon channel-icon--lc">lc</div>
                  <div>
                    <div className="channel-label">LeetCode</div>
                    <div className="channel-value">leetcode.com/balaji1725</div>
                  </div>
                </a>
              </div>

              <div className="contact__availability">
                <span className="availability-dot" />
                <span>Available for internships and part-time roles</span>
              </div>
            </div>

            {/* Right form */}
            <div className="contact__form-col">
              {submitted ? (
                <div className="contact__success card">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact__form card" onSubmit={handleSubmit} noValidate>
                  <h3>Send a Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? 'input--error' : ''}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? 'input--error' : ''}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here..."
                      value={form.message}
                      onChange={handleChange}
                      className={errors.message ? 'input--error' : ''}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary contact__submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
