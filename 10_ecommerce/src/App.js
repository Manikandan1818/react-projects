import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./data/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(setQuery);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = filteredItems;
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ title, company, color, category, newPrice }) =>
          title === selected ||
          company === selected ||
          color === selected ||
          category === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
