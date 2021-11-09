import React, { useEffect } from 'react';
import useCustomHook from "../components/useCustomHook";
import DietCard from "../components/dietCard/DietCard";
import "../components/dietCard/DietCard.css";


const NutriPageEggs = () => {
  const aliment = "eggs"
    //  ===== request withproduct name =====
    const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${aliment}&search_simple=1&action=process&page_size=100&json=true`)
    // ====== normal request =====
    //`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=egg&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`
    
    //=========== without allergen and additif ================
    // const sortedListProd = dataProducts.sort((prod) => { if (!prod.allergens_from_ingredients && prod.additives_n === 0 && prod.additives_old_n === 0){
    //   console.log(prod)
    // }});

    //=========== without gluten ================
    //  const sortedListProd = dataProducts.filter((prod)=> {if(
    //   prod.allergens.includes("gluten") === false && 
    //   prod.allergens_from_ingredients.includes("gluten") === false &&
    //   prod.allergens_hierarchy.includes("gluten") === false
    //   ){ 
    //     console.log(prod)
    //  }});
    // // //=========== without lactose ================
    // const sortedListProd = dataProducts.filter((prod)=> {if(
    //     prod.allergens.includes("milk") === false && 
    //     prod.allergens_from_ingredients.includes("milk") === false &&
    //     prod.allergens_hierarchy.includes("milk") === false
    //     ){ 
    //       console.log(prod)
    //    }});

        // //=========== without eggs ================
    const sortedListProd = dataProducts.filter((prod)=> {if(
      !prod.allergens.includes("eggs") && 
      !prod.allergens_from_ingredients.includes("eggs")&&
      !prod.allergens_hierarchy.includes("eggs")
      ){ 
        console.log(prod)
     }});
    
    
    
  
 
  return (
  <div className="data-container">
  <ul className="products-list">
      {/* {dataProducts.map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          />
      ))} */}
      {/* additifs and allergens strict */}
      {/* {dataProducts
            .filter((prod) => 
            !prod.allergens_from_ingredients && prod.additives_n === 0 && prod.additives_old_n === 0)
            
            .map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          />
      ))} */}
      {/* Milk allergen */}
      {/* {dataProducts
            .filter((prod)=> (
            prod.allergens.includes("gluten") === false && 
            prod.allergens_from_ingredients.includes("gluten") === false &&
            prod.allergens_hierarchy.includes("gluten") === false))
            .map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          />
      ))} */}
      {/* Eggs allergen */}
      {dataProducts
            .filter((prod)=> (
            prod.allergens.includes("eggs") === false && 
            prod.allergens_from_ingredients.includes("eggs") === false &&
            prod.allergens_hierarchy.includes("eggs") === false))
            .map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          // product name / nutriscore 
          />
      ))}
  </ul>
  </div>
  
  );


  }


export default NutriPageEggs;
