import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Contact.css";

/* A simple email check: something@something.something */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact({ cartItems, onRemoveFromCart }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    /* Turns on after a valid demo submission. Nothing is really sent —
      . */
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

        /* Clear this field's error while the visitor keeps typing. */
        setErrors({ ...errors, [name]: "" });
        setSubmitted(false);
    };

    /* Check the required fields only — phone is optional. */
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (!emailPattern.test(formData.email.trim())) {
            newErrors.email =
                "Please enter a valid email address, for example name@example.com.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Please enter a subject.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your message.";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmitted(false);
            return;
        }

        setErrors({});
        setSubmitted(true);

       
    };

    return (
        <div>
            <Header cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />

            <main>
                <section className="contact-hero">
                    <p className="eyebrow">Get In Touch</p>
                    <h1>Contact Us</h1>
                    <p className="contact-intro">
                        Have a question about a piece, an order or a room you are
                        furnishing? Send us a message — questions about our
                        furniture, product details and general enquiries are all
                        welcome.
                    </p>
                </section>

                <section className="contact-info">
                    <p className="eyebrow">Contact Details</p>
                    <h2>Ways to reach us.</h2>

                   
                    <div className="info-grid">
                        <article className="info-card">
                            <h3>Phone</h3>
                            <p className="info-placeholder">[Add business phone number]</p>
                        </article>

                        <article className="info-card">
                            <h3>Email</h3>
                            <p className="info-placeholder">[Add business email address]</p>
                        </article>

                        <article className="info-card">
                            <h3>Location</h3>
                            <p className="info-placeholder">
                                Lagos, Nigeria — [Add full street address]
                            </p>
                        </article>

                        <article className="info-card">
                            <h3>Business Hours</h3>
                            <p className="info-placeholder">[Add business hours]</p>
                        </article>
                    </div>

                    <p className="info-note">
                        Full contact details will be published here soon. Until
                        then, the form below is the best way to reach us.
                    </p>
                </section>

                {/* ---------- contact form ---------- */}
                <section className="contact-form-section">
                    <p className="eyebrow">Send A Message</p>
                    <h2>Tell us how we can help.</h2>

                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <p className="form-note">Fields marked * are required.</p>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="name">
                                    Full Name{" "}
                                    <span className="required-star" aria-hidden="true">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={errors.name ? "true" : "false"}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    className={errors.name ? "input-error" : ""}
                                />
                                {errors.name && (
                                    <p className="field-error" id="name-error">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">
                                    Email Address{" "}
                                    <span className="required-star" aria-hidden="true">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={errors.email ? "input-error" : ""}
                                />
                                {errors.email && (
                                    <p className="field-error" id="email-error">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="phone">
                                    Phone Number{" "}
                                    <span className="optional-tag">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="subject">
                                    Subject{" "}
                                    <span className="required-star" aria-hidden="true">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What is your question about?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={errors.subject ? "true" : "false"}
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                    className={errors.subject ? "input-error" : ""}
                                />
                                {errors.subject && (
                                    <p className="field-error" id="subject-error">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="form-row form-row-single">
                            <div className="form-field">
                                <label htmlFor="message">
                                    Message{" "}
                                    <span className="required-star" aria-hidden="true">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={errors.message ? "true" : "false"}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    className={errors.message ? "input-error" : ""}
                                ></textarea>
                                {errors.message && (
                                    <p className="field-error" id="message-error">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button type="submit" className="btn">Send Enquiry</button>

                        {submitted && (
                            <p className="demo-notice" role="status">
                                <strong>This is a demonstration form.</strong> No email
                                service is connected to this page yet, so your message
                                has not been sent anywhere. Your text is still in the
                                form above so you can copy it, and the real contact
                                details will appear in the section above once they are
                                added.
                            </p>
                        )}
                    </form>
                </section>

                {/* ---------- frequently asked questions ---------- */}
                <section className="contact-faq">
                    <p className="eyebrow">Good To Know</p>
                    <h2>Frequently asked questions.</h2>

                    <div className="faq-grid">
                        <article className="faq-item">
                            <h3>What can I ask about?</h3>
                            <p>
                                Anything you see on this site — a piece from our
                                Collections, product details, or a general question
                                about furnishing your space.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3>How do I browse the furniture?</h3>
                            <p>
                                Open the Collections page to see every piece currently
                                listed, with its name and price.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3>Can I place a real order here?</h3>
                            <p>
                                This website is a demonstration shop: you can add
                                items to your cart, but no orders or payments are
                                processed.
                            </p>
                        </article>
                    </div>
                </section>

               
                <section className="contact-cta">
                    <p className="eyebrow">Browse Our Pieces</p>
                    <h2>Furniture for every room.</h2>
                    <p>
                        Looking at pieces before you enquire? Everything we
                        currently list is waiting on the Collections page.
                    </p>

                    <div className="contact-cta-buttons">
                        <Link to="/collections" className="btn">Shop Collections</Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
export default Contact;
