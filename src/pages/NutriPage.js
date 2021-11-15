import React,{useContext, useState} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCard from "../components/dietCard/DietCard"
// import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';


import { ProductsContext } from '../context/ProductsContext';

const NutriPage = ({description, specialDiet}) => {
  const [query, setQuery] = useState("");
 
  const {productsList} = useContext(ProductsContext)

  const filteredBySearchName = productsList.filter(name => {
    return name.product_name.toLowerCase().includes(query.toLowerCase())

  });


  //   // //=========== Diet Requirement milk ================
  //   const sortedListProd = data.filter((prod)=> {if(
  //     !prod.allergens.includes("milk") && 
  //     !prod.allergens_from_ingredients.includes("milk")&&
  //     !prod.allergens_hierarchy.includes("milk")
  //     ){ 
  //       console.log(prod)
  //       return prod
  //     }});
        


  //   return (
  //   <>
  //     <section className="diet-filters">
  //       {/* {SpecialDiets.map((diet, index) => ( <FilterButton key={index} label={diet.specialDiet} /> ))} */}
  //       <FilterButton label={specialDiet} />
        
  //     </section>
  //     <section>
  //     <input
  //         type="range"
  //         min="1"
  //         max="10"
  //         value={rangeValue}
  //         onChange={(e) => setRangeValue(e.target.value)}
  //       />
  //     </section>
  //     <section className="filters-result">
  //       < NutriTitle description={description} />
  //       < DietCards specialDiet={specialDiet} />
  //     </section>

  
  const [rangeValue, setRangeValue] = useState(10);
  
   // //=========== Diet Requirement eggs ================
   const sortedListProd = productsList.filter((prod)=> {if(
    !prod.allergens.includes(`${specialDiet}`) && 
    !prod.allergens_from_ingredients.includes(`${specialDiet}`)&&
    !prod.allergens_hierarchy.includes(`${specialDiet}`)
    ){ 
      console.log(prod)
      // console.log(prod.brands)
      // console.log(prod.allergens)

      return prod
    }});
      
    // slide range to limit amount products on the page
    sortedListProd.length = rangeValue;
   

      // onChange input value get query value
      const onChange = e => {
      setQuery(e.target.value);
    };


    // on click post data from query
      const onSubmit = e => {
      e.preventDefault();
      
      
        
    };
  
  return (
    <div>
     <input
          type="range"
          min="1"
          max="10"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <form 
            onSubmit={onSubmit} 
            className="search-form">
            <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="on"
                placeholder="find your product"
            />
        </form>
      <ul>
        { sortedListProd.map((element,index) => (
          <DietCard 
          key={index} 
          image_front_small_url={element.image_front_small_url}
          brands={element.brands}
          categories={element.categories}
          ingredients_text={element.ingredients_text}
          generic_name_fr={element.generic_name_fr}
          nutrition_grade_fr={element.nutrition_grade_fr}
         
          />  
      ))}     
    </ul>
  </div> 
  );
  }

  


export default NutriPage;
