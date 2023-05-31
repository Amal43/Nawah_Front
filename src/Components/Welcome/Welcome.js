import React from 'react'
import welcome from './Welcome.module.css'
import { NavLink } from 'react-router-dom'
function Welcome() {
  return (
    <section className={welcome.welcomesection}>
    <div className={welcome.containerr}>
    <div className={welcome.header}>
      <h1>نــواه</h1>
    </div>
    <p className={welcome.para}>
     نساعدك لتعيش حياة صحية بشكل أفضل
    </p>
    <div className={welcome.roww}>
      <NavLink to="/signup" className={welcome.farmer}>
        سجل الدخول كمزارع
      </NavLink>
      <NavLink to="/usersignup" className={welcome.user}>
       سجل الدخول كمستخدم
      </NavLink>
    </div>
  </div>
  </section>
  )
}

export default Welcome