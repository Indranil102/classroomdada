import React from "react";
import { FaPlay, FaClock, FaRegBell } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero-heading">
          <span className="hero-gradient">Understand Mechanical Machines</span>{" "}
          Visually
        </h1>
        <p className="hero-subtext">
          Experimental explanations of mechanical systems, plus daily job &amp;
          test updates for mechanical engineering students and professionals.
        </p>

        <div className="hero-badges">
          <span className="hero-badge">Mechanical Engineering</span>
          <span className="hero-badge">Lab-style Experiments</span>
          <span className="hero-badge">Job &amp; Exam Updates</span>
        </div>

        <div className="hero-actions">
          <a
            href="https://www.youtube.com/@classroomdada1868"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaPlay style={{ marginRight: 8 }} />
            Watch on YouTube
          </a>
          <button
            className="btn btn-secondary"
            onClick={() => {
              const el = document.getElementById("machines");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Machines
          </button>
        </div>

        <div className="hero-meta">
          <span>
            <FaClock style={{ marginRight: 4 }} />
            Short, visual explanations
          </span>
          <span>
            <FaRegBell style={{ marginRight: 4 }} />
            Daily job &amp; test alerts
          </span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-video-card">
          <div className="hero-video-inner">
            <div className="hero-video-top">
              <div className="hero-video-channel">Class Room DADA</div>
              <div className="hero-video-chip">Sample Experiment</div>
            </div>
            <div className="hero-video-thumbnail">
              <div className="hero-play-button">
                <FaPlay className="hero-play-icon" />
              </div>
            </div>
            <div className="hero-video-footer">
              <span>Centrifugal Pump Test Rig</span>
              <span>9:12 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
