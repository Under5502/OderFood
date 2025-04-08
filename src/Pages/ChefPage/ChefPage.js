import React, { useEffect, useState } from "react";
import ChatWidget from "../../Components/ChatWidget/ChatWidget";
import Web3 from "web3";

const ChefPage = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [chefAddress, setChefAddress] = useState("");

  useEffect(() => {
    const key = localStorage.getItem("privateKey");
    if (!key) {
      console.warn("❌ Chưa có privateKey trong localStorage");
      return;
    }

    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount("0x" + key);
    setPrivateKey(key);
    setChefAddress(account.address);

    console.log("👉 Địa chỉ Chef đang chạy:", account.address);
  }, []);

  if (!privateKey || !chefAddress) return <div>⏳ Đang tải...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>👨‍🍳 Khu vực Bếp</h2>
      <ChatWidget
        name="Khách hàng"
        myAddress={chefAddress}
        receiver="0xC3326146150C6Bca40e34DE32EcEc371334f0ACD"
        privateKey={privateKey}
      />
    </div>
  );
};

export default ChefPage;
