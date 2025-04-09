import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Filter from "./Components/Filter/Filter";
import ChatWidget from "./Components/ChatWidget/ChatWidget";
import { PRIVATE_KEY_CHEF, PRIVATE_KEY_CUSTOMER } from "./utils/keys";
import { useEffect, useState } from "react";
import Web3 from "web3";
const App = () => {
  const location = useLocation();
  const [myAddress, setMyAddress] = useState("");
  const [role, setRole] = useState("");
  // const hideNavbar =
  //   location.pathname === "/shop" ||
  //   location.pathname.startsWith("/product") ||
  //   location.pathname.startsWith("/cart") ||
  //   location.pathname.startsWith("/login");
  useEffect(() => {
    const privateKey = localStorage.getItem("privateKey");
    if (!privateKey) return;

    const account = new Web3().eth.accounts.privateKeyToAccount(
      "0x" + privateKey
    );
    setMyAddress(account.address);

    // xác định vai trò đang login
    const isChef = privateKey === PRIVATE_KEY_CHEF;
    setRole(isChef ? "chef" : "customer");
  }, []);
  return (
    <>
      {/* {!hideNavbar && <Navbar />}{" "} */}
      {/* <Filter /> */}
      {myAddress && (
        <ChatWidget
          name={role === "chef" ? "Khách hàng" : "Bếp"}
          myAddress={myAddress}
          receiver={
            role === "chef"
              ? "0xC3326146150C6Bca40e34DE32EcEc371334f0ACD" // khách hàng
              : "0x293b1219a96ef72Ca2A5755053df95CEf1D35C2d"
          } // bếp
          privateKey={localStorage.getItem("privateKey")}
        />
      )}

      <Navbar />
      <main>
        <Outlet /> {/* Đây là nơi hiển thị từng trang */}
      </main>
    </>
  );
};

export default App;
