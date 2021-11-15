import React, {useState} from 'react'
import "./FilterButton.css"

const FilterButton = ({label, handleClick, filterGluten}) => {
    return (
    <div className="filter-button-countainer" value={label} onClick={handleClick}>
        <input type="checkbox" className="filter-button" />
        <label className="button-label" htmlFor="filter-button">
            <div className="knob"></div>
            <div className="button-on">On</div>
            <div className="button-off">Off</div>
        </label>
        {filterGluten ? (<p>{label} on</p>) : (<p>{label} off</p>)}
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