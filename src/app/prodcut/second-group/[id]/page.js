"use client";
import { use } from "react";
import SingleProduct from "../../single-prodcut/SingleProduct";
const getData = async ({ id }) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  return res.json();
};
const page = ({ params }) => {
  const id = params;
  const product = use(getData(id));
  if (!product) return null;
  product.quantity = 1;
  const rate = {
    rate: Math.floor(Math.random() * (5 - 1) + 1),
  };
  const image = product?.image;

  return (
    <SingleProduct
      image={image}
      title={product.title}
      rating={rate}
      id={product.id}
      price={product.price}
      description={product.description}
      category={product.category}
      quantity={product.quantity}
    />
  );
};

export default page;
