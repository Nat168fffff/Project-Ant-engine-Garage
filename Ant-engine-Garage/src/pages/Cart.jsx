import React, { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([
    // ตัวอย่างสินค้าในตะกร้า
    { id: 1, name: "Greddy Turbo Kit S2000", price: 166930, quantity: 1 },
  ]);

  // รวมราคาทั้งหมด
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgb(0 0 0 / 0.6)",
          width: "90%",
          maxWidth: "600px",
          color: "#fff",
        }}
      >
        <h3 style={{ color: "#ff6600", marginBottom: "20px" }}>
          ตะกร้าสินค้าของคุณ ({cartItems.length})
        </h3>

        {cartItems.length === 0 ? (
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        ) : (
          <>
            <table style={{ width: "100%", color: "#fff" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>สินค้า</th>
                  <th>จำนวน</th>
                  <th>ราคา/ชิ้น</th>
                  <th>ราคารวม</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ textAlign: "left" }}>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.price.toLocaleString("th-TH", {
                        style: "currency",
                        currency: "THB",
                      })}
                    </td>
                    <td>
                      {(item.price * item.quantity).toLocaleString("th-TH", {
                        style: "currency",
                        currency: "THB",
                      })}
                    </td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ff4433",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              style={{
                marginTop: "1rem",
                fontWeight: "700",
                color: "#ff6600",
              }}
            >
              รวมราคาทั้งหมด:{" "}
              {totalPrice.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}
            </p>
            <button
              style={{
                backgroundColor: "#ff6600",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px",
              }}
              onClick={() => alert("สั่งซื้อเรียบร้อย!")}
            >
              สั่งซื้อเลย
            </button>
          </>
        )}
      </div>
    </div>
  );
}
