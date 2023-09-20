import React from "react";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <LogoImg />
    </div>
  );
};

export default Logo;
