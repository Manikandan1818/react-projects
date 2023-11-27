import React, { useState } from "react";

const ToggleColor = () => {
  const [backgroundColor, setBackGroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackGroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };
  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          style={{
            buttonStyle,
            color: textColor,
            border: `1px solid ${textColor}`,
          }}
          onClick={handleClick}
        >
          {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <section className="content">
          <h1>
            Welcome to A <br />
            Theme Changer
          </h1>
        </section>
      </section>
      ;
    </>
  );
};

export default ToggleColor;
