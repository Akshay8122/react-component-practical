import React from "react";
import { Divider } from "antd";
import "./SignUpModal.scss";
import { ReactComponent as LinesChart } from "../../assets/images/lines.svg";
import { ReactComponent as StripeLogo } from "../../assets/images/stripe.svg";
import { ReactComponent as FacebookLogo } from "../../assets/images/facebook.svg";

function SignUpModal() {
  return (
    <div className="modal-container">
      <div className="modal-heading">
        <div className="heading-content-left">
          <p className="heading-content-text">Income</p>
          <p className="heading-content-number">$24,908.00</p>
        </div>
        <div className="heading-content-right">
          <p className="heading-content-text">Expenses</p>
          <p className="heading-content-number">$1,028.00</p>
        </div>
      </div>
      <LinesChart className="modal-chart" />
      <Divider />

      <div className="modal-recent-activity">
        {/* stripe */}
        <div className="modal-activities">
          <div className="stripe-left">
            <StripeLogo className="stripe-logo" />
            <span className="stripe-left-text">
              <p className="stripe-text">Stripe</p>
              <p className="deposit-text">Deposit</p>
            </span>
          </div>
          <div className="stripe-right">
            <p className="stripe-number">+523.10</p>
            <p className="today-date">Today at 7.18 AM</p>
          </div>
        </div>

        {/* facebook */}
        <div className="modal-activities">
          <div className="facebook-left">
            <FacebookLogo className="facebook-logo" />
            <span className="facebook-left-text">
              <p className="facebook-text">Facebook charge</p>
              <p className="advertising-text">Advertising</p>
            </span>
          </div>
          <div className="facebook-right">
            <p className="facebook-number">-600.00</p>
            <p className="today-date">Today at 6.24 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
