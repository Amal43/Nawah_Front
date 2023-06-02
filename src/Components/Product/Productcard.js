import React from 'react'
import ProdImg from'../../assets/images/beautiful-wooden-floor-and-barhi-dates-palm-yellow-fruits-field-nature-background-agriculture-product-standing-showcase-background-barhi-dates-palm-tree-garden-and-healthy-food-concept-free-photo.jpg'
import styles from'./Product.module.css'

function Productcard({data}) {
  return (
    <div className={styles.item}>
    <div className={styles['item__img']}>
        <img src={ProdImg} alt=""/>
    </div>
    <div className={styles['item__dec']}>

        <div className={styles['item_dec_text']}>
            <h4>{data.name}</h4>
        </div>
        <div className={styles['item_dec_price']}>
            <p>{data.price} </p>
        </div>
        <div className={styles['button-group']}>
            <a href="/cart.html">
                <button className={styles['btn-cart']} type="button" title=" أضف إلى عربة التسوق">

                    <i className={`${['fa fa-shopping-cart']}`}></i> 
                </button>
            </a>
            <button className={styles['btn-wishlist']}>
                <i className={`${['fa fa-heart']}`} ></i>
            </button>
            <a href="/prod_desc.html">
                <button className={styles['btn-quickview']}type="button">
                    <i className={`${['fa  fa-eye']}`}></i>
                </button>
            </a>
        </div>
    </div>
</div>

  )
}

export default Productcard