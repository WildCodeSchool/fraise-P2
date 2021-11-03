import React from "react";
import Card from "./Card";


const array = [
    {
        name: "haricot",
        color: "vert",
        nutriment: "vitamine A"
    },
    {
        name: "asperge",
        color: "jaune",
        nutriment: "vitamine B"
    },
    {
        name: "tomate",
        color: "rouge",
        nutriment: "vitamine A"
    }
]

function Cards () {
    return (
        <div>
            <h2>coucou</h2>
            {array.map((product, index) => (
                <Card 
                    key={index}
                    name={product.name}
                    color={product.color}
                    nutriment={product.nutriment}
                />
            ))}
        </div>
    )
}

export default Cards;


