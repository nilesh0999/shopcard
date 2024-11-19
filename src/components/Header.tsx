import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Header: React.FC = () => {
  const isLogin = window.location.pathname !== "/login";
  const [count, setCount] = useState<any>(0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">
              <ShoppingBagIcon />
              <span style={{ marginLeft: "5px" }}>Shopkart</span>
            </Button>
          </Link>
        </Typography>
        {isLogin ? (
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">
              <ShoppingCartIcon />
              <span style={{ marginLeft: "5px" }}>Cart</span>
            </Button>
          </Link>
        ) : (
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Sign Up</Button>
          </Link>
        )}
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.setItem("isAuthenticated", "false");
              setCount(count + 1);
            }}
          >
            <LoginIcon />
            <span style={{ marginLeft: "5px" }}>
              {isLogin ? "Logout" : "Login"}
            </span>
            {}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
