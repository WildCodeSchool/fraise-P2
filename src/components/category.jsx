import React from 'react'
import "../pages/home.css"

function Category({color, regime}) {
    return (
        <div className={`profil-card ${color}`}><p>{regime}</p>
        </div>
    ) 
}

export default Category;

