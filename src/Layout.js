import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import { useRoutes } from "react-router-dom";
import App from "./App";
import ResponsiveShop from "./Pages/Shop/ResponsiveShop";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import ChefPage from "./Pages/ChefPage/ChefPage";
const Layout = () => {
  const routes = useRoutes([
    {
      // layout gốc
      element: <App />, // App chứa Navbar + Outlet
      children: [
        { path: "/login", element: <Login /> },
        { path: "", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "shop", element: <ResponsiveShop /> },
        { path: "/product/:id", element: <ProductDetail /> },
        { path: "/cart", element: <Cart /> },
        { path: "/chef", element: <ChefPage /> },
      ],
    },
  ]);

  return routes;
};

export default Layout;
