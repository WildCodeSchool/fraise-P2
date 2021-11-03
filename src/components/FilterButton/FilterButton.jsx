import React from 'react'
import "./FilterButton.css"

const FilterButton = (label, status) => (
    <div className="filter-button-on">
        <div className="button-on">
            <div className="button-cercle"></div>
        </div>
        <p>{label}</p>
    </div>
)
    
    // Ternaire pour plus tard :
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
    // )


export default FilterButton
