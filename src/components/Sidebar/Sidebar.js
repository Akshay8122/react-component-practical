import React from "react";
import { Divider, Select } from "antd";
import "./Sidebar.scss";
import Logo from "../Logo/Logo";
import { ReactComponent as HomeIcon } from "../../assets/images/home-2.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/images/Invoice.svg";
import { ReactComponent as MessagesIcon } from "../../assets/images/message.svg";
import { ReactComponent as WalletsIcon } from "../../assets/images/card.svg";
import { ReactComponent as ActivityIcon } from "../../assets/images/replace.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/images/Chart.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/setting.svg";
import { ReactComponent as QuestionIcon } from "../../assets/images/question-circle-outlined.svg";

import BaseButton from "../Button/Button";

function Sidebar() {
  const options = [
    {
      value: "Activity",
      label: (
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "5px",
          }}
        >
          <ActivityIcon className="sidebar-icons" />
          Activity
        </div>
      ),
    },
  ];
  return (
    <div className="sidebar-container ">
      <div className="sidebar-logo">
        <Logo className="sidebar-img" />
      </div>
      <Divider className="sidebar-line" />

      <div className="sidebar-menu">
        <BaseButton
          type="primary"
          value="Dashboard"
          icon={<HomeIcon className="sidebar-icons" />}
          className="home-btn"
        />
        <BaseButton
          type={"primary"}
          icon={<InvoiceIcon className="sidebar-icons" />}
          value={"Invoices"}
          className="sidebar-btns"
        />
        <span className="total-messages">5</span>
        <BaseButton
          type={"primary"}
          icon={<MessagesIcon className="sidebar-icons" />}
          value={"Messages"}
          className="sidebar-btns"
        />
        <BaseButton
          type={"primary"}
          icon={<WalletsIcon className="sidebar-icons" />}
          value={"My Wallets"}
          className="sidebar-btns"
        />
        <Select options={options} defaultValue={["Activity"]} />
        <BaseButton
          type={"primary"}
          icon={<AnalyticsIcon className="sidebar-icons" />}
          value={"Analytics"}
          className="sidebar-btns"
        />
      </div>

      <div className="sidebar-last-menu">
        <BaseButton
          type={"primary"}
          icon={<QuestionIcon className="sidebar-icons" />}
          value={"Get Help"}
          className={"sidebar-btns"}
        />
        <BaseButton
          type={"primary"}
          icon={<SettingIcon className="sidebar-icons" />}
          value={"Settings"}
          className={"sidebar-btns"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
