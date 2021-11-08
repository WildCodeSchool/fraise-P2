import React from 'react'
import Gluten from '../components/Gluten/Gluten';
import NutriTitle from '../components/nutrititle/NutriTitle'

function NutriPageGluten() {
    return (  
        <main className="nutri-page">
            <NutriTitle />
            <Gluten specialDiet="gluten"/>
        </main>
    )
}

export default NutriPageGluten 
