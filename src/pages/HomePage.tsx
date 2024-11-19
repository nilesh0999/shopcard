import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const HomePage: React.FC = () => {
  const [showLoader, setShowLoader] = useState<any>(false);
  const [products, setProducts] = useState<any>(false);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  // Mock product data
  const getData = () => {
    setShowLoader(false);
    setProducts([
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
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Loader showLoader={showLoader} />
      {products?.length &&
        products?.map((product: any) => (
          <ProductCard key={product?.id} product={product} />
        ))}
    </div>
  );
};

export default HomePage;
