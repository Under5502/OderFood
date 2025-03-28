import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import { useRoutes } from "react-router-dom";
import App from "./App";
import Blog from "./Pages/Blog/Blog";

const Layout = () => {
  const routes = useRoutes([
    {
      path: "/", // layout gốc
      element: <App />, // App chứa Navbar + Outlet
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "shop", element: <Shop /> },
      ],
    },
  ]);

  return routes;
};

export default Layout;
