import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/ae82ddcb42f1cfb920a3e739a61aeb4f-removebg-preview.png";
import Trend from "./Trending.module.css";
import { gettoprate } from '../../Redux/Slices/ProductSlice';
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";


function TrendingHome() {
  const { toprate } = useSelector((state) => state.ProductSlice);
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setArr(toprate);
  }, [toprate]);

  useEffect(() => {
    dispatch(gettoprate())
      .then((result) => {
        setArr([...result.payload]);
        console.log('inhome', arr);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);


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
                الأكثر تقييمًا
              </a>
            </li>
          </ul>
        </div>

        <div className={Trend.row}>
          <div className={Trend.cards}>
            {
              arr && arr.map((item, index) => {
                return (
                  <>
                    <div className={Trend.item}>
                      <div className={Trend['item__img']}>
                        <img src={`http://localhost:3500/${item?.imageUrl}`}alt="" />
                      </div>
                      <div className={`${Trend.item_dec} ${"mt-2"}`}>
                        <div className={Trend['item_dec_text']}>
                          <h4>اسـم الـمنـتج : {item.name}</h4>
                        </div>
                        <div className={Trend['item_dec_text']}>
                          <h4> {item.category} : نوع المنتج</h4>
                        </div>
                        <div className={Trend['item_dec_price']}>
                          <p>{item.price} : الـسـعر </p>
                        </div>
                        <div className={Trend['button-group']}>
                          <Rating name="read-only" value={item.rates} readOnly
                            style={{ direction: "ltr" , display:"block"}}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}


export default TrendingHome;
