import { use } from "react";
import CategoryItem from "../category-item/category-item";
import "./index.css";
const getData = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);

  return res.json();
};

const allproducts = () => {
  const products = use(getData());
  return (
    <section>
      <div className="grid-container">
        {products
          .filter((item) => item.category !== "electronics")
          .map(({ image, title, category, rating, id, price, description }) => {
            return (
              <CategoryItem
                image={image}
                title={title}
                category={category}
                rating={rating}
                id={id}
                price={price}
                description={description}
                onPath={`https://fakestoreapi.com/products`}
              />
            );
          })}
      </div>
    </section>
  );
};
export default allproducts;
