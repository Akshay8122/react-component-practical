import React from "react";
import { Select } from "antd";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as RectangleDarkLogo } from "../../assets/images/Rectangle-black.svg";
import { ReactComponent as RectangleMin } from "../../assets/images/Rectangle-min.svg";
import { ReactComponent as RectangleMid } from "../../assets/images/Rectangel-mid.svg";
import { ReactComponent as SendIcon } from "../../assets/images/sendIcon.svg";
import { ReactComponent as ReciveIcon } from "../../assets/images/reciveIcon.svg";
import { ReactComponent as InvoiceIcom } from "../../assets/images/InvoiceIcon.svg";
import { ReactComponent as MoreIcon } from "../../assets/images/moreIcon.svg";
import { ReactComponent as MasterCardLogo } from "../../assets/images/masterCard.svg";
import debitCard from "../../assets/images/debitCard.svg";
import BaseButton from "../../components/Button/Button";
import BaseInput from "../../components/Input/Input";

import "./HeroRight.scss";

function HeroRight() {
  const optionsTransfer = [
    {
      label: (
        <div className="label-conatainer">
          <div className="label-items">
            <MasterCardLogo />
            Debit
          </div>
          <p className="label-text">$10,304</p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="home-container-right">
        <div className="container-wallet-box">
          <div className="wallet-heading">
            <p className="wallet-heading-text">Wallet</p>
            <Dots />
          </div>
          <img src={debitCard} alt="debitCard" className="debit-card" />
          <div className="wallet-rectangle-logo">
            <RectangleDarkLogo />
            <RectangleMid />
            <RectangleMin />
          </div>
          <div className="wallet-items-menu">
            <div className="wallet-item">
              <SendIcon />
              <p className="wallet-item-text">Send</p>
            </div>
            <div className="wallet-item">
              <ReciveIcon />
              <p className="wallet-item-text">Recive</p>
            </div>
            <div className="wallet-item">
              <InvoiceIcom />
              <p className="wallet-item-text">Invoice</p>
            </div>
            <div className="wallet-item">
              <MoreIcon />
              <p className="wallet-item-text">More</p>
            </div>
          </div>
        </div>
        <div className="container-quick-transfer">
          <p className="transfer-heading">Quick Transfer</p>
          <div className="transfer-menu-items">
            <Select
              options={optionsTransfer}
              defaultValue={[optionsTransfer]}
            />
            <BaseInput
              type={"text"}
              placeholder={"Enter amount"}
              icon={<ArrowIcon />}
              className="quick-input"
            />
          </div>
          <BaseButton
            type="primary"
            value="Send money"
            className="primary-btn"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroRight;
