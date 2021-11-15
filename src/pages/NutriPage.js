import React, {useState,useContext, useEffect} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCard from "../components/dietCard/DietCard";
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';
import useCustomHook from "../components/useCustomHook";
import { ProductsContext } from '../context/ProductsContext';

const NutriPage = ({description, specialDiet, labelsArray}) => {
    // const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=egg&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`);
    // ===============================================

    const {productsList} = useContext(ProductsContext)
    const [rangeValue, setRangeValue] = useState(10);
    const [query, setQuery] = useState("");
    //================================================

    const [filterGluten, setFilterGluten] = useState(false);
    const [filterLactose, setFilterLactose] = useState(false);
    const [filterEggs, setFilterEggs] = useState(false);
    const [filterFodmap, setFilterFodmap] = useState(false);
    const [filterNuts, setFilterNuts] = useState(false);
    const [filterSeafood, setFilterSeafood] = useState(false);
    const [filterSport, setFilterSport] = useState(false);
    const [filterVeggie, setFilterVeggie] = useState(false);
    const [filterEndometriose, setFilterEndometriose] = useState(false);

    const handleClick = (e) => {
        if (e.target.id == "filter-Gluten"){ setFilterGluten(!filterGluten); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Lactose"){ setFilterLactose(!filterLactose); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Fodmap"){ setFilterFodmap(!filterFodmap); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Nuts"){ setFilterNuts(!filterNuts); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Eggs"){ setFilterEggs(!filterEggs); setIsClicked(!isClicked)}
        if (e.target.id == "filter-SeaFood"){ setFilterSeafood(!filterSeafood); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Sport"){ setFilterSport(!filterSport); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Veggie"){ setFilterVeggie(!filterVeggie); setIsClicked(!isClicked)}
        if (e.target.id == "filter-Endometriose"){ setFilterEndometriose(!filterEndometriose); setIsClicked(!isClicked)}
    }

    const [keyWordDiet, setKeyWordDiet] = useState("key word");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
      if (filterGluten) { 
        setKeyWordDiet("gluten")
      } else if (filterLactose) { 
        setKeyWordDiet("lactose")
      } else if (filterNuts) { 
        setKeyWordDiet("nuts")
      } else if (filterEggs) { 
        setKeyWordDiet("eggs")
      } else {
        setKeyWordDiet("")
      }
    }, [isClicked])

    const sortedListProd = productsList.filter((prod) => {
      if(
      !prod.allergens.includes(keyWordDiet) && 
      !prod.allergens_from_ingredients.includes(keyWordDiet)&&
      !prod.allergens_hierarchy.includes(keyWordDiet)
      ){ 
        return prod
      }});

    return (
    <>
      <section className="diet-filters">
        {labelsArray.map(label => (
          <FilterButton key={label} label={label} handleClick={handleClick} setFilterGluten={setFilterGluten} filterGluten={filterGluten}/>
        ))} 
      </section>
      <section className="test">
        <h3>Le key word est:</h3>
        <p>{keyWordDiet}</p>
        {filterGluten ? (<p>Gluten is on</p>) : (<p>Gluten is off</p>)}
      </section>
      <section className="filters-result">
        <NutriTitle description={description} />
        <section className="diet-cards">
            <div className="products-list">
                {sortedListProd.map((element,index) => (
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
