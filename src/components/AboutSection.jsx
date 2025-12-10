import React from "react";

const AboutSection = () => {
  return (
    <>
      <h2 className="section-title">About Class Room DADA</h2>
      <p
        style={{
          fontSize: "0.98rem",
          color: "var(--color-muted)",
          maxWidth: 760,
          marginBottom: 16,
        }}
      >
        Class Room DADA is created for mechanical engineering students, diploma
        holders, and industry learners who want clear, visual explanations
        instead of boring theory. The channel mixes lab-style experiments with
        real job and exam updates so you can learn concepts and stay
        opportunity-ready in one place.
      </p>

      <ul
        style={{
          paddingLeft: 18,
          fontSize: "0.95rem",
          color: "var(--color-text)",
          marginBottom: 0,
        }}
      >
        <li>Concept-focused visual explanations of mechanical systems</li>
        <li>Realistic lab-style demonstrations and experimental setups</li>
        <li>
          Content designed to help in university exams, competitive exams, and
          technical interviews
        </li>
        <li>
          Regular updates on core job openings and important test notifications
        </li>
      </ul>
    </>
  );
};

export default AboutSection;
