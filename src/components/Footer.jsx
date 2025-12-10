import React from "react";
import { FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2025 Class Room DADA. All rights reserved.</div>
        <div className="footer-links">
          <a
            href="https://www.youtube.com/@classroomdada1868"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaYoutube style={{ marginRight: 4 }} />
            YouTube
          </a>
          <a href="mailto:classroomdada@example.com" className="footer-link">
            <FaEnvelope style={{ marginRight: 4 }} />
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaLinkedin style={{ marginRight: 4 }} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
