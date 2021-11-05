import React from "react";
import Category from '../components/category';

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
  return (
    <main className="container-home">
      <div className="card-my-profil">mon profil perso</div>
      <section className="container-profil-cards">
        {regimeProfile.map(({ color, regime }) => (<Category className="profil-card" key={regime} color={color} regime={regime} />))}
      </section>
    </main>
  );
}

export default Home; 
