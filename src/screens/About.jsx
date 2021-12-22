import React from "react";

import Layout from "../shared/layout/Layout";
import "./about.css";

const AboutMe = () => {
  return (
    <Layout>
      <span id="about"> &nbsp; </span>
      <div className="about-section">
        <div className="about__info-wrapper">
          <p className="about__statement">
            I'm passionate about delivering end-to-end experiences and care
            about the software architecture across the frontend, backend, and
            the APIs that glue them together. By building full stack
            applications, I aim to implement clean, effective technology that
            can directly affect the consumers understanding of a product.
          </p>

          <div className="line"></div>

          <img
            className="about-photo"
            src="../profile.png"
            alt="a white woman with showrt brown hair wearing a dark gret knit sweater and a silver necklace chain"
          />
        </div>

        <div className="question-block">
          <h2 className="question-text">"Tell me about yourself!"</h2>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;

/* ===== NOTES ===== */
// check up on statement -  add EarQ
// line wrapper needed ?
// about-info -> about-me__wrapper
// about-me__photo name
// img accessible?
// check height on question block - try to fit on fold
// padding-right needed?
// flex wrap on about-section instead of about-info?
// photo adjust.. instead of height and width and border adjust,
// full section - raised background with just shadow instead of border and annimation to arrive on scroll
//
