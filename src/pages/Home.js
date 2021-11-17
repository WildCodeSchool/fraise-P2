import React,{useContext,useState} from "react";
import Category from '../components/category';
import SpecialDiets from "../components/specialdiets/SpecialDiets";
import { useState } from 'react';
import NutriPage from './NutriPage';
import { ProductsContext } from '../context/ProductsContext';



const dietProfile = [
  { color: "dark_blue", specialDiet:"gluten", description: "Intolérence au gluten" },
  { color: "creme_blue", specialDiet:"milk", description: "Intolérence au lactose" },
  { color: "blue", specialDiet:"nuts", description: "Allergie fruits à coque" },
  { color: "dark_blue", specialDiet:"eggs", description: "Allergie aux oeufs" },
  { color: "creme_blue", specialDiet:"soybeans", description: "Allergie aux Soja" },
  { color: "blue", specialDiet:"sesame-seeds", description: "Allergie aux graines sésames" }
  
]
 

const labelsArray = (dietProfile.map(diet => diet.specialDiet));

const Home = () => {
  

  // use check context (conexion between home & nutripage toggle boolen)
  const {onCheck,setOncheck,mainFilter,setMainFilter} = useContext(ProductsContext);

  const [homeDisplayed, setHomeDisplayed] = useState(true);
  const [chosenDiet, setChosenDiet] = useState();

  const handleClick = (value) => {
    setHomeDisplayed(false);
    setChosenDiet(value);
    //==================
    // On diet element click setStateDiet to true 
    setOncheck(prevCheck => !prevCheck)
    
    
  };

  return (
   <>
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
              handleClick={()=>
              {handleClick(diet);
              // Second Function
              if(!mainFilter.includes(`en:${diet.specialDiet}`)){
                setMainFilter([...mainFilter,`en:${diet.specialDiet}`])

              }else if (mainFilter.includes(`en:${diet.specialDiet}`)) {
                setMainFilter(mainFilter.filter(diet => diet !== `en:${diet.specialDiet}`))

              }else{
                return [...mainFilter]
              }
              console.log("Diet selected:",diet.specialDiet);
              }}
                setChosenDiet={setChosenDiet}
              />)
          })
          
          }
      
        </section>
      </div>
      
      <div className={!homeDisplayed ? "nutri-page" : "hidden"}>
        <NutriPage description={chosenDiet?.description} specialDiet={chosenDiet?.specialDiet} labelsArray={labelsArray}/>
        
      </div>
      
     </> 
  );
}

export default Home; 
