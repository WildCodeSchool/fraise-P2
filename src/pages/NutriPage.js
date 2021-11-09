import React from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCards from '../components/dietcards/DietCards';
import DietCard from "../components/dietCard/DietCard";
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';
import useCustomHook from "../components/useCustomHook";

const NutriPage = ({specialDiet, description}) => {
    const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=egg&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`);

    console.log(specialDiet);

    return (
    <>
      <section className="diet-filters">
        {/* {SpecialDiets.map((diet, index) => ( <FilterButton key={index} label={diet.specialDiet} /> ))} */}
        <FilterButton label={specialDiet} />
        
      </section>
      <section className="filters-result">
        < NutriTitle description={description} />
        < DietCards specialDiet={specialDiet} />
      </section>

      {/* Changes taken from Rodolphe : */}
      {/* <section>
      {dataProducts.map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          />
      ))}
      </section> */}
    </>
  )};

export default NutriPage;
