import React from "react";
import "./OtpAuth.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BaseButton from "../components/Button/Button";
import OtpBox from "../components/Otp-box/OtpBox";
import { Form } from "antd";
import toast from "react-hot-toast";

function OtpAuth() {
  const notify = () => toast.success("Otp verification completed.");

  return (
    <>
      <Header fullLength />
      <Form onFinish={() => notify()}>
        <div className="otp-container-wrapper">
          <div className="verify-container">
            <div className="verify-email-content">
              <p className="verify-heading">Verify your email</p>
              <p className="verify-text">
                We have sent code to your email &nbsp;
                <span className="email">alesiaka******@mail.com</span>
              </p>
            </div>
            <OtpBox />
            <div className="verify-btn-section">
              <BaseButton
                type="primary"
                className="verify-btn"
                value="Verify Account"
              />
              <p className="opt-resend-text">
                Resend code in <span className="opt-seconds">59:00</span>
              </p>
            </div>
          </div>
        </div>
      </Form>
      <Footer className={"otpauth-footer"} />
    </>
  );
}

export default OtpAuth;
