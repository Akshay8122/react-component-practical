import React from "react";
import { Table, Tag } from "antd";
import moneyChart from "../../assets/images/money-flow.png";
import BaseButton from "../../components/Button/Button";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";
import { ReactComponent as DownArrow } from "../../assets/images/down-arrow.svg";
import { ReactComponent as Bitcoin } from "../../assets/images/bitcoin.svg";
import { ReactComponent as Paypal } from "../../assets/images/paypal.svg";
import { ReactComponent as CalendarIcon } from "../../assets/images/calender.svg";
import "./HeroLeft.scss";
import antonioIcon from "../../assets/images/antonio.svg";

function HeroLeft() {
  const tableData = [
    {
      key: "1",
      calenderIcon: <CalendarIcon />,
      name: `Bitcoin transactions`,
      icon: <Bitcoin className="name-table-cell-icon" />,
      date: `Jan 16, 2022`,
      price: "-$835.00",
      tags: ["Success"],
    },
    {
      key: "2",
      calenderIcon: <CalendarIcon />,
      name: "Sent to Antonio",
      icon: <img src={antonioIcon} alt="" className="name-table-cell-icon" />,
      // icon: <AntonioIcon className="name-table-cell-icon"  />,
      date: "Jan 14, 2022",
      price: "-$150.00",
      tags: ["Pending"],
    },
    {
      key: "3",
      calenderIcon: <CalendarIcon />,
      name: "Witdraw Paypal",
      icon: <Paypal className="name-table-cell-icon" />,
      date: "Jan 13, 2022",
      price: "+$200.00",
      tags: ["Success"],
    },
  ];

  const columns = [
    {
      dataIndex: `name`,
      key: `name`,
      render: (_, { name, icon }) => (
        <div className="name-table-cell">
          {icon}
          {name}
        </div>
      ),
    },
    {
      dataIndex: "date",
      key: "date",
      render: (_, { calenderIcon, date }) => (
        <div className="table-calendar-items">
          {calenderIcon}
          {date}
        </div>
      ),
    },
    {
      dataIndex: "price",
      key: "price",
      render: (price) => <p className="table-price-cell">{price}</p>,
    },
    {
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <div className="table-tags">
          {tags.map((tag) => {
            let color = tag.match("Success") ? "green" : "volcano";
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="home-container-left">
        <div className="home-banner">
          <div className="banner-heading-menu">
            <p className="banner-offer-text">Unlimited Cashback</p>
            <p className="bannner-description-text">
              Instant 2% back on all your spend to your account
            </p>
            <BaseButton
              type="text"
              value={<ArrowIcon />}
              className="btn-banner-upgrade"
              icon={"Upgrade Now"}
            />
          </div>
        </div>
        <div>
          <img src={moneyChart} alt="money-flow" className="img-money-chart" />
        </div>
        {/* <MoneyChart className="img-money-chart" /> */}
        <div className="recent-transaction-modal">
          <div className="modal-heading">
            <p className="modal-recent-title">Recent Transactions</p>
            <BaseButton
              value={<DownArrow />}
              type="text"
              icon={`View all`}
              className="veiw-all-btn"
            />
          </div>
          &nbsp;
          <Table columns={columns} dataSource={tableData} pagination={false} />
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
