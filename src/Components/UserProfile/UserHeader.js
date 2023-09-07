import React from 'react';
import UserHederStyle from './UserHeader.module.css';

export default function FarmHeader({UserData}) {
  return (
    <>
      <section className={ UserHederStyle.userprofile}>
        <div className={"container"}>
            <div className={ UserHederStyle.user_header_section}>
              <div className={ UserHederStyle.profile_pic}>
                  <img className={ UserHederStyle.imagepro}src={`http://localhost:3500/${UserData?.img}`} alt=""/>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
