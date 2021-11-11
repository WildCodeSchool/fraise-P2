import React from 'react'
import './NutriTitle.css'

const NutriTitle = ({description}) => {
    return (
        <div className="nutri-title">
            <h1>{description}</h1>
        </div>
    )
}

export default NutriTitle
