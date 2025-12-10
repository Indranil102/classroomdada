import React, { useState } from "react";
import { jobUpdates, examUpdates } from "../data/JobData";
import { FaBriefcase, FaClipboardList } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginBottom: 4, fontSize: "1rem" }}>{job.title}</h3>
        <FaBriefcase style={{ color: "var(--color-orange)" }} />
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--color-muted)",
          marginBottom: 6,
        }}
      >
        {job.company} • {job.location}
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--color-red)",
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        Deadline: {job.deadline}
      </p>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--color-muted)",
          marginBottom: 0,
        }}
      >
        {job.description}
      </p>
    </div>
  );
};

const ExamCard = ({ exam }) => {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginBottom: 4, fontSize: "1rem" }}>{exam.title}</h3>
        <FaClipboardList style={{ color: "var(--color-orange)" }} />
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--color-muted)",
          marginBottom: 6,
        }}
      >
        {exam.body}
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--color-red)",
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        Schedule: {exam.date}
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--color-orange)",
          marginBottom: 10,
        }}
      >
        {exam.deadline}
      </p>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--color-muted)",
          marginBottom: 0,
        }}
      >
        {exam.description}
      </p>
    </div>
  );
};

const JobTestUpdates = () => {
  const [tab, setTab] = useState("jobs");

  return (
    <>
      <h2 className="section-title">Job &amp; Test Updates</h2>
      <p className="section-subtitle">
        Daily-style updates focused on mechanical core profiles, government
        exams, and important notifications.
      </p>

      <div className="tabs">
        <button
          className={`tab ${tab === "jobs" ? "tab-active" : ""}`}
          onClick={() => setTab("jobs")}
        >
          Jobs
        </button>
        <button
          className={`tab ${tab === "exams" ? "tab-active" : ""}`}
          onClick={() => setTab("exams")}
        >
          Exams &amp; Tests
        </button>
      </div>

      <div className="grid grid-3">
        {tab === "jobs"
          ? jobUpdates.map((job) => <JobCard key={job.id} job={job} />)
          : examUpdates.map((exam) => <ExamCard key={exam.id} exam={exam} />)}
      </div>

      {/* TODO: Connect this section with a real job/exam feed API */}
    </>
  );
};

export default JobTestUpdates;
