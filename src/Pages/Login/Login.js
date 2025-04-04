import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [privateKey, setPrivateKey] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let normalizedKey = privateKey.trim();
    if (!normalizedKey.startsWith("0x")) {
      normalizedKey = "0x" + normalizedKey;
    }

    if (normalizedKey.length === 66) {
      localStorage.setItem("privateKey", normalizedKey);
      alert("Đăng nhập thành công!");
      navigate("/"); // Chuyển hướng về trang chính
    } else {
      alert("Private Key không hợp lệ!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Đăng nhập bằng Private Key (Test)</h2>
      <input
        type="text"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        placeholder="Nhập private key từ Ganache"
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />
      <button onClick={handleLogin}>Xác nhận</button>
    </div>
  );
}

export default Login;
