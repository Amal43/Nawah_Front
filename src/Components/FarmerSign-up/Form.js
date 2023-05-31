import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Form.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form() {
  return (
    <div className={`${styles["main-parent"]} ${styles["signup"]}`}>
        <div className={`${styles["form-wrap"]} ${styles["signup-wrap"]}`}>
          <form>
            <div className={styles["profile-pic"]}>
              <label className="-label" htmlFor="file">
                <span>اختر صورة</span>
              </label>
              <input id="file" type="file" onchange="loadFile(event)" name="image" className="form-control" />
              <img src="assets/imgs/" id="output" alt="img" />
            </div>
            <div className="row justify-content-between">
              <div className="col-6">
                <div className={styles["single-input"]}>
                  <label htmlFor="fname">الإسم الأول:</label>
                  <input type="text" id="fname" name="fname"  />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="phone">رقم الهاتف:</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="email">الإيميل:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="farmaddress">عنوان المزرعة:</label>
                  <input type="text" id="farmaddress" name="farmaddrees"  />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="cropammont">كمية المحصول:</label>
                  <input type="text" id="cropamount" name="cropamount" />
                </div>
              </div>
              <div className="col-6">
                <div className={styles["single-input"]}>
                  <label htmlFor="lname"> الإسم الأخير:</label>
                  <input type="text" id="lname" name="lname" />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="address">العنوان:</label>
                  <input type="text" id="address" name="address"  />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="pass">كلمة السر:</label>
                  <input type="password" id="pass" name="pass" />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor="farmarea"> مساحة المزرعة:</label>
                  <input type="text" id="farmarea" name="farmarea" />
                </div>
                <div className={styles["single-input"]}>
                  <label htmlFor>نوع المحصول:</label>
                  <input type="text" id="croptype" name="croptype"/>
                </div>
              </div>
              <div className={`${styles["submit-btn"]} ${styles["signup-btn"]}`}>
                <input type="submit" defaultValue="Submit" value="تسجيل" />
              </div>
              <div className={styles["account-have"]}>
                <a href>الشروط والأحكام</a>
                <NavLink to="/login"> لديك حساب بالفعل !</NavLink>
              </div>
            </div>               
          </form>
        </div>
      </div>
  )
}

export default Form