
import React, {useState,useContext} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCard from "../components/dietCard/DietCard";
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';
import { ProductsContext } from '../context/ProductsContext';

const NutriPage = ({description, specialDiet, labelsArray}) => {
   
    const {productsList,onCheck,setOncheck} = useContext(ProductsContext)

    const handleCheckToggle = (e)=> {
      setOncheck(prevCheck => !prevCheck)
    
    }

    const [mainFilter,setMainFilter]=useState([]);
   


    // On toggle click set diet value in array Mainfilter of allergens
    const handleClick = (e) => {
      console.log(e.target.id)
        const allerg = e.target.id.split('-')[1]
        if(!mainFilter.includes(allerg)){
          setMainFilter([...mainFilter,`en:${allerg}`])
      
        }
    }

    const [selectedDiet,setSelectedDiet] = useState('')
    const toggleChoice = ["gluten","lactose","eggs"]
    const [rangeValue, setRangeValue] = useState(10);
    const [query, setQuery] = useState("");

    // ============SEARCH BAR ELEMENT ======================
   
    const filterProductList = productsList.filter(name => {
      // console.log(name.brands.toLowerCase().includes(query.toLowerCase()))
        return name.brands.toLowerCase().includes(query.toLowerCase())
       
      });

    // ====== onChange input value get query value ======
    const onChange = e => {
      setQuery(e.target.value);
    };
    // =====  on click avoid to refresh the page =======
    
      const onSubmit = e => {
      e.preventDefault();  
        
    };

    // ========= TEST MULTIPLE TOGGLE FILTER ==========
  
    const filterByDiet = productsList.filter((prod) => {
      return !prod.allergens_hierarchy.some((allergen) => mainFilter.includes(allergen));
    });
        
  
      console.log("toggle filter",filterByDiet)
    //===================================

    // ========= SLIDER RANGE ELEMENT ============
    
   filterByDiet.length = rangeValue;
      

    // ===========================================
  
    return (
    <>
      <section className="diet-filters">

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

        <input
          type="range"
          min="1"
          max="10"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {/* <ul>
          {toggleChoice.map(radio => {
            return(
            <li key={radio}>
              <input 
              type="radio" 
              value={radio} 
              id={radio}
              checked={radio === selectedDiet} 
              onChange={(e)=> setSelectedDiet(e.target.value,console.log(e.target.value))}/>
              <label htmlFor="radio">{radio}</label>
            </li>

          );
          })}
        </ul> */}
        {selectedDiet && <h5 onClick={()=> setSelectedDiet("")}>annuler recherche</h5> }
        
      </section>
      <section className="test">
     
         {labelsArray.map(label => (
          <FilterButton key={label}
           label={label} 
           handleClick={handleClick}
           value={onCheck}
           handleCheck={handleCheckToggle}
        
          />
        ))} 

      </section>
      <section className="filters-result">
        <NutriTitle description={description} />
        <section className="diet-cards">
            <div className="products-list">
                {
                
                filterByDiet.map((element,index) => (

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
            </div>
        </section>
      </section>
    </>
  )};

export default NutriPage;
