import React from "react";

const Card = props => {
    return (
        <div className = "Card">
            <div>
                <p>{props.name}</p>
                <p>{props.color}</p>
                <p>{props.nutriment}</p>
            </div>
        </div>
    )
}

export default Card;