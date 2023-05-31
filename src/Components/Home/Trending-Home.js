import React from "react";
import logo from "../../assets/images/clip-art-portable-network-graphics-palm-trees-image-transparency-png-favpng-QGGSuu1FE1p19Z7UeQmhMnnnT.jpg";
import product from "../../assets/images/th.webp";
// import './Trending.css'
import Trend from "./Trending.module.css";
function TrendingHome() {
  return (
    <section className={Trend.Trending}>
      <div className={Trend.container}>
        <div className={Trend.trend__header}>
          <img src={logo} alt="" />
          <h3> اخترنا لك</h3>
        </div>
        <div id="TTPTab-0" className={Trend.tab_box_heading}>
          <ul className={`${Trend.nav} ${Trend.nav_tabs}`}>
            <li className={Trend.active}>
              <a href="#tab-featured-0" data-toggle="tab">
                أفضل المنتجات
              </a>
            </li>
            <li>
              <a href="#tab-latest-0" data-toggle="tab">
                جديدنا
              </a>
            </li>
            <li>
              <a href="#tab-bestseller-0" data-toggle="tab">
                {" "}
                الأكثر مبيعًا
              </a>
            </li>
          </ul>
        </div>
        <div className={Trend.row}>
          <div className={Trend.cards}>
            <div className={Trend.card}>
              <div className={Trend.product_image}>
                <img
                  src={product}
                  alt="OFF-white Red Edition"
                  draggable="false"
                />
              </div>
              <div className={Trend.product_info}>
                <h2>تمور زغلول</h2>
                <p>من أسوان</p>
                <div className={Trend.price}>٩٩٩ ج.م</div>
              </div>
              <div className={Trend.btn}>
                <button className={Trend.buy_btn}>تسوق الآن</button>
                <button className={Trend.fav}>
                  <svg
                    className={Trend.svg}
                    id="i-star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={Trend.card}>
              <div className={Trend.product_image}>
                <img
                  src={product}
                  alt="OFF-white Red Edition"
                  draggable="false"
                />
              </div>
              <div className={Trend.product_info}>
                <h2>تمور زغلول</h2>
                <p>من أسوان</p>
                <div className={Trend.price}>٩٩٩ ج.م</div>
              </div>
              <div className={Trend.btn}>
                <button className={Trend.buy_btn}>تسوق الآن</button>
                <button className={Trend.fav}>
                  <svg
                    className={Trend.svg}
                    id="i-star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={Trend.card}>
              <div className={Trend.product_image}>
                <img
                  src={product}
                  alt="OFF-white Red Edition"
                  draggable="false"
                />
              </div>
              <div className={Trend.product_info}>
                <h2>تمور زغلول</h2>
                <p>من أسوان</p>
                <div className={Trend.price}>٩٩٩ ج.م</div>
              </div>
              <div className={Trend.btn}>
                <button className={Trend.buy_btn}>تسوق الآن</button>
                <button className={Trend.fav}>
                  <svg
                    className={Trend.svg}
                    id="i-star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* <div className="card">
                            <div className="product-image">
                                <img src={product} alt="OFF-white Red Edition" draggable="false" />
                            </div>
                            <div className="product-info">
                                <h2>تمر سكري</h2>
                                <p>من أسوان</p>
                                <div className="price">٩٩٩ ج.م</div>
                            </div>
                            <div className="btn">
                                <button className="buy-btn">تسوق الآن</button>
                                <button className="fav">
                                    <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="product-image">
                                <img src={product} alt="OFF-white Red Edition" draggable="false" />
                            </div>
                            <div className="product-info">
                                <h2>تمر عجوة</h2>
                                <p>من أسوان</p>
                                <div className="price">٩٩٩ ج.م</div>
                            </div>
                            <div className="btn">
                                <button className="buy-btn">تسوق الآن</button>
                                <button className="fav">
                                    <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                                    </svg>
                                </button>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingHome;
