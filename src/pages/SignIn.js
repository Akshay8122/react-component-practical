import React from "react";
import { Divider, Radio } from "antd";
import "./SignIn.scss";
import Header from "../components/Header/Header";
import { ReactComponent as Google } from "../assets/images/google.svg";
import { ReactComponent as Apple } from "../assets/images/apple.svg";
import { ReactComponent as DisablEye } from "../assets/images/group.svg";
import Balance from "../assets/images/balance.png";
import FrameImg from "../assets/images/Frame.png";
import RectangleIcon from "../assets/images/Rectangle 19.svg";
import Elips1 from "../assets/images/Ellipse 82.svg";
import BaseButton from "../components/Button/Button";
import BaseInput from "../components/Input/Input";
import CheckboxCompo from "../components/Checkbox/Checkbox";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const SignIn = () => {
  return (
    <div className="container">
      <Header />
      <div className="sign-container">
        <div className="sign-div">
          <div className="heading-layout">
            <h3 className="heading-text">Sign in to OverPay</h3>
            <p className="sub-heading-text">Send, spend and save smarter</p>
          </div>

          <div className="social">
            <BaseButton
              value="Sign In with Google"
              type={"text"}
              icon={<Google />}
            />

            <BaseButton
              value="Sign In with Apple"
              type={"text"}
              icon={<Apple />}
            />
          </div>

          <div className="option-text">
            <Divider>Or with email</Divider>
          </div>

          <div className="sign-input">
            <BaseInput placeholder="Username or email" type="text" />
            <DisablEye className="input-logo" />
            <BaseInput
              placeholder="Password"
              type="password"
              className="pass-input"
            />
          </div>

          <div className="sign-remebmer">
            <span className="remember">
              <CheckboxCompo />
              <p>Remember me</p>
            </span>
            <p className="sign-forgot">Forgot Password?</p>
          </div>

          <BaseButton type={"primary"} value="Sign In" className="sign-btn" />

          <p className="signUp-option">
            Don't have an account? <span className="signUp-text">Sign Up</span>
          </p>
        </div>

        <Footer />
      </div>

      {/* for image */}
      <div className="img-layout">
        <div className="img-container">
          <div>
            <Modal />
            <img src={Balance} alt="bal" className="bal-img" />
            <img src={FrameImg} alt="frame" className="frame-img" />
          </div>
          <div className="img-layout-title-container">
            <div className="img-layout-text">
              <h2 className="heading-title">Get better with money</h2>
              <p className="sub-heading-text">
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a<span className="dollar"> $20</span> bonus when you
                receive qualifying direct deposits
              </p>
            </div>
            <div>
              <span className="img-layout-icons">
                <img src={RectangleIcon} alt="rectangle" />
                <img src={Elips1} alt="E1" />
                <img src={Elips1} alt="E2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
