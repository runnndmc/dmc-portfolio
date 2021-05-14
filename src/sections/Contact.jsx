import React from "react";

import Layout from "../shared/layout/Layout";
import SectionIntro from "../components/SectionIntro";
import "./contact.css";

const Contact = () => {
  return (
    <Layout>
      <SectionIntro />
      <span id="contact"> &nbsp; </span>
      <h2 className="section-heading">Let's Connect!</h2>
      <div className="contact-form">
        <a href="mailto: dayna.christison@gmail.com" className="email-link">
          {" "}
          <img
            className="mail-image"
            src="../contact-icons/mail.png"
            alt="envelope to e-mail"
          />
        </a>
        <div className="contact-text">
        <h4>Email: <a href="mailto: dayna.christison@gmail.com" className="email-text">Dayna.christison@gmail.com</a></h4>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
