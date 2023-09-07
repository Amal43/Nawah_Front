import React, {useState} from 'react'
import styles from './Form.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerFarmer } from '../../Redux/Slices/FarmerSlice'
import { useDispatch } from 'react-redux'



function Form() {

  // Constants
  let nav = useNavigate();
  const dispatch = useDispatch();

  //State for SignUp if it success 
  const [success,setSuccess] =useState(null);

  // YUB Validation
  let schema = Yup.object().shape({
    fname: Yup.string().min(3,"يجب أن يكون الاسم أكثر من ثلاث أحرف").required('هذا الحق مطلوب'),
    lname: Yup.string().required('هذا الحقل مطلوب'),
    email: Yup.string().min(15,"يجب أن يكون هذا الحقل أكثر من 15 حرف ").required('هذا الحقل مطلوب')
    .email("يجب أن يحتوي على @"),
    password: Yup.string().min(6,"يجب أن يكون هذا الحق أكثر من 6 أحرف").required('هذا الحقل مطلوب'),
    phone:    Yup.string().min(11,"يجب ان يكون هذا الحقل أكثر من 11 رقم").required('هذا الحقل مطلوب'),
    address:  Yup.string().required('هذا الحقل مطلوب'),
    croptype: Yup.string().required('هذا الحقل مطلوب'),
    cropamount: Yup.string().required('هذا الحقل مطلوب'),
    farmarea: Yup.string().required('هذا الحقل مطلوب'),
    farmaddrees: Yup.string().required('هذا الحق مطلوب'),
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
      croptype:"",
      farmarea:"",
      cropamount:"",
      farmaddrees:"",
      img: null,
    },
    validationSchema:schema,

    // On Submit 
    onSubmit:async(values) =>{

      // send data in form of multipart/form-data(encreyption)
      let form = new FormData();
      form.append("fname", values.fname);
      form.append("lname", values.lname);
      form.append("email", values.email);
      form.append("password", values.password);
      form.append("phone", values.phone);
      form.append("croptype", values.croptype);
      form.append("cropamount", values.cropamount);
      form.append("farmarea", values.farmarea);
      form.append("farmaddress", values.farmaddrees);
      form.append("address", values.address);
      form.append("img", values.img);
      try {
        await dispatch(registerFarmer(form));
        setSuccess('Farmer registered successfully!');
        nav('/farmerlogin');
      } catch (error) {
        console.log(error);
        setSuccess('Error registering Farmer. Please try again.');
      }
    }
  })


  return (
    <div className={`${styles["main-parent"]} ${styles["signup"]}`}>
        <div className={`${styles["form-wrap"]} ${styles["signup-wrap"]}`}>
        {success && <p>{success}</p>}
          <form onSubmit={formik.handleSubmit}>

            <div className={styles["profile-pic"]}>
              <label className={styles["-label"]} htmlFor="file">
                <span>اختر صورة</span>
              </label>
              <input id="file" type="file"
                name="img" className="form-control"
                onChange={(e)=>{formik.setFieldValue('img',e.currentTarget.files[0])}}
              />
              <img src={formik.values.img!=null? URL.createObjectURL(formik.values.img):"alaa akram"} id="output"  />
            </div>

            <div className="row justify-content-between">

              <div className="col-6">
                <div className={styles["single-input"]}>
                  <label htmlFor="fname">الاسم الأول :</label>
                  <input type="text" id="fname" name="fname" 
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({fname:true})
                      }}
                    style={{ border: formik.touched.fname &&formik.errors.fname ? 'solid 1px red' : '' }} 
                  />
                    {formik.touched.fname && <small style={{color: 'red'}}>{formik.errors.fname}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="phone">رقم الهاتف:</label>
                  <input type="text" id="phone" name="phone"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({phone:true})
                      }}
                    style={{ border: formik.touched.phone &&formik.errors.phone ? 'solid 1px red' : '' }} 
                  />
                    {formik.touched.phone && <small style={{color: 'red'}}>{formik.errors.phone}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="email">الإيميل:</label>
                  <input type="email" id="email" name="email"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({email:true})
                      }}
                    style={{ border: formik.touched.email &&formik.errors.email ? 'solid 1px red' : '' }} 
                  />
                    {formik.touched.email && <small style={{color: 'red'}}>{formik.errors.email}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="farmaddress">عنوان المزرعة:</label>
                  <input type="text" id="farmaddress" name="farmaddrees"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({farmaddrees:true})
                      }}
                    style={{ border: formik.touched.farmaddrees &&formik.errors.farmaddrees ? 'solid 1px red' : '' }}  
                  />
                    {formik.touched.farmaddrees && <small style={{color: 'red'}}>{formik.errors.farmaddrees}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="cropammont">كمية المحصول:</label>
                  <input type="text" id="cropamount" name="cropamount"
                   onChange={formik.handleChange}
                   onBlur={()=>
                    {
                      formik.setTouched({cropamount:true})
                    }}
                    style={{ border: formik.touched.cropamount &&formik.errors.cropamount ? 'solid 1px red' : '' }} />
                   {formik.touched.cropamount && <small style={{color: 'red'}}>{formik.errors.cropamount}</small>}
                </div>
              </div>

              <div className="col-6">
                <div className={styles["single-input"]}>
                  <label htmlFor="lname"> الإسم الأخير:</label>
                  <input type="text" id="lname" name="lname"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({lname:true})
                      }}
                    style={{ border: formik.touched.lname &&formik.errors.lname ? 'solid 1px red' : '' }}
                  />
                    {formik.touched.lname && <small style={{color: 'red'}}>{formik.errors.lname}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="address">العنوان:</label>
                  <input type="text" id="address" name="address"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({address:true})
                      }}
                    style={{ border: formik.touched.address &&formik.errors.address ? 'solid 1px red' : '' }}
                  />
                    {formik.touched.address && <small style={{color: 'red'}}>{formik.errors.address}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="pass">كلمة السر:</label>
                  <input type="password" id="pass" name="password"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({password:true})
                      }}
                    style={{ border: formik.touched.password &&formik.errors.password ? 'solid 1px red' : '' }}
                  />
                    {formik.touched.password && <small style={{color: 'red'}}>{formik.errors.password}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="farmarea"> مساحة المزرعة:</label>
                  <input type="text" id="farmarea" name="farmarea"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({farmarea:true})
                      }}
                    style={{ border: formik.touched.farmarea &&formik.errors.farmarea ? 'solid 1px red' : '' }}
                  />
                    {formik.touched.farmarea && <small style={{color: 'red'}}>{formik.errors.farmarea}</small>}
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor>نوع المحصول:</label>
                  <input type="text" id="croptype" name="croptype"
                    onChange={formik.handleChange}
                    onBlur={()=>
                      {
                        formik.setTouched({croptype:true})
                      }}
                    style={{ border: formik.touched.croptype &&formik.errors.croptype ? 'solid 1px red' : '' }}
                  />
                    {formik.touched.croptype && <small style={{color: 'red'}}>{formik.errors.croptype}</small>}
                </div>
              </div>

              <div className={`${styles["submit-btn"]} ${styles["signup-btn"]}`}>
                <input type="submit" defaultValue="Submit" value="تسجيل" />
              </div>

              <div className={styles["account-have"]}>
                <NavLink>الشروط والأحكام</NavLink>
                <NavLink to="/farmerlogin"> لديك حساب بالفعل !</NavLink>
              </div>
              
            </div>               
          </form>
        </div>
    </div>
  );
}
export default Form;