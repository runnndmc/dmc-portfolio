import React from "react";

import Layout from "../shared/layout/Layout";
import "./about.css";

const AboutMe = () => {
  return (
    <Layout>
      <span id="about"> &nbsp; </span>
      <div className="about-section">
        <div className="about-info">
          <p className="statement">
            I'm passionate about delivering end-to-end experiences and care
            about the software architecture across the frontend, backend, and
            the APIs that glue them together. By building full stack
            applications, I aim to implement clean, effective technology that
            can directly affect the consumers understanding of a product.
          </p>
          <div className="line-wrapper">
            <div className="line"></div>
          </div>
          <img className="about-photo" src="../filler.webp" alt="filler" />
        </div>

        <div className="question-block">
          <h2 className="question-text">"Tell me about yourself!"</h2>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
