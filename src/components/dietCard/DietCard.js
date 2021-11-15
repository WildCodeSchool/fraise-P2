import React, {useState} from 'react';
import "./DietCard.css";
import StarRange from './StarRange';

const DietCard = ({
    brands,
    image_front_small_url,
    categories,
    ingredients_text,
    nutrition_grade_fr,
    generic_name_fr}) => {
    
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(!isClicked);

    return ( 
           
    <section className="diet-card">
    
        <div className={!isClicked ? `product-card` : `expended-product-card`} onClick={handleClick}>
            <img src={image_front_small_url} alt-text="Logo du produit"/>
            <div className="product-informations">
                <h2>{generic_name_fr}</h2>
                <h3>{brands}</h3>
                <h3>{ingredients_text}</h3>
                <h3>{nutrition_grade_fr}</h3>

                
                <p className={isClicked ? "hidden" : "product-tags"}>
                
                </p>
                <p className={!isClicked ? "hidden" : "product-description"}>{categories}
                <StarRange/>
                
                </p>
               
            </div>
            
        </div>
     
    </section>
    );
};

export default DietCard;
