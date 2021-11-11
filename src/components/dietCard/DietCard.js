import React, {useState} from 'react';
import "./DietCard.css";

const DietCard = ({brands,image_front_small_url,categories,ingredients_text}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(!isClicked);

    return (    
    <section className="diet-card">
        <div className={!isClicked ? `product-card` : `expended-product-card`} onClick={handleClick}>
            <img src={image_front_small_url} alt-text="Logo du produit"/>
            <div className="product-informations">
                <h3>{brands}</h3>
                <p className={isClicked ? "hidden" : "product-tags"}>#tags #tags #tags</p>
                <p className={!isClicked ? "hidden" : "product-description"}>{categories}</p>
            </div>
        </div>
    </section>
    );
};

export default DietCard;
