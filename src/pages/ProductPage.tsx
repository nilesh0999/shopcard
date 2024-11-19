import React from "react";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the selected product
  const product = {
    id,
    name: `Product ${id}`,
    price: 500 * parseInt(id!),
    description: `This is the description of Product ${id}.`,
    image: "https://via.placeholder.com/300",
  };

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6" color="text.secondary">
        ₹{product.price}
      </Typography>
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        {product.description}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductPage;
