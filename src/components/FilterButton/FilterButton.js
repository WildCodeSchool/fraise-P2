import React from "react";
import "./FilterButton.css";
import cx from "classnames";

const FilterButtonBis = ({ label, handleClick, handleCheck, value, rounded = false}) => {

  const sliderCX = cx("slider", {
    rounded: rounded
  });

  return (
    <div className="filter-button-countainer">
      <label className="filter-switch">
        <input type="checkbox" 
        id={label}
        onChange={handleCheck} 
        onClick={handleClick}/>
        <span className={sliderCX} />
      </label>
      <p>{label}</p>
    </div>
  );
};

export default FilterButtonBis;
