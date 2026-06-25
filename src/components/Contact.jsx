import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const data = {
      access_key: "e1539b47-ff64-4533-ab3c-2c0c3b7f177a",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "New message from portfolio website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        onShowToast('Your message has been sent successfully!');
      } else {
        alert('Message not sent. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In <span>Touch</span></h2>

      <div className="grid-2">
        <div className="contact-info">
          <div className="contact-info-card glass">
            <h3>Let's collaborate!</h3>

            <p className="contact-info-intro">
              I am open to talking about freelancing, job opportunities, or brainstorming new open-source project structures. Feel free to reach out.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:a_sahnounehay@estin.dz" className="contact-detail-link">
                    a_sahnounehay@estin.dz
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+2130657304120" className="contact-detail-link">
                    +213 0657304120
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4>My Location</h4>
                  <p className="contact-detail-text">Algéria, Sétif</p>
                </div>
              </div>
            </div>

            <div className="contact-socials-panel">
              <h4>Find me on</h4>
              <div className="contact-socials-row">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn glass" aria-label="GitHub">
                  GitHub
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn glass" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form-card glass" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-control ${errors.name ? 'input-error' : ''}`}
                placeholder="Abdelwadoude"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-control ${errors.email ? 'input-error' : ''}`}
                placeholder="example@domain.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`form-control ${errors.message ? 'input-error' : ''}`}
                placeholder="Hi, I want to discuss a portfolio website development project..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending message...</>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;