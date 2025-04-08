// src/pages/CustomerPage.jsx
import React from "react";
import ChatWidget from "../../Components/ChatWidget/ChatWidget";
import { useWallet } from "../../utils/useWallet";

const CustomerPage = () => {
  const wallet = useWallet();

  // Địa chỉ của Bếp
  const chefAddress = "0x293870265722549aee2382741c94e721cdde6808";

  if (!wallet) {
    return <div>❌ Chưa đăng nhập. Vui lòng đăng nhập lại.</div>;
  }

  console.log("👉 Địa chỉ Customer đang chạy:", wallet.address);

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Trang Khách - Chat với Bếp</h2>
      <ChatWidget
        name="Bếp"
        myAddress={wallet.address}
        receiver={chefAddress}
        privateKey={wallet.privateKey}
      />
    </div>
  );
};

export default CustomerPage;
