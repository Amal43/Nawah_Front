import React, { useState } from 'react';
import signup from './UserSignup.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';


function UserSignup() {

  // Constants
  let nav = useNavigate();
  const dispatch = useDispatch();

  //State for SignUp if it success 
  const [success,setSuccess] =useState(null);

   // YUB Validation
  let schema = Yup.object().shape({
    fname: Yup.string().min(3,"Name must be more than 3 letters").required('This field is required'),
    lname: Yup.string().required('This field is required'),
    email: Yup.string().min(15,"must be more than 15 letters").required('This field is required')
    .email("Plase enter a valid email address"),
    password: Yup.string().min(6,"Password must be at least 6 letters").required('This field is required'),
    phone:    Yup.string().min(11,"Phone Number must be 11 letters or more").required('This field is required'),
    address:  Yup.string().required('This field is required'),
  });
  
  // Values Intialization
  let formik = useFormik({
    initialValues:{
      fname:"",
      lname:"",
      email:"",
      password:"",
      phone:"",
      address:"",
      img: null,
    },
    validationSchema:schema,

  // On Submit 
    onSubmit: async(values) =>{

      // send data in form of multipart/form-data(encreyption)
      let form = new FormData();
      form.append("fname", values.fname);
      form.append("lname", values.lname);
      form.append("email", values.email);
      form.append("password", values.password);
      form.append("phone", values.phone);
      form.append("address", values.address);
      form.append("img", values.img);

      try {
        await dispatch(registerUser(form));
        setSuccess('User registered successfully!');
        nav('/userlogin');
      } catch (error) {
        console.log(error);
        setSuccess('Error registering user. Please try again.');
      }
    }
  })

  return (
  <div className={`${signup["main-parent"]} ${signup["signup-user"]}`}>
    <div className={`${signup["form-wrap"]} ${signup["signup-wrap"]}`}>
    {success && <p>{success}</p>}
      <form action="" onSubmit={formik.handleSubmit}>

        <div className={signup["profile-pic"]}>
          <label className={signup["-label"]} htmlFor="file">
            <span>اختر صورة</span>
          </label>
          <input
            id="file"
            type="file"
            name="img"
            className="form-control"
            onChange={(e)=>{formik.setFieldValue('img',e.currentTarget.files[0])}}
          />
            <img src={formik.values.img!=null? URL.createObjectURL(formik.values.img):"alaa akram"} id="output"  />
        </div>

        <div className="row justify-content-between">

          <div className="col-6">
            <div className={signup["single-input"]}>
              <label htmlFor="fname">الاسم الأول:</label>
              <input type="text" id="fname" name="fname"
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({fname:true})
                }}
                style={{ border: formik.touched.fname &&formik.errors.fname ? 'solid 1px red' : '' }} />
                {formik.touched.fname && <small style={{color: 'red'}}>{formik.errors.fname}</small>}
            </div>
            <div className={signup["single-input"]}>
              <label htmlFor="email">الإيميل:</label>
              <input type="email" id="email" name="email"
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({email:true})
                }}
                style={{ border: formik.touched.email &&formik.errors.email ? 'solid 1px red' : '' }} />
              {formik.touched.email && <small style={{color: 'red'}}>{formik.errors.email}</small>}
            </div>
            <div className={signup["single-input"]}>
              <label htmlFor="phone">رقم الهاتف:</label>
              <input type="text" id="phone" name="phone"
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({phone:true})
                }}
                style={{ border: formik.touched.phone &&formik.errors.phone ? 'solid 1px red' : '' }} />
              {formik.touched.phone && <small style={{color: 'red'}}>{formik.errors.phone}</small>}
            </div>
          </div>

          <div className="col-6">
            <div className={signup["single-input"]}>
              <label htmlFor="lname"> الاسم الأخير:</label>
              <input type="text" id="lname" name="lname" 
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({lname:true})
                }}
                style={{ border: formik.touched.lname &&formik.errors.lname ? 'solid 1px red' : '' }} />
              {formik.touched.lname && <small style={{color: 'red'}}>{formik.errors.lname}</small>}
            </div>
            <div className={signup["single-input"]}>
              <label htmlFor="pass">كلمة السر:</label>
              <input type="password" id="pass" name="password" 
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({password:true})
                }}
                style={{ border: formik.touched.password &&formik.errors.password ? 'solid 1px red' : '' }} />
              {formik.touched.password && <small style={{color: 'red'}}>{formik.errors.password}</small>}
            </div>
            <div className={signup["single-input"]}>
              <label htmlFor="address">العنوان:</label>
              <input type="text" id="address" name="address"
              onChange={formik.handleChange}
              onBlur={()=>
                {
                  formik.setTouched({address:true})
                }}
                style={{ border: formik.touched.address &&formik.errors.address ? 'solid 1px red' : '' }} />
              {formik.touched.address && <small style={{color: 'red'}}>{formik.errors.address}</small>}
            </div>
          </div>

          <div className={`${signup["submit-btn"]} ${signup["signup-btn"]}`}>
            <input type="submit"  value="تسجيل"/>
          </div>

          <div className={signup["account-have"]}>
            <NavLink to="">الشروط والأحكام</NavLink>
            <NavLink to="/userlogin">هل لديك حساب بالفعل ؟ </NavLink>
          </div>
          
        </div>
      </form>
    </div>
  </div>

  )
}

export default UserSignup