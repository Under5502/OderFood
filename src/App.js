import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/shop" ||
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/cart") ||
    location.pathname.startsWith("/login");

  return (
    <>
      {!hideNavbar && <Navbar />}{" "}
      <main>
        <Outlet /> {/* Đây là nơi hiển thị từng trang */}
      </main>
    </>
  );
};

export default App;
