import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.css';
import { add, addtofav } from '../../Redux/Slices/ProductSlice';
import { useDispatch, useSelector } from "react-redux";
import { showdetails } from '../../Redux/Slices/ProductSlice';
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal,Button} from "@nextui-org/react";

function Productcard({ dataa }) {
    const [data, setaData] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let nav = useNavigate();
    useEffect(() => {
        setaData(dataa)
        let role = localStorage.getItem("role");
        if (role === "user") {
            setIsLoggedIn(true);
        } else if (role === "farmer") {
            setIsLoggedIn(true);
        } else if (role === "engineer") {
            setIsLoggedIn(true);
        }
    })
    const api = "http://localhost:3500/";
    const dispatch = useDispatch();
    const { details } = useSelector((state) => state.ProductSlice);

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const notify1 = (data) => toast(`🦄 تـم اضـافـه ${data.name} في الـسـله بنـجاح `, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notify = (data) => toast(`🦄 تـم اضـافـه ${data.name} في المـفـضـله بنـجاح`, {
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
        <div className={styles.item}>
            <div className={styles['item__img']}>
                <img src={`${api}${data?.imageUrl}`} alt="" />
            </div>
            <div className={`${styles.item_dec}`}>
                <div className={styles['item_dec_text']}>
                    <h4> اسـم الـمـنـتـج : {data?.name} </h4>
                </div>
                <div className={styles['item_dec_text']}>
                    <h4>نوع الـمـنـتـج : {data?.category} </h4>
                </div>
                <div className={styles['item_dec_price']}>
                    <p>الـسـعر : {data?.price} </p>
                </div>
                <div className={styles['button-group']}>
                    <a onClick={() => isLoggedIn ? (
                        dispatch(
                            add({ ...data, qq: 1, tot: data?.price, totalprice: 0 }),
                            notify1(data)
                            )) :
                        (
                            nav('/welcome')
                        )
                    }
                    >
                        <button className={styles['btn_cart']} type="button" title=" أضف إلى عربة التسوق">
                            <a className={`${['fa fa-shopping-cart']}`}></a>
                        </button>
                    </a>
                    <a onClick={() => {
                        dispatch(addtofav(data))
                        notify(data)
                    }}>
                        <button className={styles['btn_cart']}>
                            <i className={`${['fa fa-heart']}`} ></i>
                        </button>
                    </a>
                    <Button className={`${styles.btn_cart} `} auto flat color="error" onPress={handler} onClick={() => {
                        dispatch(showdetails(data))
                    }}>
                        <a className={`${['fa  fa-eye']}`}></a>
                    </Button>
                    <Modal width='1000px' open={visible} onClose={closeHandler}>
                        <Modal.Header
                            css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                        >
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-body">
                                <div className="row d-flex">
                                    <div className="col-md-6 col-sm-12 col-xs-12" style={{ direction: "rtl", textAlign: "right" }}>
                                        <div className={`${"pr-30 pl-30"} ${styles.detail_info} `}>
                                            <span className={`${styles.stock_status}  ${styles.out_stock} `}> available </span>
                                            <h3 className="title-detail">
                                                <a href="shop-product-right.html" className={styles.text_heading}>
                                                    {details[0]?.description}
                                                </a>
                                            </h3>
                                            <div className={styles['product-detail-rating']}>
                                                <Rating name="read-only" value={details[0]?.rates} readOnly
                                                    style={{ direction: "ltr" }}
                                                />
                                            </div>
                                            <div className={styles.product_price_cover}>
                                                <div className={` ${styles.product_price} ${"primary-color float-left"}`}>
                                                    <span>
                                                        <span className={` ${styles.save_price} ${"font-md color3 ml-15"}`}>26% Off</span>
                                                        <span className={` ${styles.old_price} ${"font-md ml-15"}`}>{details[0]?.price + 10}</span>
                                                    </span>
                                                </div>
                                                <div className={` ${styles.product_price} ${"primary-color float-left"}`}>
                                                    <span className={styles.current_price}>${details[0]?.price}</span>
                                                </div>
                                            </div>

                                            <div className={` ${styles.detail_extralink} ${"mb-30"}`}>
                                            </div>
                                            <div className={styles.font_xs}>
                                                <ul>
                                                    <li className={"mb-5"}>
                                                        اسـم الـمـنـتـج:<span className={styles.text_brand}>  {details[0]?.name}</span>
                                                    </li>
                                                    <li className={"mb-5"}>
                                                        نوع المنتج  :<span className={styles.text_brand}>  {details[0]?.category}</span>
                                                    </li>
                                                    <li className={"mb-5"}>
                                                        الوصف :<span className={styles.text_brand}>  {details[0]?.description}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Detail Info */}
                                    </div>
                                    <div className={` ${["col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5"]} ${styles.immg}`}>
                                        <div className={styles.detail_gallery}>
                                            {/* MAIN SLIDES */}
                                            <div className={styles.product_image_slider}>
                                                <figure className="border-radius-10">
                                                    <img
                                                        src={`http://localhost:3500/${details[0]?.imageUrl}`}
                                                        alt="product image"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <ToastContainer/>
            </div>
        </div>

    );
}

export default Productcard;