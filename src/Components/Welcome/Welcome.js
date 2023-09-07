import React from 'react';
import welcome from './Welcome.module.css';
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <section className={welcome.welcomesection}>
      <div className={welcome.containerr}>
        <div className={welcome.header}>
          <h1>نــواة</h1>
        </div>
        <p className={welcome.para}>
          نساعدك لتعيش حياة صحية بشكل أفضل
        </p>
        <div className={welcome.roww}>
          <NavLink to="/farmerlogin" className={welcome.farmer}>
            سجل الدخول كمزارع
          </NavLink>
          <NavLink to="/userlogin" className={welcome.user}>
            سجل الدخول كمستخدم
          </NavLink>
          <NavLink to="/engineerlogin" className={welcome.user}>
            سجل الدخول كمهندس 
          </NavLink>
        </div>
      </div>
    </section>
  )
}
export default Welcome