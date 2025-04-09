import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate từ react-router-dom
import services from "../../utils/services";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const [foodIds, setFoodIds] = useState([1]); // Sample selected food
  const [quantities, setQuantities] = useState([1]);
  const [note, setNote] = useState("");
  const [usePoint, setUsePoint] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Ewallet");
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderId, setOrderId] = useState(null);

  // Receiver info state
  const [receiverInfo, setReceiverInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
  });

  const privateKey = localStorage.getItem("privateKey");

  // Initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTotal = async () => {
      const foods = await services.getAllFoods();
      let total = 0;
      for (let i = 0; i < foodIds.length; i++) {
        const food = foods.find((f) => f.id === foodIds[i]);
        total += food?.price * quantities[i];
      }
      setTotalPrice(total);
    };
    fetchTotal();
  }, [foodIds, quantities]);

  const handlePlaceOrder = async () => {
    try {
      const paymentEnum = {
        Ewallet: 0,
        Cash: 1,
        CreditCard: 2,
      }[paymentMethod];

      const orderTx = await services.createOrder(
        paymentEnum,
        foodIds,
        quantities,
        usePoint,
        note,
        privateKey
      );

      const newOrderId = orderTx.events
        ? parseInt(orderTx.events.OrderPlaced.returnValues.id)
        : null;
      setOrderId(newOrderId);

      // If using Ewallet, process the payment immediately
      if (paymentMethod === "Ewallet") {
        await services.payment(newOrderId, totalPrice);
      }

      alert("✅ Đặt hàng thành công!");

      // Redirect to the order confirmation page using useNavigate
      navigate("/order-confirmation");
    } catch (err) {
      console.error("❌ Lỗi khi đặt hàng:", err);
      alert("Có lỗi khi đặt hàng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="title">🛒 Thanh toán đơn hàng</h2>

      {/* Receiver Information Section */}
      <div className="receiver-info">
        <h3 className="receiver-title">Thông tin người nhận</h3>

        <div className="input-group">
          <label className="label">Họ tên (*)</label>
          <input
            className="input-field"
            type="text"
            name="fullName"
            value={receiverInfo.fullName}
            onChange={(e) =>
              setReceiverInfo({ ...receiverInfo, fullName: e.target.value })
            }
          />
        </div>

        <div className="input-group">
          <label className="label">Email (*)</label>
          <input
            className="input-field"
            type="email"
            name="email"
            value={receiverInfo.email}
            onChange={(e) =>
              setReceiverInfo({ ...receiverInfo, email: e.target.value })
            }
          />
        </div>

        <div className="input-group">
          <label className="label">Số điện thoại (*)</label>
          <input
            className="input-field"
            type="tel"
            name="phone"
            value={receiverInfo.phone}
            onChange={(e) =>
              setReceiverInfo({ ...receiverInfo, phone: e.target.value })
            }
          />
        </div>

        <div className="input-group">
          <label className="label">Ngày sinh (không bắt buộc)</label>
          <input
            className="input-field"
            type="date"
            name="birthday"
            value={receiverInfo.birthday}
            onChange={(e) =>
              setReceiverInfo({ ...receiverInfo, birthday: e.target.value })
            }
          />
        </div>
      </div>

      {/* Payment and Notes Section */}
      <div className="input-group">
        <label className="label">Ghi chú:</label>
        <input
          className="input-field-ghichu"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={usePoint}
            onChange={() => setUsePoint(!usePoint)}
          />
          Sử dụng điểm thưởng
        </label>
      </div>

      <div className="select-group">
        <label>Phương thức thanh toán:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Ewallet">💳 Ví điện tử (on-chain)</option>
          <option value="Cash">💵 Tiền mặt</option>
          <option value="CreditCard">💳 Thẻ tín dụng</option>
        </select>
      </div>

      <h4 className="total-price">
        Tổng tiền: <b>{totalPrice / 1000} BNB</b>
      </h4>

      <button className="submit-btn" onClick={handlePlaceOrder}>
        ✅ Đặt hàng ngay
      </button>

      {orderId && <p className="order-id">🧾 Mã đơn hàng: #{orderId}</p>}
    </div>
  );
};

export default CheckoutPage;
