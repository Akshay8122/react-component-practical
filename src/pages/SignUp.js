import React from "react";
import { Divider, Form } from "antd";
import "./SignUp.scss";
import { ReactComponent as Google } from "../assets/images/google.svg";
import { ReactComponent as Apple } from "../assets/images/apple.svg";
import { ReactComponent as DisablEye } from "../assets/images/group.svg";
import PaymentImg from "../assets/images/payment-recived.png";
import TransferImg from "../assets/images/transfer-success.svg";
import RectangleIcon from "../assets/images/Rectangle 19.svg";
import Elips1 from "../assets/images/Ellipse 82.svg";
import BaseButton from "../components/Button/Button";
import BaseInput from "../components/Input/Input";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/SignUpModal";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper-container">
      <div className="signup-container">
        <div className="signup-img-layout">
          <div className="signup-img-container">
            <div>
              <Modal />
              <img src={PaymentImg} alt="bal" className="payment-img" />
              <img src={TransferImg} alt="frame" className="transfer-img" />
            </div>
            <div className="img-layout-title-container">
              <div className="img-layout-text">
                <h2 className="heading-title">Speady, Easy and Fast</h2>
                <p className="sub-heading-text">
                  Overpay help you set saving goals, earn cash back offers, Go
                  to disclaimer for more details and get paychecks up to two
                  days early. Get a<span className="dollar"> $20</span> bonus
                  when you receive qualifying direct deposits
                </p>
              </div>
              <div>
                <span className="img-layout-icons">
                  <img src={Elips1} alt="E1" />
                  <img src={RectangleIcon} alt="rectangle" />
                  <img src={Elips1} alt="E2" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* for image */}

        <div className="signup-account-container">
          <Form onFinish={() => navigate("/")} className="signup-div">
            <div className="heading-layout">
              <h3 className="heading-text">Sign up for an account</h3>
              <p className="sub-heading-text">Send, spend and save smarter</p>
            </div>

            <div className="social">
              <BaseButton
                value="Sign Up with Google"
                type={"text"}
                icon={<Google />}
                className="social-btn"
                href={"https://accounts.google.com"}
              />

              <BaseButton
                value="Sign Up with Apple"
                type={"text"}
                icon={<Apple />}
                className="social-btn"
                href={"https://developer.apple.com/sign-in-with-apple/"}
              />
            </div>

            <div className="option-text">
              <Divider>Or with email</Divider>
            </div>

            <div className="signup-input">
              <div className="name-div">
                <BaseInput
                  className="name-input inputt"
                  placeholder="First name"
                  required={true}
                  pattern={"^[a-zA-Z]+$"}
                />
                <BaseInput
                  className="name-input input"
                  placeholder="Last name"
                  pattern={"^[a-zA-Z]+$"}
                  required={true}
                />
              </div>

              <BaseInput
                placeholder="Email"
                type="email"
                pattern={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"}
                required={true}
              />
              <DisablEye className="input-logo" />
              <BaseInput
                placeholder="Password"
                type="password"
                className="pass-input input"
                minLength={6}
                required={true}
              />
            </div>

            <div className="signup-remebmer">
              <p>
                <span className="gray-text">
                  By creating an account, you agreeing to our
                </span>
                &nbsp;<span className="black-text">Privacy Policy</span>
                <span className="gray-text">, and </span>
                <span className="black-text">
                  Electronics Communication Policy.
                </span>
              </p>
            </div>

            <BaseButton
              type={"primary"}
              value="Sign Up"
              className="signup-btn"
            />

            <p className="signin-option">
              Already have an account?
              <span className="signin-text" onClick={() => navigate("/")}>
                Sign In
              </span>
            </p>
          </Form>
          <Footer className={"signup-footer"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
