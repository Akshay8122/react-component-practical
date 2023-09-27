import React from "react";
import "./ForgotPass.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseInput from "../components/Input/Input";
import BaseButton from "../components/Button/Button";

function ForgotPass() {
  return (
    <>
      <Header fullLength />
      <div className="forgot-container">
        <div className="forgot-content">
          <div className="forgot-header">
            <p className="header-title">Need help with your account?</p>
            <p className="header-info">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
          </div>

          <BaseInput
            className="forgot-input"
            placeholder="alesiakarapova@mail.com"
          />
          <div className="forgot-btn-section">
            <BaseButton type="primary" value="Send Link" className="sign-btn" />
            <p className="forgot-email-text">Forgot your email?</p>
          </div>
        </div>
      </div>
      <Footer className={"forgotPass-footer"} />
    </>
  );
}

export default ForgotPass;
