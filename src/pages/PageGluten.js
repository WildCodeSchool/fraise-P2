<<<<<<< HEAD
import React from 'react'
import Gluten from '../components/Gluten/Gluten';
import NutriTitle from '../components/nutrititle/NutriTitle'

function NutriPageGluten() {
    return (  
        <main className="nutri-page">
            <NutriTitle />
            <Gluten specialDiet="gluten"/>
        </main>
    )
}
=======
import React from 'react';
import useCustomHook from "../components/useCustomHook";
import DietCard from "../components/dietCard/DietCard";
import "../components/dietCard/DietCard.css";

function NutriPageGluten() {
    //**** */ probablement appeler le customhook avec useEffect ****
    const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=gluten&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`)
    return (
    <div className="data-container">
    <ul className="products-list">
        {dataProducts.map((element,index) => (
            <DietCard 
            key={index} 
            image_front_small_url={element.image_front_small_url}
            brands={element.brands}
            categories={element.categories}
            ingredients_text={element.ingredients_text}
            />
        ))}
    </ul>
    </div>
    
    );
  }

>>>>>>> feat2/anais

export default NutriPageGluten 
