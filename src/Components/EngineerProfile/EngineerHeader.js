import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getOneEng } from '../../Redux/Slices/EngineerSlice';
import FarmarHederStyle from '../FarmerProfile/FarmHeader.module.css';
function EngineerHeader() {
  const dispatch = useDispatch();
  const [Eng, setEng] = useState([]);
  useEffect(() => {
    dispatch(getOneEng()).then((result) => {
      setEng(result.payload);
    })
  }, [])
  return (
    <>
          <section className={FarmarHederStyle.userprofile}>
            <div className={"container"}>
                <div className={FarmarHederStyle.user_header_section}>
                  <div className={FarmarHederStyle.profile_pic}>
                      <img className={FarmarHederStyle.imagepro}src={`http://localhost:3500/${Eng?.img}`} alt=""/> 
                  </div>
                </div>
            </div>
      </section>
      </>
  )
}

export default EngineerHeader