import React, { useState,useEffect } from 'react';
import styles from './UserLogin.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {loginUser,getUserOne} from '../../Redux/Slices/UserSlice';

function UserLogin() {

  // Constants
  let nav = useNavigate();
  const dispatch = useDispatch();

  //State for login if it success 
  const [success,setSuccess] =useState(null);

 // YUb Validation
  let schema = Yup.object().shape({
    email: Yup.string().min(15,"must be more than 15 letters").required('This field is required')
    .email("Plase enter a valid email address"),
    password: Yup.string().min(6,"Password must be at least 6 letters").required('This field is required'),
  })

  // Values Intialization
  let formik = useFormik({
    initialValues:{  
      email:"",
      password:"", 
    },
    validationSchema:schema,

  // On Submit 
    onSubmit:async(values) =>{

      // send data in form of multipart/form-data(encreyption)
      let form = new FormData(); 
      form.append("email", values.email);
      form.append("password", values.password);
      try {
        dispatch(loginUser(values))
        setSuccess('User loggedin successfully!');
        nav('/home');
      }catch (error) {
        console.log(error);
        setSuccess('Error lggedin user. Please try again.');
      }
    }
  })

  return (
    <div>
    <img src="" alt=''/>
    <div className={`${styles["main-parent"]} ${styles['log-in']}`}>
      <div className={`${styles["form-wrap"]} ${styles["login-wrap"]}`}>
      {success && <p>{success}</p>}

        <form onSubmit={formik.handleSubmit}>
          <h1><span>تسجيل </span>الدخول</h1>

          <div className={styles['single-input']}>
            <label htmlFor="email">الإيميل:</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} />
          </div>

          <div className={styles['single-input']}>
            <label htmlFor="pass">كلمة السر:</label>
            <input type="password" id="pass" name="password" onChange={formik.handleChange} />
          </div>

          <div className={`${styles["submit-btn"]} ${styles["login-btn"]}`}>
            <input type="submit" className={styles["login__btn"]} value="تسجيل الدخول"/>
          </div>

          <div className={styles['account-have']}>
            <NavLink >هل نسيت كلمة السر؟</NavLink>
            <NavLink to="/usersignup">أنشئ حساب !</NavLink>
          </div>       
                  
        </form>
      </div>
    </div>
  </div>
  )
}

export default UserLogin;