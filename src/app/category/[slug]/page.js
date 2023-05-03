import { use } from "react";
import CategoryItem from "../category-item/category-item";

import "./index.css";
const getData = async ({ slug }) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${slug}`);

  return res.json();
};

const Category = ({ params }) => {
  const slug = params;
  const products = use(getData(slug));

  return (
    <section className="featured-items">
      <div className="item-container">
        {products
          ?.slice(0, 4)
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
                onPath={`/prodcut/first-group/${id}`}
              />
            );
          })}
      </div>
    </section>
  );
};
export default Category;
