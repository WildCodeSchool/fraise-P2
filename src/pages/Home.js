import React,{useEffect,useState} from "react";
import Category from '../components/category';
import useCustomHook from "../components/useCustomHook";
import DietCard from "../components/dietCard/DietCard";
import "../components/dietCard/DietCard.css";


const regimeProfile = [
  { color: "dark_blue", regime: "Intolérence au gluten" },
  { color: "creme_blue", regime: "Intolérence au lactose" },
  { color: "blue", regime: "Intolérence FodMap" },
  { color: "dark_blue", regime: "Allergie fruits à coque" },
  { color: "creme_blue", regime: "Allergie aux oeufs" },
  { color: "blue", regime: "Allergie crustacés" },
  { color: "dark_blue", regime: "Régime : sportif" },
  { color: "creme_blue", regime: "Régime : végétarien" },
  { color: "blue", regime: "Endométriose" }
]

const Home = () => {
  const {dataProducts} = useCustomHook(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=egg&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`)
  return (
    <>
   
    <main className="container-home">
      <div className="card-my-profil">mon profil perso</div>
      <section className="container-profil-cards">
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
        {regimeProfile.map(({ color, regime }) => (<Category className="profil-card" key={regime} color={color} regime={regime} />))}
      </section>
    </main>
    </>
  );
}

export default Home; 
