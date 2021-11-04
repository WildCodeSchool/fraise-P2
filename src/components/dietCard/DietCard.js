import React from 'react';
import "./DietCard.css";

const DietCard = ({brands,image_front_small_url,categories,ingredients_text}) => {
    return (    
    <div className="card">
        <img src={image_front_small_url} alt-text="Logo du produit"/>
        <div className="data-container ">
            <h3>{brands}</h3>
            <ul>
                <li>{categories}</li>
                <li>{ingredients_text}</li>
            </ul>
        </div>
    </div>
    );
};

export default DietCard;
