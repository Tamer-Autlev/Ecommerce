"use client";
import { use } from "react";
import CategoryItem from "../../category-item/category-item";
import "./others.css";

const getData = async ({ id }) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );
  return res.json();
};
function shoes({ params }) {
  const id = params;

  const productsData = use(getData(id));
  if (!Array.isArray(productsData)) return <h1> Sorry page not found ...</h1>;

  const rate = {
    rate: Math.floor(Math.random() * (5 - 1) + 1),
  };
  return (
    <section>
      <div className="grid-container">
        {productsData?.map(
          ({ images, title, category, id, price, description }) => {
            return (
              <CategoryItem
                image={images[0]}
                title={title}
                category={category.name}
                rating={rate}
                id={id}
                price={price}
                description={description}
                onPath={`/prodcut/second-group/${id}`}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default shoes;
