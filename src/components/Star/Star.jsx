import React, { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <section className="main star-main">
      <div className="star-container">
        {[...Array(10)].map((star, i) => {
          const starId = i + 1;
          return (
            <label key={starId}>
              <input
                type="checkbox"
                value={starId}
                onClick={(e) => setRating(e.target.value)}
              />
              <FaStar
                className="star"
                color={starId <= (hover || rating) ? "goldenrod" : "whitesmoke"}
                onMouseEnter={() => setHover(starId)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default Star;
