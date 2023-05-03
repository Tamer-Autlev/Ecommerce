"use client";
import { use } from "react";
import SingleProduct from "../../single-prodcut/SingleProduct";
const getData = async ({ id }) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const page = ({ params }) => {
  const id = params;
  const prodcut = use(getData(id));
  if (!prodcut) return null;
  prodcut.quantity = 1;

  return (
    <SingleProduct
      image={prodcut.image}
      title={prodcut.title}
      rating={prodcut.rating}
      id={prodcut.id}
      price={prodcut.price}
      description={prodcut.description}
      category={prodcut.category}
      quantity={prodcut.quantity}
    />
  );
};

export default page;
