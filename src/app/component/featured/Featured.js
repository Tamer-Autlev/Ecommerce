"use client";
import { use } from "react";
import Products from "../products/Products";
import "./featured.css";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  return res.json();
};

const Featured = () => {
  const products = use(getData());

  return (
    <section className="featured-items">
      <h2>Trending Products</h2>
      <div className="item-container">
        {products
          .slice(0, 4)
          .map(({ image, title, category, rating, id, price, description }) => {
            return (
              <Products
                image={image}
                title={title}
                category={category}
                rating={rating}
                id={id}
                price={price}
                description={description}
              />
            );
          })}
      </div>
    </section>
  );
};
export default Featured;
