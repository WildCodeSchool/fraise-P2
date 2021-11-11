import React, { useEffect } from 'react';
import FilterButton from '../components/FilterButton/FilterButton.jsx'
// import useCustomHook from "../components/useCustomHook";
import DietCard from "../components/dietCard/DietCard";
import "../components/dietCard/DietCard.css";


const NutriPageLactose = () => {
  
    // const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=lactose&sort_by=unique_scans_n&page_size=100&page=3&sort_by=unique_scans_n&json=true`)
    // console.log(dataProducts)
 
 
  return(
    <>
      <h1>NutriPage Lactose</h1>
      {/* j'ai du commenter car mon hoo ne fonctionne pas avec ton conpensent jsx .. a resoudre le nom de l'extention<section className="toggle-buttons">
        <FilterButton label="Lactose"/>
      </section> */}
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
    </>
    );
  }


export default NutriPageLactose;
