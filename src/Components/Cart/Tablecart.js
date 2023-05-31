import React from "react";
import product from "../../assets/images/cart-product.jpg";
import tableCartStyles from "./Tablecart.module.css";

function Tablecart() {
  return (
    <div className={tableCartStyles.wrapper}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <div className={tableCartStyles.h3}>عربة التسوق</div>
          {/* <div class="text-uppercase">6 Products</div> */}
        </div>
        <div className={`ml-auto ${tableCartStyles.btn}`}>
          <span className="fas fa_cog" />
        </div>
        <div className={tableCartStyles.btn} id={tableCartStyles.sub}>
          اذهب للتسوق
        </div>
      </div>
      <div
        className={`${tableCartStyles.notification} ${tableCartStyles.alert} ${tableCartStyles.alert_dismissible} ${tableCartStyles.fade} ${tableCartStyles.show} text-white d-flex align-items-center my-3 text-justify`}
        role="alert"
      >
        <span className="far fa-bell pr-2" />
        لديك 3 منتجات في عربة التسوق الخاصة بك تحقق من ذلك!
      </div>
      <div
        id={tableCartStyles.table}
        className={`bg-white ${tableCartStyles.rounded}`}
      >
        <div className="d-md-flex align-items-md-center px-3 pt-3">
          <div className="d-flex flex-column">
            <div className={`${tableCartStyles.h4} font-weight-bold`}>
              قائمة المنتجات
            </div>
            <div className={tableCartStyles.text_muted}>400 منتج</div>
          </div>
          <div className="ml_auto d-flex align-items-center">
            <div className={tableCartStyles.editors}>
              <img src={product} id={tableCartStyles.img1} alt="" />
              <img src={product} id={tableCartStyles.img2} alt="" />
              <img src={product} id={tableCartStyles.img3} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="table_responsive">
          <table
            className={`${tableCartStyles.table} ${tableCartStyles.activitites}`}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className={`${tableCartStyles.text_uppercase} ${tableCartStyles.header}`}
                >
                  اسم المنتج
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  الكمية
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  السعر
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  السعر الكلي
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tableCartStyles.item}>
                  <div className={`d-flex`}>
                    <img src={product} alt="" />
                    <div className={`pl-2`}>
                      تمر سكري
                      <div
                        className={`${tableCartStyles.text_uppercase} ${tableCartStyles.new}`}
                      >
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className={tableCartStyles.text_muted}>
                          التصنيف
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>120</td>
                <td className="d-flex flex-column">
                  <span className={tableCartStyles.red}>$21.40</span>
                  <del className={tableCartStyles.cross}>$30.00</del>
                </td>
                <td className="font-weight-bold">$249</td>
                <td>
                  <div className={tableCartStyles.delete}>
                    <i className="fa-solid fa-xmark" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={tableCartStyles.item}>
                  <div className="d-flex align-items-start">
                    <img src={product} alt="" />
                    <div>
                      تمر سكري
                      <div
                        className={`${tableCartStyles.text_uppercase} ${tableCartStyles.new}`}
                      >
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className={tableCartStyles.text_muted}>
                          التصنيف
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>120</td>
                <td className="d-flex flex-column">$21.40</td>
                <td className="font-weight-bold">$249</td>
                <td>
                  <div className={tableCartStyles.delete}>
                    <i className="fa-solid fa-xmark" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={tableCartStyles.item}>
                  <div className="d-flex align-items-start">
                    <img src={product} alt="" />
                    <div>
                      تمر سكري
                      <div
                        className={`${tableCartStyles.text_uppercase} ${tableCartStyles.new}`}
                      >
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className={tableCartStyles.text_muted}>
                          التصنيف
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>120</td>
                <td className="d-flex flex-column">$21.40</td>
                <td className="font-weight-bold">$249</td>
                <td>
                  <div className={tableCartStyles.delete}>
                    <i className="fa-solid fa-xmark" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className={tableCartStyles.items} />
        <div className="table-responsive">
          <table className={tableCartStyles.table}>
            <thead>
              <tr>
                <th
                  scope="col"
                  className={`${tableCartStyles.text_uppercase} ${tableCartStyles.header}`}
                >
                  المنتج
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  الكمية
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  السعر
                </th>
                <th scope="col" className={tableCartStyles.text_uppercase}>
                  السعر الكلى
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tableCartStyles.item}>
                  <div className="d-flex align-items-start">
                    <img src={product} alt="" />
                    <div>تمر سكري</div>
                    <div
                      className={`${tableCartStyles.text_uppercase} ${tableCartStyles.new}`}
                    >
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                    </div>
                  </div>
                </td>
                <td>120</td>
                <td className="d-flex flex-column">$21.40</td>
                <td className="font-weight-bold">$249</td>
                <td>
                  <div className={tableCartStyles.delete}>
                    <i className="fa-solid fa-xmark" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-end align-items-end">
          <div
            className={`d-flex px-3 pr-md-5 py-1 ${tableCartStyles.subtotal}`}
          >
            <div className="px-4">المجموع الكلى</div>
            <div className={`${tableCartStyles.h5} font-weight-bold px-md-2`}>
              $1,340
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablecart;
