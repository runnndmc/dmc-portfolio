import React from "react";

import Layout from "../shared/layout/Layout";
import SectionIntro from "../components/SectionIntro";
import './contact.css'

const Contact = () => {
  return (
    <Layout>
    <SectionIntro />
    <span id="contact"> &nbsp; </span>
    <h2 className="section-heading">Contact</h2>
    <div className="contact-form">



      <h3 className="contact-title">ello</h3>

      <div className="contact-links">
        <a href="mailto: dayna.christison@gmail.com" className="email-link">
          {" "}
          <img className="mail-link" src="./mail.png" alt="envelope to e-mail"/>
        </a>

        <a href="https://www.linkedin.com/in/daynachristison/">
          <img className="linked-in" src="./linkedin.png" alt="linkedin logo"/>
        </a>
        <a href="https://github.com/runnndmc">
          <img className="linked-in" src="./github.png" alt="github logo"/>
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
