// src/Pages/Shop/ResponsiveShop.js
import React from "react";
import Shop from "./Shop";
import MobileShop from "./MobileShop/MobileShop";

const ResponsiveShop = () => {
  const isMobile = window.innerWidth <= 768;

  return isMobile ? <MobileShop /> : <Shop />;
};

export default ResponsiveShop;
