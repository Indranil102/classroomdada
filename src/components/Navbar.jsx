import React, { useState } from "react";
import { FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Machines", target: "machines" },
  { label: "Job & Test Updates", target: "jobs-tests" },
  { label: "Playlists", target: "playlists" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (target) => {
    scrollToSection(target);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <FaYoutube />
          <span>Class Room DADA</span>
        </div>

        <nav className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.target}
              className="navbar-link"
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.youtube.com/@classroomdada1868"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaYoutube style={{ marginRight: 6 }} />
            Subscribe
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <div className="navbar-menu-mobile">
          <div className="navbar-menu-mobile-list">
            {navItems.map((item) => (
              <button
                key={item.target}
                className="navbar-link"
                onClick={() => handleNavClick(item.target)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="navbar-menu-mobile-actions">
            <a
              href="https://www.youtube.com/@classroomdada1868"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaYoutube style={{ marginRight: 6 }} />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
