import React from "react";
import Layout from "../shared/layout/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <div className="about-me">
        <span id="about"> &nbsp; </span>
        <div className="about-container">
          <h2 className="about-title">ABOUT</h2>
          <h5 className="pronouns">[she, her, hers]</h5>
          <p className="statement">
            I'm passionate about delivering end-to-end experiences and care
            about the software architecture across the frontend, backend, and
            the APIs that glue them together. By building full stack
            applications, I aim to implement clean, effective technology that
            can directly affect the consumers understanding of a product.
          </p>
        </div>
      </div>
      </Layout>
  );
};

export default AboutMe;
