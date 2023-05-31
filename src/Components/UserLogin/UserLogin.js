import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './UserLogin.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function UserLogin() {
  return (
    <div>
    <img src="" alt=''/>
    <div className={`${styles["main-parent"]} ${styles['log-in']}`}>
      <div className={`${styles["form-wrap"]} ${styles["login-wrap"]}`}>
        <form action>
          <h1><span>Login </span>Form</h1>
          <div className={styles['single-input']}>
            <label htmlFor="email">الإيميل:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles['single-input']}>
            <label htmlFor="pass">كلمة السر:</label>
            <input type="password" id="pass" name="pass" required />
          </div>
          <div className={`${styles["submit-btn"]} ${styles["login-btn"]}`}>
            <input type="submit" id={styles["login__btn"]} defaultValue="Login" value="تسجيل الدخول"/>
          </div>
          <div className={styles['account-have']}>
            <a href>هل نسيت كلمة السر؟</a>
            <NavLink to="/usersignup">أنشئ حساب !</NavLink>
          </div>               
        </form>
      </div>
    </div>
  </div>
  )
}

export default UserLogin