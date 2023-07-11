import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={'/'}  className="logo">
          <img
            src="https://www.svgrepo.com/show/127807/shopping-basket.svg"
            alt="Logo"
            className="logo-image"
          />
          <span className="ml-3 text-xl">BaazarKart</span>
       </Link>
        <nav className="link">
          {navigations.map((navigation, index) => (
            <a key={index} href={navigation.path} className="all_links">
              {navigation.name}
            </a>
          ))}
        </nav>
        <Link to="/cart" className="cart-link">
          <Button variant="contained" startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
