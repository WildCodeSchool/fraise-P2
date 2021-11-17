import React, {useState,useContext, useEffect} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCard from "../components/dietCard/DietCard";
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';
import useCustomHook from "../components/useCustomHook";
import { ProductsContext } from '../context/ProductsContext';

const NutriPage = ({description, specialDiet, labelsArray}) => {
   
    // ===============================================

    const {productsList} = useContext(ProductsContext)
     
    
   
    //================================================

    /* const [filterGluten, setFilterGluten] = useState(false); */
    /* const [filterLactose, setFilterLactose] = useState(false);
    const [filterEggs, setFilterEggs] = useState(false);
    const [filterFodmap, setFilterFodmap] = useState(false);
    const [filterNuts, setFilterNuts] = useState(false);
    const [filterSeafood, setFilterSeafood] = useState(false);
    const [filterSport, setFilterSport] = useState(false);
    const [filterVeggie, setFilterVeggie] = useState(false);
    const [filterEndometriose, setFilterEndometriose] = useState(false); */

    const [mainFilter,setMainFilter]=useState([]);

    const handleClick = (e) => {
      console.log(e.target.id)
        const allerg = e.target.id.split('-')[1]
        if(!mainFilter.includes(allerg)){
          setMainFilter([...mainFilter,`en:${allerg}`])
         

        }

        /* if (e.target.id == "filter-gluten"){ setFilterGluten(!filterGluten); setIsClicked(!isClicked)} */
        /*if (e.target.id == "filter-milk"){ setFilterLactose(!filterLactose); setIsClicked(!isClicked)}
        if (e.target.id == "filter-fodmap"){ setFilterFodmap(!filterFodmap); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Nuts"){ setFilterNuts(!filterNuts); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Eggs"){ setFilterEggs(!filterEggs); setIsClicked(!isClicked)}
        if (e.target.id == "filter-SeaFood"){ setFilterSeafood(!filterSeafood); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Sport"){ setFilterSport(!filterSport); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Veggie"){ setFilterVeggie(!filterVeggie); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Endometriose"){ setFilterEndometriose(!filterEndometriose); setIsClicked(!isClicked)} */
    }

    const [keyWordDiet, setKeyWordDiet] = useState("key word");
    const [isClicked, setIsClicked] = useState(false);

    // useEffect(() => {
    //     if (filterGluten) { 
    //     setKeyWordDiet("gluten")
    //   } else if (filterLactose) { 
    //     setKeyWordDiet("lactose")
    //   } else if (filterNuts) { 
    //     setKeyWordDiet("nuts")
    //   } else if (filterEggs) { 
    //     setKeyWordDiet("eggs")
    //   } else {
    //     setKeyWordDiet("")
    //   }
    // }, [isClicked])

    

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

    // =====================================================
    

    // ========= TEST MULTIPLE TOGGLE FILTER ==========
  
   
    
    
     

    const filterByDiet = productsList.filter((prod) => {
      if(mainFilter.length > 1){
        return setMainFilter([])
        
      }else{
        return !prod.allergens_hierarchy.some((allergen) => mainFilter.includes(allergen));
      }
      //ajout ou supprimer via id (key) dans la fonction handlechange
        
    });
        
  /* { selectedDiet && <h5 onClick={() => setSelectedDiet("")}>annuler recherche</h5> } */

         

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
        {/* {selectedDiet && <h5 onClick={()=> setSelectedDiet("")}>annuler recherche</h5> } */}
        
      </section>
      <section className="test">
        <h3>Le key word est:</h3>
        <p>{keyWordDiet}</p>


        {/* {filterGluten ? (<p>Gluten is on</p>) : (<p>Gluten is off</p>)} */} 

         {labelsArray.map(label => (
          <FilterButton key={label}
           label={label} 
           handleClick={handleClick} 
           /* setFilterGluten={setFilterGluten} 
           filterGluten={filterGluten} *//>
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
