import React, { useEffect, useState } from 'react'
import FarmerStyle from "../FarmerProfile/FarmerStyle.module.css";
import EngineerStyles from './Engineer.module.css';
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Collapse } from 'reactstrap';
import EngineerBio from './EngineerBio';
import EngineerFarmer from './EngineerFarmer';
import { useDispatch } from 'react-redux';
import { GetAllFarmer, getOneEng } from '../../Redux/Slices/EngineerSlice';

function EngineerProfileSide() {
 
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenn, setIsOpenn] = React.useState(false);

    const dispatch = useDispatch();
    const [Eng, setEng] = useState([]);
    useEffect(() => {
      dispatch(getOneEng()).then((result) => {
        setEng(result.payload);
      })
    }, [])

  return (
    <div className="container">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

    <div className="row">

      {/* Profile Side Started*/}
      <div className={`col-md-3 ${FarmerStyle.profileNav}`}>
        <div>
          <div className={`${FarmerStyle.profile_heading} rounded-1`}>
            <h2 className={`text-center`}>{Eng?.fname}</h2>
            <h4 className={`text-center`}>{Eng?.lname}</h4>
          </div>
        </div>

        <ul className={`${EngineerStyles.nav_list}`}>
          <li>
              <Button className={EngineerStyles.iconn} color="success" > 
              <i className="fa fa-user"></i>
              معلومات</Button>
          </li>
          <li>
                  <Button className={EngineerStyles.iconn} color="success" onClick={() => {
                    setIsOpen(!isOpen)
                    dispatch(GetAllFarmer(Eng?._id))
                    
                  }}
                  >  
                  <i class="fa-solid fa-list"></i>
                  قائمة  المزارعين </Button>
          </li>
{/* 
          <li>
            <Button  color="success" shadow  className={FarmerStyle.iconn}>
            <i className="fa fa-edit"></i>
              تعديل البيانات
            </Button>
        
          </li> */}
        </ul>
      </div>


      {/* Bio Graph Started */}
      <div className="col-md-9">
          <div style={{
            display: '', width: 900, padding: 30
          }}>
            <Collapse isOpen={!isOpen}>
                <EngineerBio/>
            </Collapse>
          </div >

          <div style={{
            display: 'block', padding: 30
          }}>
            <Collapse isOpen={isOpen}>
                <EngineerFarmer/>
            </Collapse>
          </div >
          <div style={{
            display: 'block', padding: 30
          }}>
          </div >
      </div>
    </div>

  </div>
  )
}

export default EngineerProfileSide