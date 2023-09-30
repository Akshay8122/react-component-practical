import React, { useEffect } from "react";
import BaseInput from "../Input/Input";
import "./OtpBox.scss";

function OtpBox() {
  useEffect(() => {
    const inputs = document.getElementById("opt-box");

    inputs.addEventListener("input", function (e) {
      const target = e.target;
      const val = target.value;

      if (isNaN(val)) {
        target.value = "";
        return;
      }

      if (val !== "") {
        const next = target.nextElementSibling;
        if (next) {
          next.focus();
        }
      }
    });

    inputs.addEventListener("keyup", function (e) {
      const target = e.target;
      const key = e.key.toLowerCase();

      if (key === "backspace" || key === "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
          prev.focus();
        }
        return;
      }
    });

    inputs.addEventListener("keypress", function (e) {
      const target = e.target;
      const key = e.key.toLowerCase();

      if (key === "enter" || e.keyCode === 13) {
        e.preventDefault(); // Prevent the default behavior of the "Enter" key (submitting the form)
        const next = target.nextElementSibling;
        if (next) {
          next.focus();
        }
      }
    });
  }, []);
  return (
    <div className="otp-box" id="opt-box">
      <BaseInput className="boxes-fill" maxLength={1} required={true} />
      <BaseInput className="boxes-fill" maxLength={1} required={true} />
      <BaseInput
        className="boxes-fill"
        maxLength={1}
        type="text"
        required={true}
      />
      <BaseInput
        className="boxes-fill"
        maxLength={1}
        type="text"
        required={true}
      />
      <BaseInput
        className="boxes-fill"
        maxLength={1}
        type="text"
        required={true}
      />
    </div>
  );
}

export default OtpBox;
