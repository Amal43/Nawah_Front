import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { add, deletefav, pushCart, pushFav, removeCart } from '../../Redux/Slices/ProductSlice';
import styles from './FarmerStyle.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FarmerFav() {


    // const { mycart } = useSelector((state) => state.ProductSlice);
    // const [arr, setArr] = useState(mycart);
    // let xx = localStorage.getItem("mycart");

    // xx = JSON.parse(xx);
    // console.log(xx,"xxxxxx");

    // useEffect(() => {


    //   setArr(localStorage.getItem('mycart'))
    //   console.log(mycart,"sssssssssssssssss");
    //   dispatch(pushCart(xx));
    // }, [])


    // constants
    const api = "http://localhost:3500/";
    const dispatch = useDispatch();

    const { farmerfav } = useSelector((state) => state.ProductSlice);
    let x = localStorage.getItem("farmerfav");
    x = JSON.parse(x);
    useEffect(() => {
        dispatch(pushFav(x))
    }, []);


    const notify = (data) => toast(`🦄 تـم أضـافه ${data.name} الـي السـله بنـجاح`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    return (
        <>
            <h4>
                المفضلة
                <i class="fa-solid fa-heart fa-bounce" style={{ color: " #ff0000", marginRight: "15px" }}></i>
            </h4>
            <div>
                <Table responsive="xl">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>صـورة الـمـنـتـج</th>
                            <th>أسـم الـمـنـتـج</th>
                            <th>نـوع الـمـنـتـج</th>
                            <th>سـعـر الـمـنـتـج</th>
                            <th>حالة الـمـنـتـج</th>
                            <th> أضف الـي الـسله</th>
                            <th> حذف الـمنـتج</th>
                        </tr>
                    </thead>
                    {
                        farmerfav && farmerfav.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{++index}</td>
                                        <td className={styles.aa}>
                                            <img src={`${api}${item.imageUrl}`} alt="" className={styles.roundedCircle} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price}</td>
                                        <td>{item.status}</td>
                                        {/* <td>{item.rate}</td> */}
                                        <td>
                                            {/* <a onClick={() =>
                                                dispatch(add({ ...data, qq: 1, tot: data.price, totalprice: 0 }));
                                                }> */}
                                            <a onClick={() =>
                                                dispatch(add({ ...item, qq: 1, tot: item.price, totalprice: 0 }),
                                                notify(item)

                                                )
                                            }>

                                                <button className={styles['btn_cart']} type="button" title=" أضف إلى عربة التسوق">
                                                    <a className={`${['fa fa-shopping-cart']}`}></a>
                                                </button>
                                            </a>
                                        </td>
                                        <td>
                                            <button className={styles['btn_cart']}  onClick={() => {
                                                dispatch(deletefav(item._id))
                                                // setArr(localStorage.getItem('mycart'))



                                            }}>
                                                <i className="fa-solid fa-xmark" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
            <ToastContainer/>

        </>
    )
}

export default FarmerFav