import React from 'react';
import NutriTitle from '../components/nutrititle/NutriTitle'
import './NutriPage.css'
import DietCards from '../components/dietcards/DietCards'
import SpecialDiets from '../components/specialdiets/SpecialDiets';
import FilterButton from '../components/FilterButton/FilterButton';

const NutriPage = () => {
    console.log(`This is our special Diets ${SpecialDiets}`)

    return (
    <main className="nutri-page">
      <section className="diet-filters">
        {/* {SpecialDiets.map((diet, index) => ( <FilterButton key={index} label={diet.specialDiet} /> ))} */}
        <FilterButton label={SpecialDiets[0].specialDiet} />
        
      </section>
      <section className="filters-result">
        < NutriTitle description={SpecialDiets[0].description} />
        < DietCards specialDiet={SpecialDiets[0].specialDiet} />
      </section>
    </main>
  )};

export default NutriPage;