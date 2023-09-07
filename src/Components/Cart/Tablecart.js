import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import tableCartStyles from "./Tablecart.module.css";
import TableCartRow from "./TableCartRow";
import { Minus, Pluse, pushCart, removeCart } from "../../Redux/Slices/ProductSlice";
import emptey from '../../assets/images/emptycart.jpg'
import { textAlign } from "@mui/system";

function Tablecart() {
  const { mycart } = useSelector((state) => state.ProductSlice);
  const dispatch = useDispatch();
  const [arr, setArr] = useState(mycart);
  let x = localStorage.getItem("mycart");
  const api="http://localhost:3500/";

  x = JSON.parse(x);
  // console.log(x);

  useEffect(() => {
    

    setArr(localStorage.getItem('mycart'))
    console.log(mycart,"sssssssssssssssss");
    dispatch(pushCart(x));
    console.log(x);
  }, [])

console.log(arr , "asdasdsd");

  return (
    <div className={tableCartStyles.wrapper}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <div className={tableCartStyles.h3}>عربة التسوق</div>
        </div>
        <div className={`ml-auto ${tableCartStyles.btn}`}>
          <span className="fas fa_cog" />
        </div>
        <NavLink className={tableCartStyles.btn} id={tableCartStyles.sub} to="/product">
          اذهب للتسوق
        </NavLink>
      </div>
      {/* <> */}
      <>
        {
!arr?.length && ( 
          <div className={tableCartStyles.emptty}>
              <img src={emptey} alt="" />
              <h4> عربة التسوق فارغة</h4>
          </div>
          ) 
}
{
  arr&&


          
          
          (
            <>
              <div className={`${tableCartStyles.notification} ${tableCartStyles.alert} ${tableCartStyles.alert_dismissible} ${tableCartStyles.fade} ${tableCartStyles.show} text-white d-flex align-items-center my-3 text-justify`}
                role="alert"
              >
                <span className="far fa-bell pr-2" />
                لديك {mycart?.length} منتجات في عربة التسوق الخاصة بك تحقق من ذلك!
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
                  </div>
                </div>
                <div className={tableCartStyles.table_responsive}>
                  <table
                    className={`${tableCartStyles.table} ${tableCartStyles.activitites}`}
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className={`${tableCartStyles.text_uppercase} ${tableCartStyles.header}`}
                        >
                          صـورة المنتج
                        </th>
                        <th
                          scope="col"
                          className={`${tableCartStyles.text_uppercase} ${tableCartStyles.header}`}
                        >
                          اسم المنتج
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          نـوع الـمـنـتـج
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          السعر
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          +
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          الكمية
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          -
                        </th>
                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          السعر الكلي
                        </th>

                        <th scope="col" className={tableCartStyles.text_uppercase}>
                          حذف
                        </th>
                      </tr>
                    </thead>
                    {/* head end */}
                    <tbody>
                      {/* row start */}
                      {
                        mycart && mycart?.map((data, index) => {
                          // return <TableCartRow data={item} key={index} />
                          return   <>
                          <tr>
                            <td className={tableCartStyles.item}>
                                <img src={`${api}${data.imageUrl  }`} alt="" />
                            </td>
                            <td>{data.name}</td>
                            <td>{data.category}</td>
                            <td>{data.price}</td>
                            <td>
                              <button className={tableCartStyles.pluse} onClick={() => { dispatch(Pluse(data._id)) }}>
                                <i class="fa-solid fa-plus"></i>
                              </button>
                            </td>
                            <td className="font-weight-bold">{data.qq}</td>
                            <td>
                              <button className={tableCartStyles.pluse} onClick={() => { dispatch(Minus(data._id)) }}>
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </td>
                            <td className="font-weight-bold">{data.tot}</td>
                            <td>
                              <button className={tableCartStyles.delete} onClick={() => { dispatch(removeCart(data._id)) 
                                  setArr(localStorage.getItem('mycart'))
                                  console.log(arr);

                              
                              
                              }}>
                                <i className="fa-solid fa-xmark" />
                              </button>
                            </td>
                          </tr>
                        </>
                        })
                      }
                      {/* row end */}
                    </tbody>
                  </table>
                </div>
                <hr className={tableCartStyles.items} />
                <div className="table-responsive">
                  <table className={tableCartStyles.table}>
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-end align-items-end">
                  <div className={`d-flex px-3 pr-md-5 py-1 ${tableCartStyles.subtotal}`} >
                    <div className="px-4">المجموع الكلى</div>
                    <div className={`${tableCartStyles.h5} font-weight-bold px-md-2`}>
                      {mycart && mycart?.reduce((totalprice, item) => totalprice + (item.tot), 0)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkbtncon">
                <NavLink className={tableCartStyles.checkbtn} to="/checkout">
                  الى الحساب
                </NavLink>
              </div>
            </>

          )
        }
      </>

      {/* </> */}



    </div>

  );
}

export default Tablecart;
