import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Divider, Form } from "antd";
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
import Checkbox from "../components/Checkbox/Checkbox";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper-container">
      <div className="container">
        <Header className={"sign-header"} />
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
                href={"https://accounts.google.com"}
              />

              <BaseButton
                value="Sign In with Apple"
                type={"text"}
                icon={<Apple />}
                href={"https://developer.apple.com/sign-in-with-apple/"}
              />
            </div>

            <div className="option-text">
              <Divider>Or with email</Divider>
            </div>

            <Form onFinish={() => navigate("/home")}>
              <div className="sign-input">
                <BaseInput
                  placeholder="Username or email"
                  type="text"
                  required={true}
                />
                <DisablEye className="input-logo" />
                <BaseInput
                  placeholder="Password"
                  type="password"
                  className="pass-input"
                  required={true}
                />
              </div>

              <div className="sign-remebmer">
                <span className="checkbox-wrapper">
                  <Checkbox value={"Remember me"} />
                </span>
                <Link className="sign-forgot" to={"/forgotPass"}>
                  Forgot Password?
                </Link>
              </div>

              <BaseButton
                type={"primary"}
                value="Sign In"
                className="sign-btn"
              />

              <p className="signUp-option">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="signUp-text"
                >
                  Sign Up
                </span>
              </p>
            </Form>
          </div>

          <Footer className={"sign-footer"} />
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
                  Overpay help you set saving goals, earn cash back offers, Go
                  to disclaimer for more details and get paychecks up to two
                  days early. Get a<span className="dollar"> $20</span> bonus
                  when you receive qualifying direct deposits
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
    </div>
  );
};

export default SignIn;
