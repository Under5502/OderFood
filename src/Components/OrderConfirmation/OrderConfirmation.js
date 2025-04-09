import React, { useEffect, useState } from "react";
import services from "../../utils/services"; // Đảm bảo đúng đường dẫn
import "./OrderConfirmation.scss";

// Mapping từ status (0,1,2) sang tên và bước timeline
const statusTimeline = [
  { label: "Đơn Hàng Đã Đặt" },
  { label: "Đang Chuẩn Bị" },
  { label: "Đã Giao Cho DVVC" },
  { label: "Chờ Giao Hàng" },
  { label: "Đánh Giá" },
];

const OrderConfirmation = () => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // Lắng nghe sự kiện cập nhật đơn hàng từ contract
    const listenForUpdates = async () => {
      await services.listenForUpdateOrder(({ message }) => {
        // Trích số trạng thái từ message nếu cần
        const match = message.match(/#(\d+).*trạng thái: (.+)/i);
        if (match) {
          const _id = match[1];
          const statusText = match[2];
          const statusIndex = statusTimeline.findIndex((s) =>
            statusText.includes(s.label)
          );
          if (statusIndex >= 0) {
            setCurrentStatus(statusIndex);
            setOrderId(_id);
          }
        }
      });
    };

    listenForUpdates();
  }, []);

  return (
    <div className="order-confirmation-container">
      <h2>✅ Cảm ơn bạn đã đặt hàng!</h2>
      <p>
        Đơn hàng của bạn {orderId && `(#${orderId})`} đã được nhận và đang xử
        lý. Chúng tôi sẽ thông báo khi có cập nhật mới nhất từ hệ thống.
      </p>

      {/* Timeline */}
      <div className="order-status-timeline">
        {statusTimeline.map((step, index) => {
          let stepClass = "";
          if (index < currentStatus) stepClass = "completed";
          else if (index === currentStatus) stepClass = "current";

          return (
            <div key={index} className={`status-item ${stepClass}`}>
              <span className="status-step">{index + 1}</span>
              <span className="status-label">{step.label}</span>
              {stepClass === "current" && (
                <span className="status-time">Đang xử lý bước này...</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderConfirmation;
