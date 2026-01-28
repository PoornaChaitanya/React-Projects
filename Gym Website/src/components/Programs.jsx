import React from "react";
import { programData } from "../data/Data.js";
import "./styles/Programs.css";

const Programs = () => {
  return (
    <section className="programs reveal" id="programs">
      <h2 className="section-title">Our Training Programs</h2>
      <div className="programs-grid">
        {programData.map((program) => (
          <div className="card" key={program.id}>
            <img src={program.img} alt="image" />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
