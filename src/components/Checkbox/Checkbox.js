import React from "react";
import { Checkbox } from "antd";
import "./Checkbox.scss";

const onChange = (e) => {
  // console.log(`checked = ${e.target.checked}`);
};

const CheckboxCompo = ({ value, ...reset }) => {
  return (
    <div>
      <Checkbox onChange={onChange}>{value}</Checkbox>
    </div>
  );
};

export default CheckboxCompo;
