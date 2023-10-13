import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import BaseButton from "../Button/Button";
import { ReactComponent as LogoImg } from "../../assets/images/white-logo.svg";
import { useNavigate } from "react-router";

const Header = ({ fullLength, className }) => {
  const navigate = useNavigate();
  return (
    <>
      {fullLength ? (
        <header className={className}>
          <div className="header-style">
            <LogoImg />
            <BaseButton
              onClick={() => navigate("/")}
              type="primary"
              value="Sign In"
              className="btn-signin"
            />
          </div>
        </header>
      ) : (
        <header className={className}>
          <Logo />
        </header>
      )}
    </>
  );
};

export default Header;
