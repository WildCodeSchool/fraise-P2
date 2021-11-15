import React, {useState} from 'react'
import "./FilterButton.css"

const FilterButton = ({label, handleClick, filterGluten}) => {

    return (
    <div className="filter-button-countainer">
        <input type="checkbox" id={`filter-${label}`} onClick={handleClick}/>
        <label className="button-label" htmlFor={`filter-${label}`}>
            <div className="knob"></div>
            <div className="button-on">On</div>
            <div className="button-off">Off</div>
        </label>
        <p>{label}</p>
    </div>
)}


export default FilterButton

    {/* Ternaire pour plus tard :
    // status == on ? (
    //     <div className="filter-button-on">
    //         <div className="button-on">
    //             <div className="button-cercle"></div>
    //         </div>
    //         <p>{label}</p>
    //     </div>
    // ) : (
    //     <div className="filter-button-off">
    //         <div className="button-off">
    //             <div className="button-cercle"></div>
    //         </div>
    //         <p>{label}</p>
    //     </div>
    // ) */}