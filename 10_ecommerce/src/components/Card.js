import { FaShoppingBag, FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"
          alt="shoes"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <FaStar className="ratings-start" />
            <FaStar className="ratings-start" />
            <FaStar className="ratings-start" />
            <FaStar className="ratings-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$200</del> 300
            </div>
            <div className="bag">
              <FaShoppingBag className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
