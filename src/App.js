import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Đây là nơi hiển thị từng trang */}
      </main>
    </>
  );
};

export default App;
