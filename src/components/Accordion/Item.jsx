import React from "react";
import { useState } from "react";
const Item = ({
  id,
  answer,
  question,
  isSelected,
  setIsSelected,
  multipleSelection,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  const accordionHandler = (id) => {
    if (multipleSelection) {
      setIsShowing(!isShowing);
    } else {
      setIsSelected(id === isSelected ? null : id);
    }
  };
  return (
    <article key={id} className="accordion">
      <div>
        <h3>{question}</h3>
        <button
          onClick={() => accordionHandler(id)}
          className={`${
            multipleSelection
              ? isShowing && "btn-selected"
              : isSelected && isSelected === id && "btn-selected"
          } btn-notSelected`}
        >
          {multipleSelection
            ? isShowing
              ? "-"
              : "+"
            : isSelected && isSelected === id
            ? "-"
            : "+"}
        </button>
      </div>
      {multipleSelection
        ? isShowing && <p>{answer}</p>
        : isSelected === id && <p>{answer}</p>}
    </article>
  );
};

export default Item;
