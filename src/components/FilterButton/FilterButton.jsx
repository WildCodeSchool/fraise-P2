import React from 'react'
import "./FilterButton.css"

const FilterButton = ({label}) => {
    
    return (
    <div className="filter-button">
        <input type="checkbox" id="filter-button" />
        <label id="button" htmlFor="filter-button">
            <div id="knob"></div>
            <div id="button-on">On</div>
            <div id="button-off">Off</div>
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