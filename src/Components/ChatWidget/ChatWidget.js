// src/Components/ChatWidget/ChatWidget.jsx
import React, { useState, useEffect, useRef } from "react";
import services from "../../utils/services";
import "./ChatWidget.scss";

export default function ChatWidget({ myAddress, receiver, privateKey, name }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const hasInitListener = useRef(false); // 👉 để tránh đăng ký listener nhiều lần

  useEffect(() => {
    if (!privateKey || !myAddress || !receiver || hasInitListener.current)
      return;

    const handleMessage = (msg) => {
      console.log("📥 Nhận được event MessageSent:", msg);

      const isMine = msg.receiver?.toLowerCase() === myAddress.toLowerCase();
      const isFromTarget = msg.sender?.toLowerCase() === receiver.toLowerCase();

      console.log(
        "👉 Điều kiện: isMine =",
        isMine,
        "| isFromTarget =",
        isFromTarget
      );

      if (isMine && isFromTarget) {
        setMessages((prev) => [
          ...prev,
          {
            text: msg.message,
            incoming: true,
            timestamp: Date.now(),
          },
        ]);
      }
    };

    hasInitListener.current = true;

    // Đăng ký lắng nghe tin nhắn
    services.listenForMessages(handleMessage, privateKey);
  }, [myAddress, receiver, privateKey]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = {
      text: input,
      incoming: false,
      sending: true,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    try {
      await services.chat(receiver, input, privateKey);

      setMessages((prev) => {
        const updated = [...prev];
        const last = updated.pop();
        updated.push({ ...last, sending: false });
        return updated;
      });
    } catch (error) {
      console.error("❌ Gửi thất bại:", error);
    }
  };

  const formatTime = (ts) =>
    new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="chat-widget">
      {isOpen ? (
        <div className="chat-box">
          <div className="chat-header" onClick={() => setIsOpen(false)}>
            Chat với {name || "Người dùng"}
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`msg ${msg.incoming ? "from" : "to"}`}>
                <div>{msg.text}</div>
                <small>{formatTime(msg.timestamp)}</small>
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              value={input}
              placeholder="Nhập tin nhắn..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      ) : (
        <div className="chat-toggle" onClick={() => setIsOpen(true)}>
          💬
        </div>
      )}
    </div>
  );
}
