import React from "react";
import { Typography } from "@mui/material";

const CartPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Your Cart</Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        style={{ marginTop: "10px" }}
      >
        No items in the cart.
      </Typography>
    </div>
  );
};

export default CartPage;
