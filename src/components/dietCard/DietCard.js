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
<<<<<<< HEAD
=======
               
>>>>>>> 68e9271 (-)

                <p className={isClicked ? "hidden" : "product-tags"}>
<<<<<<< HEAD
=======
                
                </p>
                <p className={!isClicked ? "hidden" : "product-description"}>{categories}
                {/* <p>{ingredients_text}</p>
                <p>{nutrition_grade_fr}</p> */}
                <StarRange/>
                
>>>>>>> 68e9271 (-)
                </p>
                <div className={!isClicked ? "hidden" : "product-description"}>
                    <p>{categories}</p>
                    <p>{ingredients_text}</p>
                    <p>{nutrition_grade_fr}</p>
                    <StarRange/>
                </div>
               
            </div>
            
        </div>
     
    </section>
    );
};

export default DietCard;
