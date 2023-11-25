import React, { useState } from "react";
import "./style.css";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="num clear">C</span>
        <span>/</span>
        <span>*</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>-</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span className="num plus">+</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>0</span>
        <span>00</span>
        <span>.</span>
        <span className="num equal">=</span>
      </form>
    </>
  );
};

export default Main;
