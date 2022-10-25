import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
