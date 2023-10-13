import React from "react";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";
import "./Logo.scss";

const Logo = ({ className }) => {
  return (
    <div>
      <LogoImg className={className} />
    </div>
  );
};

export default Logo;
