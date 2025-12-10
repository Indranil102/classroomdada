import React, { useState } from "react";
import { FaEnvelope, FaYoutube, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Message captured on frontend (no backend connected).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Frontend-only demo form. In a real setup this would send your message to
        email or a backend.
      </p>

      <div className="grid grid-2">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="email"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label
              htmlFor="message"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 8 }}>Connect</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                marginBottom: 10,
              }}
            >
              For collaborations, doubts, or suggestions about new experiment
              videos, use the form or reach out using the links below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="mailto:classroomdada@example.com"
                className="footer-link"
              >
                <FaEnvelope style={{ marginRight: 6 }} />
                classroomdada@example.com
              </a>
              <a
                href="https://www.youtube.com/@classroomdada1868"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaYoutube style={{ marginRight: 6 }} />
                YouTube Channel
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaLinkedin style={{ marginRight: 6 }} />
                LinkedIn (placeholder)
              </a>
            </div>
          </div>

          {/* TODO: Hook this up to real social/contact channels */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
