import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginAs = (role) => {
    const privateKeyChef =
      "4df8709af9f0afe7ffc97ee30e90bd4ee4f371bc971593d9f0d52bf03a13eb18";
    const privateKeyCustomer =
      "1e397d4ec11db1709ea71e960bb4e5e5c767d48c04f77ac28720a2d871d3419c";

    const privateKey = role === "chef" ? privateKeyChef : privateKeyCustomer;

    localStorage.setItem("privateKey", privateKey);

    // Điều hướng đến đúng trang
    navigate(role === "chef" ? "/chef" : "/home");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Chọn vai trò</h2>
      <button onClick={() => loginAs("chef")}>👨‍🍳 Vào vai Bếp</button>
      <br />
      <br />
      <button onClick={() => loginAs("customer")}>👤 Vào vai Khách</button>
    </div>
  );
};

export default Login;
