import React from 'react';

function FarmarBio({FarmerData}) {
  return (
    <div className="container" dir="rtl">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">معلومات المزارع:</h3>
          <div className="row">
              <div className={"fs-6 col-md-6 mb-3"}>
                <span className={"fw-bold"}>الاسم : </span> {FarmerData?.fname}
              </div>
              <div className={"fs-6 col-md-6 mb-3"}>
                <span className={"fw-bold"}>اسم العائلة : </span> {FarmerData?.lname}
              </div>
            
            <div className={"fs-6 col-md-6 mb-3"}>
              <span className={"fw-bold"}>الدولة: </span> Egypt
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>العنوان : </span> {FarmerData?.address}
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>الإيميل : </span> {FarmerData?.email}
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>رقم الهاتف : </span> {FarmerData?.phone}
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>مساحة الأرض : </span>  {FarmerData?.farmarea} فدان
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>عدد النخيل : </span> {FarmerData?.cropamount} نخلة
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>أنواع المحصول : </span> {FarmerData?.croptype}
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>


  )
}

export default FarmarBio