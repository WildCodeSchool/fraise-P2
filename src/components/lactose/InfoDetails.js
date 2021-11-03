import React, { useState } from "react";
import Details from "../lactose/Details";

const InfoDetails = ({ ingredients }) => {
  const [show, setShow] = useState(false);
  const { image_front_small_url, url,ingredients_tags} = ingredients;

  return (
    <div className="recipe">
      <img src={image_front_small_url} alt="img" />
      <a href={url} target="_blank" >
        More details
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Details ingredients={ingredients_tags} />}
    </div>
  );
};

export default InfoDetails;