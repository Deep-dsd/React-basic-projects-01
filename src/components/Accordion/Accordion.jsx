import React, { useState } from "react";
import data from "./data";
import "./style.css";
import Item from "./Item";
const Accordion = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);

  return (
    <section className="main">
      <section className="accordion-container">
        <button
          className="btn"
          onClick={() => setMultipleSelection(!multipleSelection)}
        >
          {multipleSelection
            ? "Disable Multiple Selection"
            : "Enable Multi Selection"}
        </button>
        <div>
          {data.map((item) => {
            return (
              <Item
                {...item}
                key={item.id}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                multipleSelection={multipleSelection}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Accordion;
