import React from "react";

function Home() {
  return (
    <div className="container">
      <h2>Home</h2>

      <div className="basique">
        <div className="my-profil">mon profil perso</div>
        <div className="dark_blue">Intolérence au gluten</div>
        <div className="creme_blue">Intolérence au lactose</div>
        <div className="blue">Intolérence FodMap</div>
        <div className="dark_blue">Allergie fruits à coque</div>
        <div className="creme_blue">Allergie aux oeufs</div>
        <div className="blue">Allergie crustacés</div>
        <div className="dark_blue">régime : sportif</div>
        <div className="creme_blue">Régime : végétarien</div>
        <div className="blue">Endométriose</div>
      </div>
    </div>
  );
}

export default Home;
