import React from "react";
import { Select } from "antd";
import { ReactComponent as SerchIcon } from "../assets/images/Search.svg";
import { ReactComponent as BellIcon } from "../assets/images/notify.svg";
import { ReactComponent as GirlElips } from "../assets/images/Elipsgirl.svg";
import { ReactComponent as LogoutIcon } from "../assets/images/logout.svg";
import { ReactComponent as NotifyMessage } from "../assets/images/notifymsg.svg";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroLeft from "../components/HeroSection/HeroLeft";
import HeroRight from "../components/HeroSection/HeroRight";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const options = [
    {
      value: "Alesia K.",
      label: (
        <div className="header-option-style">
          <GirlElips />
          Alesia K.
        </div>
      ),
    },
    {
      value: "Log out",
      label: (
        <div className="logout-style">
          <LogoutIcon />
          Log out
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="home-container-main">
        {/* Home sidebar */}
        <Sidebar />

        <div className="home-container-wrapper">
          {/* Home heder */}
          <div className="home-headerbar">
            <p className="heading-text">Dashboard</p>
            <span className="heading-menu">
              <SerchIcon className="search-icon" />
              <NotifyMessage className="notify-icon" />
              <BellIcon className="bell-icon" />
              <Select
                options={options}
                defaultValue={["Alesia K."]}
                onChange={() => navigate("/")}
              />
            </span>
          </div>

          {/* Home main container */}
          <div className="main-container-layout">
            <HeroLeft />
            <HeroRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
