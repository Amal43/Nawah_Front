import React, { useEffect, useState } from 'react';
import UserStyle from "./UserStyle.module.css";
import { Link, NavLink, useNavigate, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOne } from '../../Redux/Slices/UserSlice';
import { Route, Routes } from 'react-router-dom';
import UserBio from '../UserProfile/UserBio';
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Collapse } from "reactstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UserOrder from './UserOrder';
import UserFav from './UserFav';
import UserHeader from '../UserProfile/UserHeader';


function UserProfileSide() {

  const [isInfoOpen, setIsInfoOpen] = React.useState(false);
  const [isFavOpen, setIsFavOpen] = React.useState(false);
  const [isOrderOpen, setIsOrderOpen] = React.useState(true);

  // ===============================get user data============================//
  // =========================================================================//
  const dispatch = useDispatch();
  const user = useSelector(state => state.UserSlice) // Get Al Products Array Kolaha
  const [userr, setUser] = useState([]);
  useEffect(() => {
    dispatch(getUserOne()).then((result) => {
      setUser(result.payload);
    })
  }, [])

  // ==================modal for edit====================================//
  const [EditVisible, setEditVisible] = React.useState(false);
  const handlerr = () => setEditVisible(true);
  const closeHandler = () => {
    setEditVisible(false);
    console.log("closed");
  };

  // ========================edit user information=============================//
  // ======================================================================//
  const [info, setInfo] = useState([]);
  let schema = Yup.object().shape({
    fname: Yup.string().required("يجب ادخال هذا الحقل"),
    lname: Yup.string().required("يجب ادخال هذا الحقل"),
    email: Yup.string().email("هذا الايميل غير صحيح").required("يجب ادخال هذا الحقل"),
    password: Yup.number().required("يجب ادخال هذا الحقل"),
    phone: Yup.number().required("يجب ادخال هذا الحقل"),
    address: Yup.string().required("يجب ادخال هذا الحقل"),

  })
  const formikedit = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      img: null

    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values)
      const token = localStorage.getItem('token');

      // send to backend
      try {

        const response = await axios.put(`http://localhost:3500/user/edituser/${token}`, {
          fname: values.fname,
          lname: values.lname,
          email: values.email,
          password: values.password,
          phone: values.phone,
          address: values.address,
          img: values.img.name
        });
        console.log(response.data);
        setInfo(response.data.data)
      } catch (error) {
        console.error(error);
      }
    },
  })

  // to rerender after editing
  useEffect(() => {
    if (info) {
      dispatch(getUserOne()).then((result) => {
        setUser(result.payload);
      })
      setEditVisible(false);
    }
  }, [info])
  return (
    <>

      <UserHeader UserData={userr} />
      <div className="container" >
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className={UserStyle.row}>
          <div className="row">
            {/* Profile Side Started*/}
            <div className={`col-md-3 ${UserStyle.profileNav} `}>
              <div>
                <div className={`${UserStyle.profile_heading} rounded-1`}>
                  <h2 className={`text-center`}>{`${userr.fname} ${userr.lname}`}</h2>
                  <h4 className={`text-center`}>{userr.email}</h4>
                </div>
              </div>

              <ul className={`${UserStyle.nav_list}`}>
                <li className={UserStyle.nav_item}>
                  <Button className={UserStyle.iconn} color="success" onClick={() => {
                    setIsInfoOpen(!isInfoOpen)
                  }}>
                    <i className="fa fa-user"></i>
                    معلومات</Button>
                </li>
                <li>
                  <Button color='success' className={UserStyle.iconn}>
                    <NavLink to="/product" style={{ color: "white" }}>
                      <i className="fa fa-shop" style={{ color: "white" }}></i> تسوق الآن
                    </NavLink>
                  </Button>
                </li>
                <li>
                  <Button color="success" shadow onPress={handlerr} className={UserStyle.iconn}>
                    <i className="fa fa-edit"></i>
                    تعديل البيانات
                  </Button>
                </li>
                <li>
                  <Button className={UserStyle.iconn} color="success" onClick={() => {
                    setIsFavOpen(!isFavOpen)
                  }}>
                    <i class="fa-solid fa-heart"></i>
                    قائمة المفضلة </Button>
                </li>
                <li>
                  <Button className={UserStyle.iconn} color="success" onClick={() => {
                    setIsOrderOpen(!isOrderOpen)
                  }}>
                    <i class="fa-solid fa-shop"></i>
                    الطلبات</Button>
                </li>
              </ul>
            </div>

            <div className="col-md-9">
              <div style={{
                display: 'block', width: 900, padding: 30
              }}>
                <Collapse isOpen={isInfoOpen}>
                  <UserBio UserData={userr} />
                </Collapse>
              </div >
              <div style={{
                display: 'block', padding: 30
              }}>
                <Collapse isOpen={isFavOpen}>
                  <UserFav />
                </Collapse>
              </div >
              <div style={{
                display: 'block', padding: 30
              }}>
                <Collapse isOpen={isOrderOpen}>
                  <UserOrder UserData={userr} />
                </Collapse>
              </div >
            </div>
          </div>

        </div>
      </div>

      {/*===========================edit user information======================== */}
      <div>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={EditVisible}
          onClose={closeHandler}
          width="600px"
        >
          <Modal.Header className={UserStyle.bgmodal} style={{ backgroundColor: "#33642e", marginBottom: 20 }}>
            <Text id="modal-title" size={18} style={{ color: "#3c3939" }}>
              تعديل
            </Text>
          </Modal.Header>
          <Modal.Body>
            <form dir="rtl" lang="ar" onSubmit={formikedit.handleSubmit} >
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={userr.fname}
                    name='fname'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.fname && <small id="fname" style={{ color: "red" }}>  {formikedit.errors.fname} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={userr.lname}
                    name='lname'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.lname && <small id="lname" style={{ color: "red" }}>  {formikedit.errors.lname} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={userr.email}
                    name='email'
                    type='text'
                    onChange={formikedit.handleChange}

                  />
                  {formikedit.errors.email && <small id="email" style={{ color: "red" }}>  {formikedit.errors.email} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="كلمة المرور"
                    name='password'
                    type='text'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.password && <small id="password" style={{ color: "red" }}>  {formikedit.errors.password} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={userr.phone}
                    name='phone'
                    type='number'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.phone && <small id="phone" style={{ color: "red" }}>  {formikedit.errors.phone} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={userr.address}
                    name='address'
                    type='text'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.address && <small id="address" style={{ color: "red" }}>  {formikedit.errors.address} </small>}
                </div>
              </div>
              <div style={{ marginBottom: 15 }}>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="الصورة"
                  name='imageUrl'
                  type='file'
                  onChange={(e) => { formikedit.setFieldValue('img', e.currentTarget.files[0]) }}
                />
              </div>
              <div style={{ marginLeft: 200 }}>
                <button type="submit" className={`${'btn btn-block'} ${UserStyle.formbtn}`} auto onPress={closeHandler}>
                  تعديل
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default UserProfileSide;