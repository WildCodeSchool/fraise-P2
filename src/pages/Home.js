
import Category from '../components/category';



const regimeProfile = [
  
  { linkTo:"/pageEggs", color: "dark_blue", regime: "Intolérence au gluten" },
  { linkTo:"/pageLactose", color: "creme_blue", regime: "Intolérence au lactose" },
  { linkTo:"pageEggs", color: "creme_blue", regime: "Allergie aux oeufs" }
  //{ linkTo:, color: "blue", regime: "Intolérence FodMap" },
  //{ linkTo:, color: "dark_blue", regime: "Allergie fruits à coque" },
  
  //{ linkTo:, color: "blue", regime: "Allergie crustacés" },
  //{ linkTo:, color: "dark_blue", regime: "Régime : sportif" },
  //{ linkTo:, color: "creme_blue", regime: "Régime : végétarien" },
  //{ linkTo:, color: "blue", regime: "Endométriose" }
]

const Home = () => {
  
  
  return (
    <>
    <main className="container-home">
      <div className="card-my-profil">mon profil perso</div>
      <section className="container-profil-cards">
     
        {regimeProfile.map(({ color, regime ,linkTo}) => (<Category linkTo= {linkTo} className="profil-card" key={regime} color={color} regime={regime} />))}
      </section>
    </main>
    </>
  );
}

export default Home; 
