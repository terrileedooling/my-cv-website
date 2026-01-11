import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

    if (state.succeeded) {
        return (
            <section className="contact-form-section">
                <div className="card success-card">
                    <div className="success-icon">
                        <FaCheckCircle />
                    </div>
                    <h2>Message Sent Successfully!</h2>
                    <p>
                        Thank you for reaching out. I'll get back to you as soon as possible.
                        Usually within 24-48 hours.
                    </p>
                    <div className="success-details">
                        <p><strong>Next Steps:</strong></p>
                        <ul>
                            <li>Check your email for a confirmation</li>
                            <li>Add terrileedooling@gmail.com to your contacts</li>
                            <li>Keep an eye on your inbox for my response</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="contact-form-section">
            <div className="card">
                <h2><FaPaperPlane className="icon" /> Send Me a Message</h2>
                <p className="form-intro">
                    Have a project in mind? Want to collaborate? Feel free to reach out!
                    I'm always open to discussing new opportunities.
                </p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">
                                Your Name <span className="required">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="form-input"
                            />
                            <ValidationError 
                                prefix="Name" 
                                field="name" 
                                errors={state.errors} 
                                className="error-message"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address <span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                                className="form-input"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email" 
                                errors={state.errors} 
                                className="error-message"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Project Inquiry or Collaboration"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Your Message <span className="required">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Tell me about your project, timeline, and any specific requirements..."
                            required
                            className="form-textarea"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message" 
                            errors={state.errors} 
                            className="error-message"
                        />
                    </div>

                    <div className="form-footer">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="submit-button"
                        >
                            <span className="button-content">
                                {state.submitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="button-icon" />
                                        Send Message
                                    </>
                                )}
                            </span>
                        </button>
                        
                        <p className="form-note">
                            I typically respond within 24-48 hours.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;