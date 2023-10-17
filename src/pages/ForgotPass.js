import React from "react";
import "./ForgotPass.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseInput from "../components/Input/Input";
import BaseButton from "../components/Button/Button";
import { Link } from "react-router-dom";
import { Form } from "antd";
import toast from "react-hot-toast";

function ForgotPass() {
  const notify = () => toast.success("Email sent successfully.");

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
          <Form onFinish={() => notify()}>
            <BaseInput
              className="forgot-input"
              placeholder="alesiakarapova@mail.com"
              required={true}
              pattern={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"}
              name="email"
            />
            <div className="forgot-btn-section">
              <BaseButton
                type="primary"
                value="Send Link"
                className="sign-btn"
              />
              <Link to={"/otp-auth"} className="forgot-email-text">
                Forgot your email?
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <Footer className={"forgotpass-footer"} />
    </>
  );
}

export default ForgotPass;
