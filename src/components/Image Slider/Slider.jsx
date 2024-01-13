import React, { useState } from "react";
import "./style.css";
import imageData from "./data";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Slider = () => {
  const [currentImg, setCurrentImg] = useState(imageData[0].id);

  const nextImage = () => {
    if (currentImg === imageData[imageData.length - 1].id) {
      setCurrentImg(imageData[0].id);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };
  const prevImage = () => {
    if (currentImg === imageData[0].id) {
      setCurrentImg(imageData[imageData.length - 1].id);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  return (
    <section className="main image-slider">
      <div className="slider-section">
        {imageData.map((img) => {
          const { id, src, alt } = img;
          return (
            // currentImg === id && (
            <div
              className={`${
                currentImg === id
                  ? "image-container"
                  : "image-container hidden-image-container"
              }`}
              key={id}
              id={id}
            >
              <FaCircleArrowLeft
                onClick={prevImage}
                className="arrow arrow-left"
              />
              <FaCircleArrowRight
                onClick={nextImage}
                className="arrow arrow-right"
              />
              <img src={src} alt={alt} />
              <div className="currentImg-indicator">
                {imageData.map((img) => {
                  return (
                    <span
                      key={img.id}
                      className={`${
                        currentImg === img.id
                          ? "active-indicator"
                          : "inactive-indicator"
                      } indicator-item`}
                      onClick={() => {
                        setCurrentImg(img.id);
                      }}
                    ></span>
                  );
                })}
              </div>
            </div>
            // )
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
