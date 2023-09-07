import React from 'react';
import tableCartStyles from "./Tablecart.module.css";
import { add, Pluse, removeCart, Minus } from "../../Redux/Slices/ProductSlice";
import { useDispatch, location } from "react-redux";


function TableCartRow({ data }) {
  
  const api="http://localhost:3500/";
  const dispatch = useDispatch();
// console.log(data);
  return (
    <>
      <tr>
        <td className={tableCartStyles.item}>
            <img src={`${data.imageUrl}`} alt="" />
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
          <button className={tableCartStyles.delete} onClick={() => { dispatch(removeCart(data._id)) }}>
            <i className="fa-solid fa-xmark" />
          </button>
        </td>
      </tr>
    </>
  )
}

export default TableCartRow;