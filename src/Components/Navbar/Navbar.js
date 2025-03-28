import React from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleBlog = () => {
    navigate("/blog");
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-nav"
            onClick={handleHome}
          />
        </span>
      </div>

      <div className="navbar-right">
        {" "}
        <ul className="navbar-menu">
          <li onClick={handleAbout}>About Us</li>

          <li onClick={handleBlog}>Our Blog</li>
          <li>Our Shop</li>
        </ul>
        <button className="order-btn" onClick={handleHome}>
          Order Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
