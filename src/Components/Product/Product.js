import React, { useEffect } from 'react'
// import './Product.css'
import styles  from './Product.module.css'
import ProdImg from '../../assets/images/istockphoto-1150425221-612x612.jpg'
import icon from '../../assets/images/clip-art-portable-network-graphics-palm-trees-image-transparency-png-favpng-QGGSuu1FE1p19Z7UeQmhMnnnT.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getallproducts } from './../../Redux/Slices/ProductSlice'
import Productcard from './Productcard'

function Product() {
    const dispatch=useDispatch()
    const {products} =useSelector((state)=>state.ProductSlice)
    useEffect(()=>{
        dispatch(getallproducts())

    },[])
  return (
 

    <section className={styles.Product}>
    <div className={styles.container}>
        <div className={styles['prod__header']}>
            <img src={icon}
                alt=""/>
            <h2>المنتجات</h2>
        </div>
        <div className={styles['prod__butt']}>
            <li className={styles.active}><a href="#tab-featured-0" data-toggle="tab"> أفضل المنتجات</a></li>
            <li><a href="#tab-latest-0" data-toggle="tab">جديدنا</a></li>
            <li><a href="#tab-bestseller-0" data-toggle="tab"> الأكثر مبيعًا</a></li>
        </div> 
        <div className={styles.row}>
            <div className={styles.items}>
            {
       products&&products.map((item,index)=>{
             return <Productcard data={item} key={index}/>
        })
            }
                
            
            </div>
        </div>
    </div>
</section>
  )
}

export default Product