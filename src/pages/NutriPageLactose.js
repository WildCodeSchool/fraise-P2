import React from 'react';
import Lactose from '../components/lactose/Lactose';
import FilterButton from '../components/FilterButton/FilterButton.jsx'


const NutriPageLactose = () => (
    <main>
      <h1>NutriPage Lactose</h1>
      <section className="toggle-buttons">
        <FilterButton label="Lactose"/>

      <Lactose />  
      </section>    
    </main>
  );


export default NutriPageLactose;
