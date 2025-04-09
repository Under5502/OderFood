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

  return (
    <div style={{ padding: "20px" }}>
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
