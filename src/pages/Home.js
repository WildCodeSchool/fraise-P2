import React from "react";
import Category from '../components/Category';

const arrayRegime = [
  { colorB: "my-profil", regime: "Mon profil perso" },
  { colorB: "dark_blue", regime: "Intolérence au gluten" },
  { colorB: "creme_blue", regime: "Intolérence au lactose" },
  { colorB: "blue", regime: "Intolérence FodMap" },
  { colorB: "dark_blue", regime: "Allergie fruits à coque" },
  { colorB: "creme_blue", regime: "Allergie aux oeufs" },
  { colorB: "blue", regime: "Allergie crustacés" },
  { colorB: "dark_blue", regime: "régime : sportif" },
  { colorB: "creme_blue", regime: "Régime : végétarien" },
  { colorB: "blue", regime: "Endométriose" }
]

const Home = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <div className="basique">
        {arrayRegime.map(({ colorB, regime }) => (<Category colorB={colorB} regime={regime} />))}
      </div>
    </div>
  );
}

export default Home;
