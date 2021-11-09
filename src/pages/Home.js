import Category from '../components/category';
import SpecialDiets from "../components/specialdiets/SpecialDiets";
import { useState } from 'react';
import NutriPage from './NutriPage';

const dietProfile = [
  { color: "dark_blue", specialDiet:"gluten", description: "Intolérence au gluten" },
  { color: "creme_blue", specialDiet:"lactose", description: "Intolérence au lactose" },
  { color: "blue", specialDiet:"fodmap", description: "Intolérence FodMap" },
  { color: "dark_blue", specialDiet:"nuts", description: "Allergie fruits à coque" },
  { color: "creme_blue", specialDiet:"eggs", description: "Allergie aux oeufs" },
  { color: "blue", specialDiet:"seaFood", description: "Allergie crustacés" },
  { color: "dark_blue", specialDiet:"sport", description: "Régime : sportif" },
  { color: "creme_blue", specialDiet:"veggie", description: "Régime : végétarien" },
  { color: "blue", specialDiet:"endometriose", description: "Endométriose" }
]

const Home = () => {
  const [homeDisplayed, setHomeDisplayed] = useState(true);
  const [nutriPageDisplayed, setNutriPageDisplayed] = useState(false);
  const [chosenDiet, setChosenDiet] = useState();

  const handleClick = (e) => {
    setHomeDisplayed(false);
    setNutriPageDisplayed(true);
    console.log("La valeur de la catégorie est :")
    console.log(e.target.value);
    setChosenDiet(e.target.value);
  };

  return (
    <main>
      <div className={homeDisplayed ? "container-home" : "hidden"}>
        <div className="card-my-profil">mon profil perso</div>
        <section className="container-profil-cards">
          {dietProfile.map((diet) => {

            return (
            <Category 
              key={diet.specialDiet} 
              color={diet.color} 
              specialDiet={diet.specialDiet}
              description={diet.description} 
              value={diet}
              onClick={handleClick} 
              />)
          })
          }
        </section>
      </div>
      <div className={nutriPageDisplayed ? "nutri-page" : "hidden"}>
        <NutriPage chosenDiet={chosenDiet}/>
      </div>
    </main>
  );
}

export default Home; 
