import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import "./StarRange.css"

const StarRange = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (     
        <div className="starContainer ">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input className="input"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                key={i}
                size={30}
                color={ratingValue <= (hover || rating) ? "ffc107" : "e4E5E9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })} 
      </div>  
    );
};

export default StarRange;
