import React from 'react';
import "../pages/home.css";
import { Link } from 'react-router-dom';


function Category({color, specialDiet, description}) {
    return (
        <Link to="/NutriPage">
            <div className={`profil-card ${color}`}>
                <p>{description}</p>
            </div>
        </Link> 
    ) 
}

export default Category;

