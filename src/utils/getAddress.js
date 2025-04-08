// src/utils/getAddress.js
import Web3 from "web3";

export const getAddressFromPrivateKey = (privateKey) => {
  const web3 = new Web3();
  const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);
  return account.address;
};
