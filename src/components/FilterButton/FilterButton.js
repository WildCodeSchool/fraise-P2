import React,{useContext} from "react";
import "./FilterButton.css";
import cx from "classnames";
import ProductsContext from "../../context/ProductsContext"
import styled,{ ThemeProvider } from "styled-components";

const StyleApp = styled.div
  `color: ${props => props.theme.color}`
;

const FilterButton = ({ label, handleClick,handleCheck,rounded = false,isToggled}) => {


  const sliderCX = cx("slider", {
    rounded: rounded
  });

  return (
    <StyleApp className="filter-button-countainer">
      <label className="filter-switch">
        <input type="checkbox" 
        id={label}
        onChange={handleCheck} 
        onClick={handleClick}
        checked={isToggled}

        />
        <span className={sliderCX} />
      </label>
      <p>{label}</p>
    </StyleApp>
  );
};

export default FilterButton;