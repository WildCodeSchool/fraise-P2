import React, {useState} from 'react';
import "./DietCard.css";
import StarRange from './StarRange';
import styled from "styled-components";

const StyleApp = styled.div`
  color: ${props => props.theme.color}
`;

const DietCard = ({
    brands,
    image_front_small_url,
    categories,
    ingredients_text,
    nutrition_grades,
    generic_name_fr}) => {
    
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(!isClicked);

    return ( 
    
    <section className="diet-card">
        <StyleApp className={!isClicked ? `product-card` : `expended-product-card`} onClick={handleClick}>
            <img src={image_front_small_url} alt-text="Logo du produit"/>
            <div className="product-informations">
                <h2>{generic_name_fr}</h2>
                <h4>{brands}</h4>   
                <div className={!isClicked ? "hidden" : "product-description"}>
                    <p>{categories}</p>
                    <p>{ingredients_text}</p>
                    <img  src={`https://fr.openfoodfacts.org/images/misc/nutriscore-${nutrition_grades}.svg`} alt="" />               
                    
                    <StarRange/>
                </div>
            </div>
        </StyleApp>
    </section>
     
    );
};

export default DietCard;
