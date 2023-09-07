import React, { useEffect ,useState} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CheckoutStyle from'./Checkout.module.css';
import ProdImg from '../../assets/images/dates.png'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch, location } from "react-redux"
import { addorder } from '../../Redux/Slices/UserSlice';


function Checkout() {
    const { mycart } = useSelector((state) => state.ProductSlice);
    const dispatch = useDispatch();
    const nav=useNavigate();
    const total = mycart.totalprice;

    let fname=localStorage.getItem('fname');
    let lname=localStorage.getItem('lname');
    let address=localStorage.getItem('address');
    let phone=localStorage.getItem('phone');
    const[item,setItems]=useState([]);

    const handleDragStart = (e) => e.preventDefault();
    useEffect(()=>{
    document.getElementsByClassName('alice-carousel__prev-btn-item')[0].style.display='none';
    document.getElementsByClassName('alice-carousel__next-btn-item')[0].style.display='none';
    let arr=[];
    mycart.forEach(element => {
      arr.push( <img className={CheckoutStyle.prdimg} src={"http://localhost:3500/"+element.imageUrl} onDragStart={handleDragStart} role="presentation" />)
    });
    setItems([...arr]);
  },[]);

  console.log(item)
    const items =[
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
      <img className={CheckoutStyle.prdimg} src={ProdImg} onDragStart={handleDragStart} role="presentation" />,
    ];

    return (
        <div className={`${CheckoutStyle.modal} ${CheckoutStyle.clearfix}`}>
          <div className={CheckoutStyle.modal_product}>
            <div className={CheckoutStyle.product}>
              <div className={CheckoutStyle.product_slideshow}>
              <AliceCarousel mouseTracking items={item} style={{width:10}} autoPlayControls={false} keyboardNavigation={true}/>
              </div>
              <p className={CheckoutStyle.product_price}>
                السعر الكلى :{mycart.reduce((totalprice, item)=>totalprice+(item.tot),0)}
              </p>
            </div>
            <div className={CheckoutStyle.round_shape}/>
          </div>
          <div className={CheckoutStyle.modal_info}>
            <div className={CheckoutStyle.info}>
              <h2>معلومات الدفع</h2>
              <form action="#">
                <ul className={CheckoutStyle.form_list}>
                  <li className={CheckoutStyle.form_list_row}>
                    <div className={CheckoutStyle.user}>
                      <label htmlFor="#">الاسم الاول</label><br />
                      <input type="text" required value={fname}/>
                    </div>
                  </li>
                  <li className={CheckoutStyle.form_list_row}>
                    <div className={CheckoutStyle.user}>
                      <label htmlFor="#">الاسم الاخير</label><br />
                      <input type="text" required value={lname} />
                    </div>
                  </li>
                  <li className={CheckoutStyle.form_list_row}>
                    <div className={CheckoutStyle.user}>
                      <label htmlFor="#">رقم الهاتف</label><br />
                      <input type="text" required value={phone}/>
                    </div>
                  </li>
                  <li className={CheckoutStyle.form_list_row}>
                    <div className={CheckoutStyle.user}>
                      <label htmlFor="#">العنوان</label><br />
                      <input type="text" required value={address}/>
                    </div>
                  </li>
                </ul>
                <button  onClick={() => {
                  dispatch(addorder(mycart))
                  nav('/product')
                  }}>ادفع الآن</button>
              </form>
            </div>
          </div>
      </div>
    );
}

export default Checkout;