import React from 'react';
import "../pages/home.css";
import { Link } from 'react-router-dom';


function Category({color, regime,linkTo}) {
    return (
        <Link to={linkTo}>
        <div className={`profil-card ${color}`}>

        <p>{regime}</p>
        </div>
        </Link> 
    ) 
}

export default Category;

