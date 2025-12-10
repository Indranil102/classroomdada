import React from "react";
import { featuredVideos } from "../data/videoData";
import { FaPlayCircle } from "react-icons/fa";

const levelColors = {
  Beginner: "rgba(76, 175, 80, 0.1)",
  Intermediate: "rgba(255, 152, 0, 0.1)",
  Advanced: "rgba(244, 67, 54, 0.1)",
};

const levelTextColors = {
  Beginner: "#4caf50",
  Intermediate: "#ff9800",
  Advanced: "#f44336",
};

const FeaturedVideos = () => {
  return (
    <>
      <h2 className="section-title">Featured Experiments</h2>
      <p className="section-subtitle">
        Visual, experiment-based videos that explain how real mechanical
        systems behave in labs and industry.
      </p>

      <div className="grid grid-3">
        {featuredVideos.map((video) => (
          <div key={video.id} className="card">
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: 12,
                background:
                  "linear-gradient(120deg, rgba(244,67,54,0.8), rgba(255,152,0,0.9))",
                position: "relative",
                aspectRatio: "16 / 9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPlayCircle size={52} style={{ color: "#ffffff" }} />
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  left: 10,
                  right: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "#ffffff",
                  opacity: 0.9,
                }}
              >
                <span>Class Room DADA</span>
                <span>Experiment demo</span>
              </div>
            </div>

            <h3 style={{ marginBottom: 6, fontSize: "1rem" }}>{video.title}</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                marginBottom: 10,
              }}
            >
              {video.description}
            </p>

            <div style={{ marginBottom: 12 }}>
              <span
                className="tag"
                style={{
                  backgroundColor:
                    levelColors[video.level] || "rgba(255,152,0,0.1)",
                  color:
                    levelTextColors[video.level] || "var(--color-orange)",
                }}
              >
                {video.level}
              </span>
            </div>

            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedVideos;
