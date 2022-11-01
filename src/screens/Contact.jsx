import React from "react";
import Layout from "../shared/layout/Layout";
import "./contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact__wrapper">
        <h2 className="contact__heading">Let's Connect!</h2>
        <p>Interested in working together?</p>
        <p>Send me a message! My inbox is always open.</p>
        <a href="mailto:dayna.christison@gmail.com" rel="noopener noreferrer" target="_blank" className="contact__btn"><button>Say Hi!</button></a>
      </div>
    </Layout>
  );
};

export default Contact;
