import React, {useState,useContext} from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCards from '../components/dietcards/DietCards';
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
        if (e.target.id == "filter-Gluten"){ setFilterGluten(!filterGluten)}
        if (e.target.id == "filter-Lactose"){ setFilterLactose(!filterLactose)}
        if (e.target.id == "filter-Fodmap"){ setFilterFodmap(!filterFodmap)}
        if (e.target.id == "filter-Nuts"){ setFilterNuts(!filterNuts)}
        if (e.target.id == "filter-Eggs"){ setFilterEggs(!filterEggs)}
        if (e.target.id == "filter-SeaFood"){ setFilterSeafood(!filterSeafood)}
        if (e.target.id == "filter-Sport"){ setFilterSport(!filterSport)}
        if (e.target.id == "filter-Veggie"){ setFilterVeggie(!filterVeggie)}
        if (e.target.id == "filter-Endometriose"){ setFilterEndometriose(!filterEndometriose)}
    }

    return (
    <>
      <section className="diet-filters">
        {labelsArray.map(label => (
          <FilterButton key={label} label={label} handleClick={handleClick} setFilterGluten={setFilterGluten} filterGluten={filterGluten}/>
        ))} 
      </section>
      <section className="filters-result">
        <NutriTitle description={description} />
        <DietCards specialDiet={specialDiet} />
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
