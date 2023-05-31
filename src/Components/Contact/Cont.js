import React from 'react'
import styles from './Contact.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import img from'../assets/imgs/undraw_term_sheet_re_ju7s.svg'
import img from '../../assets/images/Caribbean_thomas-lefebvre-unsplash.webp'
function Cont() {
  return (
    <section className={styles.contactussection} id={styles.contactussection}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className={styles['section-text']}>
            {/* <h5 class="section-subtitle">Contact Us</h5> */}
            <h2 className={styles['section-title']}>تواصل معنا</h2>
            <p className={styles['section-description']}>
              في حال احتياجك إلى التحدث معنا لأي سبب لا تتردد في التواصل معنا
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className={styles['contact-form']}>
            <form method="post" className={styles['contact-form-aqua']}>
              <h2 className={styles['contact-head'] }>أرسل رسالة :</h2>
              <input
                type="text"
                name="name"
                required=""
                placeholder="* الاسم"
                className={styles['contact-frm']}
              />
              <input
                type="email"
                name="email"
                required=""
                placeholder="* الايميل"
                className={styles['contact-frm']}
              />
              <textarea
                name="message"
                id="message"
                placeholder="* الرسالة"
                className={styles["contact-msg"]}
                defaultValue={""}
              />
              <input type="submit" defaultValue="إرسال" value='إرسال' className={styles["global-btn"]}/>
              <br />
              <br />
              <span className={styles['msgSubmit']} />
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles['contact-img']}>
            <img src={img} alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Cont