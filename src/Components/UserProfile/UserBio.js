import React from 'react';

function UserBio({UserData}) {
  return (
    <div className="container" dir="rtl">
        {/* Bio Graph Started */}
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">معلومات المزارع:</h3>
            <div className="row">
              <div className="fs-6 col-md-6">
                <span className="fw-bold">الاسم : </span> {UserData?.fname}
              </div>
              <div className="fs-6 col-md-6 ">
                <span className="fw-bold">اسم العائلة : </span> {UserData?.lname}
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">الدولة: </span> مصر
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">تاريخ الميلاد : </span> 8 Nov 2022
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">العنوان : </span> {UserData?.address}
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">الإيميل : </span> {UserData?.email}
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">رقم الهاتف : </span> {UserData?.phone}
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">عدد الموردون  : </span>  ٤٠ مورد 
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">عدد المخازن : </span> ٢٥٦ مخزن
              </div>
              <div className="fs-6 col-md-6">
                <span className="fw-bold">الأنواع المباعة : </span> صنف مجدول وصقعي وخلاص
              </div>
            </div>
          </div>
        </div>     
    </div>
  )
}

export default UserBio;