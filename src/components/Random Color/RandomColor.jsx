import React, { useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState(["rgb(68, 68, 68)"]);

  const randomValueGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };

  const colorCreator = (type) => {
    setTypeOfColor((prevType) => (prevType = type));
    if (type === "rgb") {
      const r = randomValueGenerator(256);
      const g = randomValueGenerator(256);
      const b = randomValueGenerator(256);
      setColor([`rgb(${r}, ${g}, ${b})`]);
    }
    if (type === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += hex[randomValueGenerator(hex.length)];
      }
      setColor([color]);
    }
    if (type === "both") {
      const r = randomValueGenerator(256);
      const g = randomValueGenerator(256);
      const b = randomValueGenerator(256);
      const rgbToHex = (x) => {
        let hex = x.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      };
      const rgbColor = `rgb(${r}, ${g}, ${b})`;
      const hexColor = `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;
      setColor([rgbColor, hexColor]);
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(color[0]);
    toast.success("Copied to Clipboard!!");
  };
  return (
    <section className="main">
      <div className="randomColor-section">
        <div className="btn-container">
          <button onClick={() => colorCreator("hex")}>Create HEX Color</button>
          <button onClick={() => colorCreator("rgb")}>Create RGB Color</button>
          <button onClick={() => colorCreator("both")}>
            Generate Random Color
          </button>
        </div>
        <div
          className="color-section"
          style={{ background: color[0] }}
          onClick={copyToClipBoard}
        >
          {typeOfColor === "both" && (
            <h1>
              RGB CODE: <span>{color[0]}</span> <br />
              HEX CODE: <span>{color[1]}</span>
            </h1>
          )}
          {typeOfColor === "hex" && (
            <h1>
              {typeOfColor} CODE: <span>{color[0]}</span>
            </h1>
          )}
          {typeOfColor === "rgb" && (
            <h1>
              {typeOfColor} CODE: <span>{color[0]}</span>
            </h1>
          )}
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
        ></ToastContainer>
      </div>
    </section>
  );
};

export default RandomColor;
