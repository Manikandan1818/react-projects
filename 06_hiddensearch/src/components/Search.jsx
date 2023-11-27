import { useState } from "react";
import { ImSearch } from "react-icons/im";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#FFF");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search ... " />
      ) : (
        <ImSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default Search;
