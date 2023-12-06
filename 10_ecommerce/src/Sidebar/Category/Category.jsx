import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label">
          <input type="radio" name="test" />
          <span className="checkmark">All</span>
        </label>
        <label className="sidebar-label">
          <input type="radio" name="test" />
          <span className="checkmark">Sneakers</span>
        </label>
        <label className="sidebar-label">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
