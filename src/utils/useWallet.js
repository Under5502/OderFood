// src/utils/useWallet.js
import Web3 from "web3";

export const useWallet = () => {
  const privateKey = localStorage.getItem("privateKey");

  if (!privateKey) return null;

  const web3 = new Web3();
  const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);

  return {
    privateKey,
    address: account.address,
  };
};
