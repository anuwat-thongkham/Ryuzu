import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const apiUrl = 'http://localhost:3000/api/products';
//import css
import '../style/global/global.css'
import '../style/component/DashboardStyle.css'
import '../style/component/Dashboard02Style.css'

import Sidebar from "../component/Sidebar";
import RightBar from "../component/RightBar";

export default function dashboard02() {
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]);



  return (
    <div className="cover-dashboard">
      <Sidebar buttonIndex={1}></Sidebar>
      <div className="main-section">
        <div className="main-content">
          <p className="main-header">Product</p>
          <div className="conclusion-card">
            <p className="conclusion-header">จำนวนรายการสินค้า</p>
            <p className="conclusion-display">{productCount}</p>
          </div>
          <div className="increase-card">
            <p className="increase-header">เพิ่มรายการสินค้า</p>
            <a href="/addproduct">
              {" "}
              {/* ลิงก์ไปยังหน้าเพิ่มรายการสินค้า */}
              <button className="material-symbols-rounded add-product-button">
                add
              </button>
            </a>
          </div>
          {/* <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>ราคา: {product.price}</p>
                <p>จำนวน: {product.quantity}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <RightBar></RightBar>
    </div>
  );
}
