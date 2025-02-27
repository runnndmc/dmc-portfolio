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
            I strive to develop seamless, end-to-end web experiences with a
            strong focus on front-end engineering, front-end architecture, and
            API integration. I'm skilled at building web applications that are
            high-performing, accessible, and scalable, so that they offer an
            inclusive experience to anyone with access to the internet.
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
