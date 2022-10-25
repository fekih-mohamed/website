import React from "react";
import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Nous contacter</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Nom et prénom</label>
          <input
            type="text"
            placeholder="Entrer Nom et prénom..."
            name="name"
          />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Entrer email..." name="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Entrer message"
            required
          ></textarea>
          <button>Envoyer Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
