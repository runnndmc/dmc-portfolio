import React, { useState } from "react";
import { Axios, db } from "../firebase/firebaseConfig";

import Layout from "../shared/layout/Layout";
// import SectionIntro from "../components/SectionIntro";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-dmc-portfolio.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Layout>
      <div className="contact__wrapper">
      <h2 className="contact__heading">Let's Connect!</h2>
      <form className="contact__form" onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ""}
          />

        <input  
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ""}
        />

        <textarea 
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ""}
        ></textarea>

        <button className="contact__btn" type="submit">Submit</button>



        {/* <a href="mailto: dayna.christison@gmail.com" className="email-link">
          {" "}
          <img
            className="mail-image"
            src="../contact-icons/mail.png"
            alt="envelope to e-mail"
          />
        </a>
        <div className="contact-text">
          <p>
            Email:{" "}
            <a href="mailto: dayna.christison@gmail.com" className="email-text">
              Dayna.christison@gmail.com
            </a>
          </p>
        </div> */}

      </form>
      </div>
    </Layout>
  );
};

export default Contact;

/* ===== NOTES ===== */
// more interactive -posssibly a form for email here 
//
//http://findmatthew.com/

