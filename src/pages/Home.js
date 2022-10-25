import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Fekihh's Pizzeria</h1>
        <p>PIZZA POUR TOUS LES GOÛTS</p>
        <Link to="/menu">
          <button>COMMANDEZ</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
