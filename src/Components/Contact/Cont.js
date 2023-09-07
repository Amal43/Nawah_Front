import React, { useState } from 'react';
import contactStyle from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/contactbg.png';
import { useDispatch } from 'react-redux';
import { addmessage } from "../../Redux/Slices/MessageSlice";
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cont() {
  const dispatch = useDispatch();
  let formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    // validationSchema:schema,

    onSubmit: async (values) => {

      // send data in form of multipart/form-data(encreyption)
      let form = new FormData();
      form.append("email", values.email);
      form.append("message", values.message);
      try {
        dispatch(addmessage(values))
        setAlert(true);
      } catch (error) {
        setAlert(false);
      }
    }
  })
  const [alert, setAlert] = useState(false)
  const notify = () => toast('🦄 تـم أرسـال الـرساله بنجـاح', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notify1 = () => toast.error('يـجـب ادخـال جـميـع الحـقول', {
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
    <section className={contactStyle.contactussection} id={contactStyle.contactussection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={contactStyle['section-text']}>
              <h2 className={contactStyle['section-title']}>تواصل معنا</h2>
              <p className={contactStyle['section-description']}>
                في حال احتياجك إلى التحدث معنا لأي سبب لا تتردد في التواصل معنا
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className={contactStyle['contact-form']}>
              <form method="post" className={contactStyle['contact-form-aqua']} onSubmit={formik.handleSubmit}>
                <h2 className={contactStyle['contact-head']}>أرسل رسالة :</h2>
                <input
                  type="text"
                  name="name"
                  required=""
                  placeholder="* الاسم"
                  className={contactStyle['contact-frm']}
                />
                <input
                  type="email"
                  name="email"
                  required=""
                  placeholder="* الايميل"
                  className={contactStyle['contact-frm']}
                  onChange={formik.handleChange}
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="* الرسالة"
                  className={contactStyle["contact-msg"]}
                  defaultValue={""}
                  onChange={formik.handleChange}
                />
                <input
                  type="submit"
                  defaultValue="ارسال"
                  value="ارسال"
                  className={contactStyle["global-btn"]}
                  onClick={()=>{
                    if(alert){
                      notify();
                    }
                    else{
                      notify1();
                    }
                  }}
                />
                 {/* <button onClick={notify}>Notify!</button> */}
              <ToastContainer/>
                <br />
                <br />
                <span className={contactStyle['msgSubmit']} />
              </form>
            </div>
          </div>

          <div className="col-lg-6 mx-auto">
            <div className={contactStyle['contact-img']}>
              <img src={img} alt="#" />
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Cont