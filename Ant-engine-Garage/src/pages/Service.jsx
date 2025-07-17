import React from "react";

function Service() {
  const bannerStyle = {
    width: "100%",
    height: "370px", // เพิ่ม px ให้ชัดเจน
    objectFit: "cover",
    display: "block",
  };

  const contentStyle = {
    padding: "20px",
  };

  const videoWrapperStyle = {
    position: "relative",
    paddingBottom: "56.25%", // สัดส่วน 16:9
    paddingTop: 0,
    height: 0,
    overflow: "hidden",
    marginTop: "20px",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  };

  return (
    <div>
      {/* โฆษณาด้านบน */}
      <img
        src="https://dragstory.com/ws/wp-content/uploads/2021/02/Returning-Sponsors.png"
        alt="โฆษณาด้านบน"
        style={bannerStyle}
      />

      {/* เนื้อหาหลัก */}
      <div style={contentStyle}>
        <h2>บริการของเรา</h2>
        <ul>
          <li>จูนเครื่องยนต์-รีแมพ</li>
          <li>ขึ้น Dyno</li>
          <li>บริการดูแลรักษาระบบน้ำมันเครื่อง</li>
          <li>เปลี่ยนถ่ายน้ำมันเครื่อง</li>
          <li>ตรวจเช็ก ปรับเปลี่ยนสายพาน</li>
          <li>เช็กระบบไฟฟ้า</li>
          <li>บริการแก้ปัญหาไฟเครื่องโชว์</li>
          <li>บริการตั้งศูนย์ล้อ</li>
          <li>บริการล้างแอร์รถยนต์</li>
        </ul>

        {/* คลิป YouTube */}
        <div style={videoWrapperStyle}>
          <iframe
            src="https://www.youtube.com/embed/XuMOiM24IKM"
            title="YouTube video"
            style={iframeStyle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Service;
