import { useState } from "react"

export const [filterGluten, setfilterGluten] = useState(false);
export const [filterLactose, setfilterLactose] = useState(false);
export const [filterEggs, setfilterEggs] = useState(false);

export const dietProfile = [
    { color: "dark_blue", specialDiet:"Gluten", description: "Intolérence au gluten"},
    { color: "creme_blue", specialDiet:"Lactose", description: "Intolérence au lactose" },
    { color: "blue", specialDiet:"Fodmap", description: "Intolérence FodMap" },
    { color: "dark_blue", specialDiet:"Nuts", description: "Allergie fruits à coque" },
    { color: "creme_blue", specialDiet:"Eggs", description: "Allergie aux oeufs" },
    { color: "blue", specialDiet:"SeaFood", description: "Allergie crustacés" },
    { color: "dark_blue", specialDiet:"Sport", description: "Régime : sportif" },
    { color: "creme_blue", specialDiet:"Veggie", description: "Régime : végétarien" },
    { color: "blue", specialDiet:"Endometriose", description: "Endométriose" }
  ]

export const labelsArray = (dietProfile.map(diet => diet.specialDiet));


  // { color: "dark_blue", specialDiet:"gluten", description: "Intolérence au gluten", stateOn: () => setfilterGluten(true), stateOff: () => setfilterGluten(false)},

