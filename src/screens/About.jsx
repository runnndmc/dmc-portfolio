import React from "react";
import Layout from "../shared/layout/Layout";
import "./about.css";

const AboutMe = () => {
  return (
    <Layout>
      <span id="about"> &nbsp; </span>
      <div className="about-section">
        <div className="about__info-wrapper">

        <img
            className="about-photo"
            src="../profile.png"
            alt="Dayna, a white woman with short broown hair smiling against a purple mountian painting"
          />

          <p className="about__statement">
            I'm passionate about delivering high functioning end-to-end experiences.
            I build effective coding techniques across the frontend, backend, and
            the APIs that glue them all together. In building web applications,
            I aim to implement lean, effective and accessible technology standards to my applications that
            directly affect the consumers understanding of a product, goal or misssion.
          </p>

        </div>

        <div className="question-block">
          <h2 className="question-text">"Tell me about yourself!"</h2>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;