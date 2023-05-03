import CategoryItem from "../../category-item/category-item";

const OthersProducts = ({ prodcut }) => {
  const rate = {
    rate: Math.floor(Math.random() * (5 - 1) + 1),
  };
  return (
    <>
      {prodcut.map(({ images, title, category, id, price, description }) => {
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
      })}
    </>
  );
};

export default OthersProducts;
