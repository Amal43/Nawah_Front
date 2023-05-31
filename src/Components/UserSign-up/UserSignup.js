import React from 'react'
import signup from './UserSignup.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

function UserSignup() {
  return (
    <div className={`${signup["main-parent"]} ${signup["signup-user"]}`}>
  <div className={`${signup["form-wrap"]} ${signup["signup-wrap"]}`}>
    <form action="" >
      <div className={signup["profile-pic"]}>
        <label className="-label" htmlFor="file">
          <span>Select Your Pic</span>
        </label>
        <input
          id="file"
          type="file"
          onchange="loadFile(event)"
          name="image"
          className="form-control"
        />
        <img
          src="./imgs/[removal.ai]_tmp-63fa0a5e3c2bb.png"
          id="output"
          alt="img"
        />
      </div>
      <div className="row justify-content-between">
        <div className="col-6">
          <div className={signup["single-input"]}>
            <label htmlFor="fname">الاسم الأول:</label>
            <input type="text" id="fname" name="fname" required="" />
          </div>
          <div className={signup["single-input"]}>
            <label htmlFor="email">الإيميل:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={signup["single-input"]}>
            <label htmlFor="phone">رقم الهاتف:</label>
            <input type="text" id="phone" name="phone" required="" />
          </div>
        </div>
        <div className="col-6">
          <div className={signup["single-input"]}>
            <label htmlFor="lname"> الاسم الأخير:</label>
            <input type="text" id="lname" name="lname" required="" />
          </div>
          <div className={signup["single-input"]}>
            <label htmlFor="pass">كلمة السر:</label>
            <input type="password" id="pass" name="pass" required="" />
          </div>
          <div className={signup["single-input"]}>
            <label htmlFor="address">العنوان:</label>
            <input type="text" id="address" name="address" required="" />
          </div>
        </div>
        <div className={`${signup["submit-btn"]} ${signup["signup-btn"]}`}>
          <input type="submit" defaultValue="Submit" value="تسجيل"/>
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