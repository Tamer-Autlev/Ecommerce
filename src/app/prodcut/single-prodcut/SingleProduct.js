import "./singleProduct.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "@/app/slices/cartSlice";

const SingleProduct = ({
  image,
  title,
  rating,
  id,
  price,
  description,
  category,
}) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(increaseQuantity());
  };

  let [quan, setQuan] = useState(1);

  const dispatchHandler = () => {
    const products = {
      image,
      title,
      rating,
      id,
      price,
      description,
      quantity: quan,
      category,
    };
    dispatch(addToCart(products));
  };

  return (
    <div className="single-product">
      <img src={image} />
      <section className="product-info">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="products-price">
          <p>${price}</p>
          <span>${Math.floor(price * 1.5)}.99</span>
        </div>
        <div className="rating-star">
          <div>
            {Array(Math.floor(rating?.rate))
              .fill()
              .map(() => (
                <svg
                  key={id + title}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="28"
                  width="28"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              ))}
          </div>
          <h5>review</h5>
        </div>
        <div className="quantity-container">
          <div className="quantity">
            <h5>quantity</h5>
            <button
              className="decrease-btn"
              onClick={() => setQuan(() => (quan === 1 ? 1 : quan--))}
            >
              -
            </button>
            <span>{quan}</span>
            <button
              className="increase-btn"
              onClick={() => setQuan(() => quan++)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={dispatchHandler}>
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
