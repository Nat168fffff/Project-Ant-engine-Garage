import React from "react";
import { useParams } from "react-router-dom";

// จำลองข้อมูลสินค้าเหมือนใน Bodypart.js
const products = [
  {
    id: 1,
    name: "Greddy Turbo Kit S2000",
    price: "166,930 บาท",
    image:
      "https://www.greddy.com/cdn/shop/files/11550051_WK_01.jpg?v=1712125794",
    specs: ["วัสดุ: ", "เหมาะกับ s2000", "รับประกัน 2ปี"],
  },
  {
    id: 2,
    name: "Intercooler Full Kit Honda CIVIC Type R FK8 HKS",
    price: "459,000 บาท",
    image:
      "https://www.racedivision.com.au/cdn/shop/products/5A393CEF-1DB8-4BA8-9921-CAF34BD70188.jpg?v=1571710188",
    specs: ["วัสดุ: ", "เหมาะกับ FK8 R", "รับประกัน 2ปี"],
  },
  {
    id: 3,
    name: "Nitrous oxide",
    price: "14,000 บาท",
    image: "https://www.labgaz.com/images/content/original-1450145496239.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ รถที่เครื่องยนต์รับกำลังอัดทีสูงๆไหว", "รับประกัน 1ปี"],
  },
  {
    id: 4,
    name: "GReddy Intake Plenum Manifold NISSAN SKYLINE GTR RB26DETT Single Throttle",
    price: "95,000 บาท",
    image:
      "https://cartoys.com.au/wp-content/uploads/product_images/13522306.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ GTR R31-34", "รับประกัน 2ปี"],
  },
  {
    id: 5,
    name: "FLEX Turbo F55",
    price: "25,000 บาท",
    image:
      "https://hdautomotive.com.au/wp-content/uploads/2022/07/Flex_F55Kit_2.webp",
    specs: ["วัสดุ: ", "เหมาะกับ รถยนต์กระบะ ", "รับประกัน 2ปี"],
  },
  {
    id: 6,
    name: "JQ Werks Madtrace Racing Steering Wheel System",
    price: "75,500 บาท",
    image:
      "https://jhpusa.com/cdn/shop/files/JQ-Werks-Madtrace-Racing-Steering-Wheel-System-Honda-Civic-Type-R-17a.jpg?v=1717197408&width=990",
    specs: ["วัสดุ: ", "เหมาะกับ HONDA CIVIC TYPE R FL5", "รับประกัน 2ปี"],
  },

  {
    id: 7,
    name: "พวงมาลัย SPOON GEN 3 (rare)",
    price: "11,150 บาท",
    image:
      "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/117343363_310672876954713_381013177655887885_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BKM9toxxr1wQ7kNvwEh4VeP&_nc_oc=AdlkzHWGyZLcrYdPG-iqLSPe0U78r-AXP0oQLVhUpz7hSivUudISysuGcyl95RptFqc&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=7wEaiXeinCdmlPn6EHBIdQ&oh=00_AfRhwr81JOu86zO0r4UwJ2caxtFbY4DfZnxojRfsk_-H7A&oe=689E9929",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 8,
    name: "ท่อ SPOON SPORT N1 MUFFLER KIT - HONDA CIVIC TYPE R FL5",
    price: "91,000 บาท",
    image:
      "https://shop-image.readyplanet.com/4iZS4qqj4Jzmo6Pv_ifhkOnhDMc=/500x500/c686615353f44feb9f8fb17a087a8b4f",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 9,
    name: "RB26DETT engine",
    price: "1,190,000 บาท ",
    image:
      "https://theskylineshed.com/cdn/shop/files/353083132_6796001860434027_8043091738682920196_n_700x700.jpg?v=1686892551",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 10,
    name: "LB-Silhouette WORKS GT NISSAN 35GT-RR - Liberty Walk (BODY-PART)",
    price: "1,900,000 บาท",
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2022/11/LB-Silhouette-WORKS-GT-NISSAN-35GT-RR09-1.jpeg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 11,
    name: "ฝากระโปรง HONDA FD",
    price: "27,000 บาท ",
    image:
      "https://yangtanok.com/Photo/ProductPhoto/191530826837791997_2032212880156359_6595227229980983296_n-768x512.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 12,
    name: "supra trd3000gt พาร์ทแท้",
    price: "4,999,000 บาท",
    image: "https://ig-model.online/cdn/shop/files/3598-1.jpg?v=1747019029",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 13,
    name: "LB-WORKS Ferrari F40 - Liberty Walk (BODY-PART)",
    price: "40,000,000 บาท",
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2023/02/LB-WORKS-FERRARI-F4000005.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 14,
    name: "c west kit R34",
    price: "57,900 บาท",
    image:
      "https://www.kentmodels.co.uk/wp-content/uploads/2018/11/Gnkei1CagAAtW1O-scaled.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 15,
    name: "Nissan GT-R(R34) Bodypart Nismo",
    price: "8,130,000 บาท",
    image:
      "https://cdn.bhdw.net/im/nissan-skyline-gt-r-r34-nismo-wallpaper-81902_w635.webp",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },

  {
    id: 16,
    name: "LB-ER34 Super Silhouette SKYLINE - Liberty Walk (BODY-PART)",
    price: "10,500,000 บาท",
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2023/02/LB-ER34-Super-Silhouette-SKYLINE00002.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 17,
    name: "LB☆Super Silhouette WORKS S15 SILVIA (BODY-PART) ",
    price: "2,300,000 บาท",
    image:
      "https://libertywalk.shop/wp-content/uploads/2021/06/o1080078614936758078.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 18,
    name: "Mazda Rx-7 veilside fortune (BODY-PART)",
    price: "7,150,000 บาท",
    image: "https://www.veilsidejpn.com/free/images/VF-RX7-FF3-032.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 19,
    name: "LB-WORKS Mclaren 720S - Liberty Walk (BODY-PART)",
    price: "12,000,000 บาท",
    image: "https://libertywalk.co.jp/wp-content/uploads/2023/10/720S_059.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 20,
    name: "LB☆Silhouette WORKS Mazda RX-7 FD3S (BODY-KIT)",
    price: "500,000 บาท",
    image:
      "https://libertywalk.shop/wp-content/uploads/2023/01/LB-Super-Silhouette-MAZDA-FD3S-RX-700014.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 21,
    name: "BODY for HONDA FD 1.8/2.0 (BODY)",
    price: "700,000 บาท",
    image:
      "https://www.hiroboy.com/userfiles/images/sys/products/124_Honda_Civic_FD2_Type_R_Spoon_Ver_PreOrder_40974.jpeg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 22,
    name: "เหล็กค้ำท้ายกระบะ isuzu Dmax",
    price: "990 บาท",
    image:
      "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.6435-9/99013175_2584543288454768_881176638866325504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mZLs32Z-dXcQ7kNvwFyMIW-&_nc_oc=AdkxbS_l6PHvLoeDQcJGPShWlCb5Ge2v_LyqdH8tEBbZSMUvjJFP4LgUoXdpYZggCgM&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_gid=KiagpfKVjDgJHez32NqSfg&oh=00_AfSDusy4672I6aTd4a9Rpm8Hi9E2Gfqo9OttX1kcOlubNw&oe=689E7E22",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 23,
    name: "เบาะ Mugen Full Bucket Seat MX-A MX-B สีดำ Japan",
    price: "55,000 บาท",
    image:
      "https://laz-img-sg.alicdn.com/p/786ad054ebfd1ecc86afab3a4743193f.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 24,
    name: "เบาะ Recaro CS Cross Sportster GK100H ของแท้ หุ้มด้วยผ้า Kamui ผ้ากลาง Glass Mesh",
    price: "156,000 บาท",
    image:
      "https://th-live-02.slatic.net/p/81a0be89cac5ea5a931c773994f8e056.jpg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 25,
    name: "Lamborghini Urus By NOVITEC (BODY-PART)",
    price: "600,000 บาท",
    image: "https://luxurypulse.com/img/pictures/62069d13c4f4et(19).jpeg",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 26,
    name: "เบาะแต่ง thailand racing 2.0",
    price: "50 บาท",
    image:
      "https://lh3.googleusercontent.com/proxy/GluY2HrlizT4E0sQCrQNbRAhfCk62J8kiBp5YJTYAkJMZRj32y-qX5O8UE3YyPm96ngZVZjM9yZqNjsQljj-WnZiGAN5-aEaEe3DyNu9XhPH",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 27,
    name: "พวงมาลัย Thailand Grandmother",
    price: "2,500 บาท",
    image:
      "https://down-th.img.susercontent.com/file/th-11134258-7rasf-m66nk96hckhibf",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 28,
    name: "ไทยแลนด์บ้านนา เรสซิ่ง เรคคารั่ว",
    price: "10,000 บาท",
    image:
      "https://sdmntprwestus2.oaiusercontent.com/files/00000000-c32c-61f8-bb01-4d6839ae2687/raw?se=2025-07-17T06%3A51%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=467b6089-0578-52db-b603-e53346e903f6&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-17T04%3A21%3A16Z&ske=2025-07-18T04%3A21%3A16Z&sks=b&skv=2024-08-04&sig=LneE/sacBOWsKrQf1h1NJSqjLzmG741inSAEpai8xwo%3D",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 29,
    name: "ท่อ HKS LEGAL MUFFLER Carbon TAIL(Relaunch) Honda Civic FD1.8 $ FD2",
    price: "15,000 บาท",
    image:
      "https://shop-image.readyplanet.com/aKaEzUuNdFR4j7tp2egHb6iVkJY=/500x500/eeddbc8813e946fdb38137221548afa8",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
  {
    id: 30,
    name: "FD2 Mugen RR (FULL-BODY)",
    price: "8,200,000 บาท",
    image:
      "https://images.collectingcars.com/070705/DSC05341-Edit.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85",
    specs: ["วัสดุ: ", "เหมาะกับ ", "รับประกัน "],
  },
];

export default function ProductDetail() {
  const { id } = useParams(); // ดึง id จาก URL
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>ไม่พบสินค้านี้</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "500px", width: "100%", height: "auto" }}
      />
      <p style={{ fontSize: "30px", marginTop: "20px" }}>
        ราคา: <strong>{product.price}</strong>
      </p>
      <h3>สเปคสินค้า</h3>
      <ul style={{ listStyle: "none", padding: 2 }}>
        {product.specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  );
}
