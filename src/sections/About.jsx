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
          I'm passionate about delivering end-to-end experiences and care about
          the software architecture across the frontend, backend, and the APIs
          that glue them together. By building full stack applications, I aim to
          implement clean, effective technology that can directly affect the
          consumers understanding of a product.
        </p>
        <img src="" alt="" />
      </div>

      <div className="question-block">"Tell me about yourself!"</div>
      </div>
    </Layout>
  );
};

export default AboutMe;
