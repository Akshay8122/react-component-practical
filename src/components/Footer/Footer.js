import React from "react";
import "./Footer.scss";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p className="footer-text">Privacy Policy</p>
      <p className="footer-text">Copyright 2022</p>
    </div>
  );
};

export default Footer;
