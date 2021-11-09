import React from 'react';
import useCustomHook from "../components/useCustomHook";
import DietCard from "../components/dietCard/DietCard";
import "../components/dietCard/DietCard.css";

// Il faudrait renommer le component du coup :) - Anaïs

const PageEggs = () => {
  //**** */ probablement appeler le customhook avec useEffect ****
  const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=egg&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`)
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

export default PageEggs;
