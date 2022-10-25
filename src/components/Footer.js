import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy; 2022 FEKIH</p>
    </div>
  );
};

export default Footer;
