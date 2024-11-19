import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shopkart
          </Link>
        </Typography>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Button color="inherit">Cart</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
