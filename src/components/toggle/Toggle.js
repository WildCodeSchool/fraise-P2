import React from "react";
import "./Toggle.css";
import cx from "classnames";

const Toggle = ({ rounded = false, isToggled, onToggle,themeToggler }) => {
  const sliderCX = cx("slider", {
    rounded: rounded
  });

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} onClick={themeToggler} />
      <span className={sliderCX} />
    </label>
  );
};

export default Toggle;
