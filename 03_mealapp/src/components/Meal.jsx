import { useEffect, useState } from "react";
import axios from "axios";

const Meal = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((error) => console.log(error));
  }, [items]);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt="food" />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Meal;
