import { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandeler = () => setCount(count + 1);
  const decrementHandeler = () => setCount(count - 1);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
        <section className="btn-container">
          <button className="button" onClick={incrementHandeler}>
            +
          </button>
          <button className="button" onClick={decrementHandeler}>
            -
          </button>
        </section>
      </div>
    </>
  );
};

export default Counter;
