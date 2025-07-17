// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">หน้าแรก</Link> | <Link to="/about">เกี่ยวกับเรา</Link> |{" "}
      <Link to="/service">บริการ</Link> |{" "}
      <Link to="/bodypart">ชุดแต่งรถยนต์</Link>
    </nav>
  );
}

export default Navbar;
