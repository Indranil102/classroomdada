import React from "react";
import { playlists } from "../data/PlaylistData";
import { FaListUl } from "react-icons/fa";

const PlaylistsSection = () => {
  return (
    <>
      <h2 className="section-title">Playlists &amp; Series</h2>
      <p className="section-subtitle">
        Structured playlists so you can binge through topics in a logical flow
        instead of random chaos.
      </p>

      <div className="grid grid-4">
        {playlists.map((pl) => (
          <div key={pl.id} className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>{pl.name}</h3>
              <FaListUl style={{ color: "var(--color-orange)" }} />
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                marginBottom: 8,
              }}
            >
              {pl.description}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--color-red)",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              {pl.videosCount} videos
            </p>
            <button
              className="btn btn-secondary"
              // TODO: Replace with real playlist links (YouTube API or manual URLs)
            >
              Open Playlist
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlaylistsSection;
