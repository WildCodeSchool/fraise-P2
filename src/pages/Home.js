import React from "react";

const Home = () => {
  return (
    <main className="container-home">
      <div className="card-my-profil">mon profil perso</div>
      <section className="container-profil-cards">
        <div className="profil-card dark_blue">Intolérence au gluten</div>
        <div className="profil-card creme_blue">Intolérence au lactose</div>
        <div className="profil-card blue">Intolérence FodMap</div>
        <div className="profil-card dark_blue">Allergie fruits à coque</div>
        <div className="profil-card creme_blue">Allergie aux oeufs</div>
        <div className="profil-card blue">Allergie crustacés</div>
        <div className="profil-card dark_blue">régime : sportif</div>
        <div className="profil-card creme_blue">Régime : végétarien</div>
        <div className="profil-card blue">Endométriose</div>
      </section>
    </main>
  );
}

export default Home;
