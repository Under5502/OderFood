import Web3 from "web3";
import contractData from "../contracts/OrderFood.json";

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "addCategory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_restaurantId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_categoryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isVegan",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isGlutenFree",
        type: "bool",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
    ],
    name: "addFood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idOrder",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_reviews",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "_stars",
        type: "uint256[]",
      },
    ],
    name: "addRating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_houseNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_street",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ward",
        type: "string",
      },
      {
        internalType: "string",
        name: "_district",
        type: "string",
      },
      {
        internalType: "string",
        name: "_city",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addRestaurant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Orderfood.OrderStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "OrderStatusUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Orderfood.Payment",
        name: "_payment",
        type: "uint8",
      },
      {
        internalType: "uint256[]",
        name: "_foodIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "UsePoint",
        type: "bool",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
    ],
    name: "placeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "processPayment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
      {
        internalType: "enum Orderfood.OrderStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "updateOrderStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "categories",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_categoryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minRating",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isVegan",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isGlutenFree",
        type: "bool",
      },
    ],
    name: "filterFoods",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "img",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "categoryId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isVegan",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isGlutenFree",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "totalStars",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRatings",
            type: "uint256",
          },
        ],
        internalType: "struct Orderfood.Food[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "foods",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "restaurantId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "categoryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isVegan",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isGlutenFree",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "totalStars",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRatings",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCategory",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct Orderfood.FoodCategory[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllFoods",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "img",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "categoryId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isVegan",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isGlutenFree",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "totalStars",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRatings",
            type: "uint256",
          },
        ],
        internalType: "struct Orderfood.Food[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllOrders",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "discount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "enum Orderfood.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "enum Orderfood.Payment",
            name: "payment",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isReviewed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isPay",
            type: "bool",
          },
          {
            internalType: "string",
            name: "note",
            type: "string",
          },
        ],
        internalType: "struct Orderfood.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRestaurants",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "houseNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "street",
            type: "string",
          },
          {
            internalType: "string",
            name: "ward",
            type: "string",
          },
          {
            internalType: "string",
            name: "district",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Orderfood.Restaurant[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "getOrderDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "foodId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Orderfood.DetailOrder[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrdersBySender",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "discount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "enum Orderfood.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "enum Orderfood.Payment",
            name: "payment",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isReviewed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isPay",
            type: "bool",
          },
          {
            internalType: "string",
            name: "note",
            type: "string",
          },
        ],
        internalType: "struct Orderfood.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_foodId",
        type: "uint256",
      },
    ],
    name: "getRatingsForFood",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "foodId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "review",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "stars",
            type: "uint256",
          },
        ],
        internalType: "struct Orderfood.Rating[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderDetailCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "foodId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "restaurantId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "discount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        internalType: "enum Orderfood.OrderStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "enum Orderfood.Payment",
        name: "payment",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isReviewed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isPay",
        type: "bool",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "points",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ratingCountPerFood",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ratings",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "foodId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "review",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "stars",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "restaurants",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "houseNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "street",
        type: "string",
      },
      {
        internalType: "string",
        name: "ward",
        type: "string",
      },
      {
        internalType: "string",
        name: "district",
        type: "string",
      },
      {
        internalType: "string",
        name: "city",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_keyword",
        type: "string",
      },
    ],
    name: "searchFood",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "img",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "categoryId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isVegan",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isGlutenFree",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "totalStars",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRatings",
            type: "uint256",
          },
        ],
        internalType: "struct Orderfood.Food[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_keyword",
        type: "string",
      },
    ],
    name: "searchRestaurants",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "houseNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "street",
            type: "string",
          },
          {
            internalType: "string",
            name: "ward",
            type: "string",
          },
          {
            internalType: "string",
            name: "district",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Orderfood.Restaurant[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x293870265722549aEE2382741c94E721cDdE6808";
const waitForWsConnection = async (web3) => {
  const provider = web3.currentProvider;

  // 👉 Đảm bảo provider là WebSocket và có .on
  if (provider && typeof provider.on === "function") {
    if (provider.connection?.readyState !== 1) {
      console.log("⏳ Chờ WebSocket kết nối (an toàn)...");
      await new Promise((resolve) => {
        provider.on("connect", () => {
          console.log("✅ WebSocket đã kết nối (an toàn)");
          resolve();
        });
      });
    }
  } else {
    console.warn("⚠️ Provider không hỗ trợ 'on' hoặc không phải WebSocket");
  }
};

export const initContract = async (useWebsocket = false, privateKey = "") => {
  const rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  const wsURL = "wss://bsc-testnet.publicnode.com";

  let provider;
  if (useWebsocket) {
    provider = new Web3.providers.WebsocketProvider(wsURL);
    provider.on("connect", () => console.log("✅ WebSocket connected"));
    provider.on("error", (e) => console.error("❌ WS error:", e));
    provider.on("end", (e) => console.error("❌ WS disconnected:", e));
  } else {
    provider = new Web3.providers.HttpProvider(rpcURL);
  }

  const web3 = new Web3(provider);
  console.log("Provider đang dùng:", provider);

  let account = null;

  if (privateKey) {
    const cleanedKey = privateKey.trim().replace(/^0x/, ""); // bỏ 0x nếu có
    if (cleanedKey.length !== 64) {
      throw new Error("❌ Private key phải gồm đúng 64 ký tự hex (32 bytes)");
    }

    const fullKey = "0x" + cleanedKey;
    account = web3.eth.accounts.privateKeyToAccount(fullKey);
    web3.eth.accounts.wallet.add(account);
  }

  const contract = new web3.eth.Contract(abi, contractAddress);

  return { web3, contract, account };
};

const sendTransaction = async (method, privateKey, ...params) => {
  try {
    const { account } = await initContract(false, privateKey);
    const txMethod = method(...params);

    const gas = await txMethod.estimateGas({ from: account.address });
    const gasWithBuffer = (gas * 120n) / 100n;
    const txData = await txMethod.send({
      from: account.address,
      gas: gasWithBuffer,
    });

    console.log("✅ Giao dịch thành công:", txData);
    return txData;
  } catch (error) {
    console.error("❌ Lỗi giao dịch:", error);
    throw error;
  }
};

const services = {
  createRestaurant: async (
    name,
    houseNumber,
    street,
    ward,
    district,
    city,
    ownerAddress,
    privateKey
  ) => {
    const { contract } = await initContract(false, privateKey);
    return sendTransaction(
      contract.methods.addRestaurant,
      privateKey,
      name,
      houseNumber,
      street,
      ward,
      district,
      city,
      ownerAddress
    );
  },

  createCategory: async (name, privateKey) => {
    const { contract } = await initContract(false, privateKey);
    return sendTransaction(contract.methods.addCategory, privateKey, name);
  },

  getAllCategories: async () => {
    const { contract } = await initContract();
    try {
      return await contract.methods.getAllCategory().call();
    } catch (error) {
      console.error("Lỗi khi lấy danh sách phân loại:", error);
      return [];
    }
  },

  getAllRestaurants: async () => {
    const { contract } = await initContract();
    try {
      console.log("get restaurant contract; ", contract);

      const data = await contract.methods.getAllRestaurants().call();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Lỗi khi lấy danh sách nhà hàng:", error);
      return [];
    }
  },

  getOrder: async (id) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.orders(id).call();
    } catch (error) {
      console.error("Lỗi khi lấy đơn hàng:", error);
      return [];
    }
  },

  getRes: async (id) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.restaurants(id).call();
    } catch (error) {
      console.error("Lỗi khi lấy nhà hàng:", error);
      return [];
    }
  },

  getAllFoods: async () => {
    const { contract } = await initContract(false);
    try {
      return await contract.methods.getAllFoods().call();
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thức ăn:", error);
      return [];
    }
  },

  getAllOrders: async () => {
    const { contract } = await initContract();
    try {
      return await contract.methods.getAllOrders().call();
    } catch (error) {
      console.error("Lỗi khi lấy danh sách đơn hàng:", error);
      return [];
    }
  },

  getOrderHistory: async () => {
    const { contract, account } = await initContract();
    try {
      return await contract.methods
        .getOrdersBySender()
        .call({ from: account.address });
    } catch (error) {
      console.error("Lỗi khi lấy lịch sử đơn hàng:", error);
      return [];
    }
  },

  getOrderDetail: async (id) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.getOrderDetails(id).call();
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết đơn hàng:", error);
      return [];
    }
  },

  updateOrderStatus: async (orderId, status) => {
    const { contract } = await initContract();
    return sendTransaction(contract.methods.updateOrderStatus, orderId, status);
  },

  rating: async (id, reviews, star) => {
    const { contract } = await initContract();
    return sendTransaction(contract.methods.addRating, id, reviews, star);
  },

  createFood: async (name, idres, cate, price, isVegan, isGlutenFree, img) => {
    const { contract } = await initContract();
    return sendTransaction(
      contract.methods.addFood,
      name,
      idres,
      cate,
      price,
      isVegan,
      isGlutenFree,
      img
    );
  },
  createOrder: async (
    payment,
    _foodIds,
    _quantities,
    UsePoint,
    note,
    privateKey
  ) => {
    const { contract } = await initContract(false, privateKey);
    return sendTransaction(
      contract.methods.placeOrder,
      privateKey,
      payment,
      _foodIds,
      _quantities,
      UsePoint,
      note
    );
  },

  searchFood: async (keyword) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.searchFood(keyword).call();
    } catch (error) {
      console.error("Lỗi khi tìm kiếm món ăn:", error);
      return [];
    }
  },

  searchRestaurants: async (keyword) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.searchRestaurants(keyword).call();
    } catch (error) {
      console.error("Lỗi khi tìm kiếm nhà hàng:", error);
      return [];
    }
  },

  getRatingByID: async (id) => {
    const { contract } = await initContract();
    try {
      return await contract.methods.getRatingsForFood(id).call();
    } catch (error) {
      console.error("Lỗi khi lấy đánh giá:", error);
      return [];
    }
  },

  chat: async (to, mess, privateKey) => {
    const { contract } = await initContract(false, privateKey);
    return sendTransaction(contract.methods.sendMessage, privateKey, to, mess);
  },

  payment: async (id, value) => {
    const { web3, contract, account } = await initContract();

    try {
      const formattedValue = (parseFloat(value) / 1000).toString();
      const weiValue = web3.utils.toWei(formattedValue, "ether");
      const method = contract.methods.processPayment(id);
      const gas = await method.estimateGas({
        from: account.address,
        value: weiValue,
      });

      const txData = await method.send({
        from: account.address,
        gas: (gas * 12n) / 10n,
        value: weiValue,
      });

      console.log("Giao dịch thanh toán thành công:", txData);
      return txData;
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      throw error;
    }
  },
  listenForMessages: async (callback, privateKey) => {
    try {
      const { contract, account, web3 } = await initContract(true, privateKey);
      await waitForWsConnection(web3);

      console.log("🎧 Đang lắng nghe tin nhắn cho:", account.address);

      // ✅ Kiểm tra chắc chắn event có tồn tại
      if (
        !contract?.events?.MessageSent ||
        typeof contract.events.MessageSent !== "function"
      ) {
        console.error(
          "❌ Không tìm thấy event MessageSent hoặc không hợp lệ trong ABI!"
        );
        return;
      }

      // ✅ Thiết lập listener
      const eventListener = contract.events.MessageSent({
        filter: { receiver: account.address },
        fromBlock: "latest",
      });

      // Thêm kiểm tra kỹ trước khi gắn `.on`
      if (!eventListener || typeof eventListener.on !== "function") {
        console.error(
          "❌ Không thể thiết lập listener: eventListener không hợp lệ hoặc chưa sẵn sàng."
        );
        return;
      }

      eventListener
        .on("data", (event) => {
          const { sender, receiver, message } = event.returnValues || {};
          console.log("📥 Nhận được event:", event);

          if (receiver?.toLowerCase() === account.address.toLowerCase()) {
            console.log(`💬 Tin nhắn từ ${sender} đến ${receiver}: ${message}`);
            callback({ sender, receiver, message });
          }
        })
        .on("error", (err) => {
          console.error("🚨 Lỗi event listener:", err);
        });
    } catch (error) {
      console.error("❌ Lỗi khi thiết lập listener:", error);
    }
  },

  listenForUpdateOrder: async (callback) => {
    try {
      // Bắt buộc dùng WebSocket Provider
      const { contract, account } = await initContract(true);
      if (!contract || !account) {
        return;
      }

      contract.events
        .OrderStatusUpdated()
        .on("data", (event) => {
          const { orderId, customer, status } = event.returnValues;

          if (customer.toLowerCase() === account.address.toLowerCase()) {
            let statusText =
              {
                0: "Đang chờ xác nhận",
                1: "Đang chuẩn bị món",
                2: "Đã giao",
              }[status] || "Không xác định";

            callback({
              sender: "Hệ thống",
              message: `📦 Đơn hàng #${orderId} đã được cập nhật: ${statusText}`,
            });
          }
        })
        .on("error", (error) => {});
    } catch (error) {}
  },
};
window.services = services;
export default services;
