import React, {useState} from 'react'
import "./FilterButton.css"

const FilterButton = ({label, handleClick,handleCheck,value}) => {

    return (
    <div className="filter-button-countainer">
        <input 
        type="checkbox" 
        id={`filter-${label}`}
        value={value} 
        onClick={handleClick} 
        onChange={handleCheck}/>


        <label className="button-label" htmlFor={`filter-${label}`}>
            <div className="knob"></div>
            <div className="button-on">On</div>
            <div className="button-off">Off</div>
        </label>
        <p>{label}</p>
    </div>
)}


export default FilterButton