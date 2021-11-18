
import React, {useState,useContext} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCard from "../components/dietCard/DietCard";
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton'
import styled,{ ThemeProvider } from "styled-components";

import { ProductsContext } from '../context/ProductsContext';

const StyleApp = styled.div
  `color: ${props => props.theme.color}`
;

const NutriPage = ({description, specialDiet, labelsArray}) => {
   
    const {productsList,onCheck,setOncheck,mainFilter,setMainFilter} = useContext(ProductsContext)

   
   
    // On toggle click set diet value in array Mainfilter of allergens
    const handleClick = (e) => {
      console.log("Allergen selected : ",e.target.id)

        const allerg = e.target.id

        if(!mainFilter.includes(`en:${allerg}`)){
          setMainFilter([...mainFilter,`en:${allerg}`])
      
        }else if (mainFilter.includes(`en:${allerg}`)) {
          setMainFilter(mainFilter.filter(diet => diet !== `en:${allerg}`))

        }else{
          return [...mainFilter]
          
        }
        
       
      
        
    }

    const handleCheckToggle = ()=> {
      setOncheck(prevCheck => !prevCheck)
    
    }

    


    const [rangeValue, setRangeValue] = useState(20);
    const [query, setQuery] = useState("");

    // ============SEARCH BAR ELEMENT ======================
   
    const filterProductList = productsList.filter(name => {
      
      return name.product_name_fr.toLowerCase().includes(query.toLowerCase())
       
      });

    // ====== onChange input value get query value ======
    const onChange = e => {
      setQuery(e.target.value);
    };
    // =====  on click avoid to refresh the page =======
    
      const onSubmit = e => {
      e.preventDefault();  
        
    };

    // =========  MULTIPLE TOGGLE FILTER ==========
  
      const filterByDiet = filterProductList.filter((prod) => {
      console.log(!prod.allergens_hierarchy.some((allergen) => mainFilter.includes(allergen)))
      return !prod.allergens_hierarchy.some((allergen) => mainFilter.includes(allergen));
    });
   
      console.log("filtered products List : ", filterByDiet )
   

    // ========= SLIDER RANGE ELEMENT ============
    
      filterByDiet.length = rangeValue;
      

    // ===========================================
  
    return (
    
       <>
      <section className="diet-filters">
      {labelsArray.map(label => (
        <FilterButton key={label}
        label={label} 
        value={onCheck}
        handleClick={handleClick}
        handleCheck={handleCheckToggle}
        rounded={onCheck}
        isToggled={onCheck}
     
        />
      ))} 
      </section>
      
      
      <section className="filters-result">
        <NutriTitle description={description} />
        <section className="diet-cards">
        <div className="search-bar-countainer">
          <form 
            onSubmit={onSubmit} 
            className="search-form">
            <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="on"
                placeholder="Find your product"
            />
          </form>

          <input
            type="range"
            min="1"
            max="50"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />

          {mainFilter.length > 0 && <StyleApp className="cancel-search" onClick={()=> setMainFilter([])}>Annuler la recherche</StyleApp> }                       
        </div>
        
            {
            filterByDiet.map((element,index) => (
            <DietCard 
            key={index} 
            image_front_small_url={element.image_front_small_url}
            brands={element.brands}
            categories={element.categories}
            ingredients_text={element.ingredients_text}
            generic_name_fr={element.generic_name_fr}
            nutrition_grades={element.nutrition_grades}
                />  
            ))} 
            
        </section>
      </section>
     </>
     
  )};

export default NutriPage;
