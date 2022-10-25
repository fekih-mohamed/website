import React from "react";
import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>À PROPOS DE NOUS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
          possimus commodi repellat ullam perspiciatis a rem voluptas, nostrum
          quia sed quae, quaerat tenetur molestias suscipit nobis quos tempora
          similique id!
        </p>
      </div>
    </div>
  );
};

export default About;
