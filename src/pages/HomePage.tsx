import React from "react";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 500,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 1000,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
