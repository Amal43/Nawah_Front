import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getOneEng } from '../../Redux/Slices/EngineerSlice'

function EngineerBio() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.UserSlice) // Get Al Products Array Kolaha
  const [engineer, setengineer] = useState([]);
  useEffect(() => {
    dispatch(getOneEng()).then((result) => {
      setengineer(result.payload);
    })
  }, [])
  console.log(engineer);
  return (
    <>
    <div className="container" dir="rtl">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">معلومات المهندس:</h3>
          <div className="row">
              <div className={"fs-6 col-md-6 mb-3"}>
                <span className={"fw-bold"}>الاسم : </span> {engineer?.fname}
              </div>
              <div className={"fs-6 col-md-6 mb-3"}>
                <span className={"fw-bold"}>اسم العائلة : </span> {engineer?.lname}
              </div>
            
            <div className={"fs-6 col-md-6 mb-3"}>
              <span className={"fw-bold"}>الدولة: </span> Egypt
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>العنوان : </span> {engineer?.address}
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>الإيميل : </span> {engineer?.email}
            </div>
            <div className={"fs-6 col-md-6  mb-3"}>
              <span className={"fw-bold"}>رقم الهاتف: </span> {engineer?.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EngineerBio