import "./Products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Link from "next/link";

const Products = ({
  image,
  title,
  category,
  rating,
  id,
  price,
  description,
}) => {
  const dispatch = useDispatch();
  const dispatchHandler = () => {
    const products = {
      image,
      title,
      category,
      rating,
      id,
      price,
      description,
      quantity: 1,
    };
    dispatch(addToCart(products));
  };
  const randomNumber = Math.floor(Math.random() * 100);
  return (
    <div className="products" key={id + randomNumber}>
      <p className="products-category">{category}</p>
      <Link href={`/prodcut/first-group/${id}`}>
        <img src={image} height="200" width="200" alt={title} />
      </Link>
      <h4 className="products-title">{title}</h4>
      <div className="rating-star">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, index) => (
            <svg
              key={id + index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="20"
              width="20"
            >
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
            </svg>
          ))}
      </div>
      <p className="products-description">{description}</p>
      <div className="products-price">
        <p>${price}</p>
        <span>${Math.floor(price * 1.5)}.99</span>
      </div>
      <button onClick={dispatchHandler} className="products-btn">
        Add to Cart
      </button>
    </div>
  );
};
export default Products;
