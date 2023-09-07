import description from "./Description.module.css";
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addRate } from'../../Redux/Slices/ProductSlice';
import { useDispatch } from 'react-redux';

function Descript() {
  const api="http://localhost:3500/";  
  const { details } = useSelector((state) => state.ProductSlice);
  console.log(details[0]?._id);
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#ffa500",
    grey: "#808080"
  }
  console.log(details[0]?.imageUrl);
  let realvalue = details[0];
  let currentvalue = Math.round(realvalue);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();

  // formic usage
  let schema = Yup.object().shape({
    rates: Yup.number(),
  })
  let formik = useFormik({
    initialValues: {
      rates: Number,
    },
    validationSchema: schema,
    onSubmit: (rates) => {
      console.log("first");
      try {
        dispatch(addRate({ rates, prodId: details[0]?._id }));
        setSuccess('rated successfully');
      } catch (error) {
        console.log(error);
        setSuccess('Error. Please try again.');
        console.log(rates);
      }
    }
  })

  return (
    <div className={description.iti}>
      <div className={description.card} dir="rtl"  >
        <div className={description.description}>
          <h2>{details[0]?.name}</h2>
          <h4>الأسعار تشمل ضريبة القيمة المضافة </h4>
          <h1>{details[0]?.price}</h1>
          <p>
            {details[0]?.description}
          </p>
          <div>
            {
              stars.map((item, index) => {
                return (
                  <FaStar key={index}
                    color={(currentvalue) > index ? colors.orange : colors.grey}
                  />
                )
              })
            }
          </div>
          <div className={description.rating}>
            <label>Rating:</label>
            <form onSubmit={formik.handleSubmit}>
              <input type="radio" name="rates" value="1" onChange={formik.handleChange} /><span>1</span>
              <input type="radio" name="rates" value="2" onChange={formik.handleChange} /><span>2</span>
              <input type="radio" name="rates" value="3" onChange={formik.handleChange} /><span>3</span>
              <input type="radio" name="rates" value="4" onChange={formik.handleChange} /><span>4</span>
              <input type="radio" name="rates" value="5" onChange={formik.handleChange} /><span>5</span>
              <input type="submit" value="enter rate value" />
            </form>
          </div>
          <div className={description.btncontainer}>
            <button type="button" className={`${"btn btn-outline-secondary"} ${description.btn_outline_secondary}`}>اضافه للعربه</button>
            <button type="button" className={`${"btn btn-secondary"} ${description.btn_secondary}`}>أذهب للمنتجات</button>
          </div>
        </div>
        <div className={description.photo}>
          <img src={`${api}${details[0]?.imageUrl}`} />
        </div>
        {/* carrd close */}
      </div>
      {/* section close */}
    </div>
  );
}

export default Descript;


