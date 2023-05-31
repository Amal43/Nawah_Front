import React from 'react'
import Des from "./Description.module.css"
// import Product from "../assets/imgs/depositphotos_36557231-stock-photo-dried-dates-in-closeup.jpg"
import Product from "../../assets/images/3.jpg"

function Descript() {
  return (
<body>
    
    <section className={Des.product}>
    <div className={Des['product__photo']}>
      <div className={Des['photo-container']}>
        <div className={Des['photo-main']}> 
          <img src={Product} alt="green apple slice" />
        </div>
      </div>
    </div>
    <div className={Des['product__info']} dir="rtl">
      <div className={Des.title}>
        <h1>تمر جاف</h1>
        <span>كود:12345</span>
      </div>
      <div className={Des.price}>
        ج.م <span>7.93</span>
      </div>
      <div className={Des.description}>
        <h3>وصف المنتج</h3>
        <ul>
          <li>Apples are nutricious</li>
          <li>Apples may be good for weight loss</li>
          <li>Apples may be good for bone health</li>
          <li>They're linked to a lowest risk of diabetes</li>
        </ul>
      </div>
      <button className={Des['buy--btn']}>اضف الي عربة التسوق</button>
    </div>
  </section>
  </body>
  )
}

export default Descript