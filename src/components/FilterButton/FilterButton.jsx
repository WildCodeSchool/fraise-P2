import React, {useState} from 'react'
import "./FilterButton.css"

const FilterButton = ({label, handleClick, filterGluten}) => {

    return (
    <div className="filter-button-countainer">
        <input type="checkbox" />
        <label className="button-label">
            <div className="knob"></div>
            <div className="button-on">On</div>
            <div className="button-off">Off</div>
        </label>
        <p>{label}</p>
    </div>
)}


export default FilterButton