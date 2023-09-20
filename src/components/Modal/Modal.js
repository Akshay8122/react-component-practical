import React from "react";
import "./Modal.scss";
import { ReactComponent as LeftArrow } from "../../assets/images/chevron-left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/chevron-right.svg";
import { ReactComponent as Visa } from "../../assets/images/visa.svg";
import { ReactComponent as Payoneer } from "../../assets/images/Payoneer.svg";
import inputAmount from "../../assets/images/input - amount.svg";
import debitCard from "../../assets/images/debitCard.svg";
import plusLogo from "../../assets/images/plus.svg";
import userFrance from "../../assets/images/francene.png";
import userCyndy from "../../assets/images/cyndy.png";
import userRoselle from "../../assets/images/roselle.png";
import userTanner from "../../assets/images/tanner.png";
import BaseButton from "../Button/Button";
import { Radio } from "antd";

function Modal() {
  return (
    <div className="send-money">
      <div className="modal-header">
        <h2 className="modal-title">Send Money</h2>
        <p className="modal-info__text">
          Please enter user info that you want to send money and enter an amount
        </p>
      </div>
      <div className="modal-recent-contacts">
        <div className="modal-recent-heading">
          <p className="modal-recent-text">Recent Contact</p>
          <span>
            <LeftArrow />
            <RightArrow />
          </span>
        </div>
        <div className="modal-user-list">
          <figure>
            <img src={plusLogo} alt="logo" className="modal-img__plus" />
            <p className="modal-text">Add</p>
          </figure>
          <figure>
            <img src={userFrance} alt="logo" className="modal-img__france" />
            <p className="modal-text">Francene</p>
          </figure>
          <figure>
            <img src={userCyndy} alt="logo" className="modal-img__cyndy" />
            <p className="modal-text">Cyndy. L</p>
          </figure>
          <figure>
            <img src={userRoselle} alt="logo" className="modal-img__roselle" />
            <p className="modal-text">Roselle</p>
          </figure>
          <figure>
            <img src={userTanner} alt="logo" className="modal-img__tanner" />
            <p className="modal-text">Tanner. S</p>
          </figure>
        </div>
      </div>

      <div className="modal-choose-method">
        <div className="modal-choose-title">
          <p>Choose Method</p>
          <span>
            <BaseButton
              type={"text"}
              value="Add &nbsp; +"
              className="add-btn"
            />
          </span>
        </div>
        <div className="modal-choose-method-container">
          <div className="modal-choose-pay-method">
            <div className="modal-visa-method">
              <div className="modal-modal-desc">
                <Visa />
                <span className="modal-modal-text">
                  <h4>Visa</h4>
                  <p>$24,098.00</p>
                </span>
              </div>
              <Radio checked className="modal-radio" />
            </div>
            <div className="modal-payoneer-method">
              <div className="modal-modal-desc">
                <Payoneer />
                <span className="modal-modal-text">
                  <h4>Payoneer</h4>
                  <p>$34,245.00</p>
                </span>
              </div>
              <Radio className="modal-radio" checked={false} />
            </div>
          </div>
          <div className="modal-card-imgs">
            <img src={debitCard} alt="" className="modal-card" />
            <img src={inputAmount} alt="" className="modal-input-amount" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
