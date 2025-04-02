import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icon menu
import logo from "../../assets/logo.jpg";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);

  // Cập nhật trạng thái mobile khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img
          src={logo}
          alt="Logo"
          className="logo-nav"
          onClick={() => navigate("/")}
        /> */}
      </div>

      {/* Icon menu mobile (hiện khi menu đóng) */}
      {isMobile && (
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      {/* Menu navbar */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`} ref={menuRef}>
        {/* Icon đóng menu (hiện khi menu mở) */}
        {isMobile && (
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>
        )}

        <ul className="navbar-menu">
          <li
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              navigate("/blog");
              setMenuOpen(false);
            }}
          >
            Our Blog
          </li>
          <li
            onClick={() => {
              navigate("/shop");
              setMenuOpen(false);
            }}
          >
            Our Shop
          </li>
        </ul>
        <button
          className="order-btn"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Order Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
