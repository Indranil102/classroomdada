import React from "react";
import { machineCategories } from "../data/machineData"
import {
  FaCogs,
  FaWater,
  FaIndustry,
  FaSnowflake,
  FaTachometerAlt,
} from "react-icons/fa";

const iconMap = {
  pump: <FaWater />,
  engine: <FaTachometerAlt />,
  hvac: <FaSnowflake />,
  manufacturing: <FaIndustry />,
  fluid: <FaCogs />,
};

const MachinesSection = () => {
  return (
    <>
      <h2 className="section-title">Machine Categories</h2>
      <p className="section-subtitle">
        Explore experiments and visual breakdowns of core mechanical machines
        used in labs and industry.
      </p>

      <div className="grid grid-3">
        {machineCategories.map((cat) => (
          <div key={cat.id} className="card">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                marginBottom: 12,
                background:
                  "linear-gradient(135deg, rgba(244,67,54,0.1), rgba(255,152,0,0.2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "#f44336",
              }}
            >
              {iconMap[cat.icon] || <FaCogs />}
            </div>
            <h3 style={{ marginBottom: 8 }}>{cat.name}</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                marginBottom: 16,
              }}
            >
              {cat.description}
            </p>
            <button className="btn btn-secondary">
              View Experiments
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MachinesSection;
