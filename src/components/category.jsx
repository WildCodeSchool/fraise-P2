import React from 'react';
import "../pages/home.css";
import { Link } from 'react-router-dom';


function Category({color, specialDiet, description, value, handleClick}) {
    return (
        <div>
                <div className={`profil-card ${color}`} onClick={() => handleClick(value)}>
                    <p>{description}</p>
                </div>
        </div>
    ) 
}

export default Category;

