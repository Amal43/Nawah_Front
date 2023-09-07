import React, { useEffect, useState } from 'react'
import FarmerStyle from "./FarmerStyle.module.css";
import { Link, NavLink, useNavigate, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getFarmerOne } from '../../Redux/Slices/FarmerSlice';
import { Route, Routes } from 'react-router-dom';
import FarmarBio from '../FarmerProfile/FarmarBio';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Collapse } from "reactstrap"
import FarmHeader from '../FarmerProfile/FarmHeader';
import FarmerProduct from './FarmerProduct';
import FarmerFav from './FarmerFav';
import FarmerOrder from './FarmerOrder';
import Notifications from './Notifications';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client'
import { getfarmerproducts } from '../../Redux/Slices/ProductSlice';
const socket = io.connect("http://localhost:3500")


function FarmarProfileSide({ data }) {
  /*********************************modal for chat**********************/
  const [farmerr, setfarmerr] = useState({});
  const [farmerprd, setFarmerPrd] = useState([]);
  const { farmproduct } = useSelector((state) => state.ProductSlice)
  useEffect(() => {
    dispatch(getFarmerOne()).then((result) => {
      setfarmerr(result?.payload);
      setUser(farmerr?.fname)
      setRoom(farmerr?._id)
    })

    dispatch(getfarmerproducts()).then((result) => {
      setFarmerPrd(result.payload);
    })
  }, [])
  const [user, setUser] = useState(farmerr?.fname);
  const [room, setRoom] = useState(farmerr?._id);
  const [currentMessage, setCurrentMessage] = useState("")
  const [showChat, setShowChat] = useState(false)
  const [messageList, setMessageList] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [showwChat, setShowwChat] = useState(false);
  const [ChatOpen, setChatOpen] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenn, setIsOpenn] = React.useState(false);
  const [isOpennn, setIsOpennn] = React.useState(false);
  const sendMessage = async () => {
    console.log("djhsdjdsjidsji", socket)
    if (currentMessage !== "") {
      const messageData = {
        room: farmerr?._id,
        author: farmerr?.fname,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes()
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData])
      setCurrentMessage("")
    }
  }
  console.log(messageList)
  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", farmerr?._id)
      setShowChat(true)
    }
  }
  console.log("hh", farmerr)
  console.log(farmerr?._id)
  useEffect(() => {
    socket.on("recieve_message", (data) => {
      console.log(data)
      console.log("haaa")
      setMessageList((list) => [...list, data])
    });
  }, [socket]);
  // ==================modal for addprd====================================//
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  // ========================add prd=============================//
  //==============================================================//
  const [donesend, SetDonesend] = useState(null);
  let nav = useNavigate();

  const one = /^\d+$/;
  let Schema = Yup.object().shape({
    name: Yup.string().required("يجب ادخال هذا الحقل"),
    quantity: Yup.string().required("يجب ادخال هذا الحقل").matches(one, { message: "يجب أن يكون رقم" }),
    category: Yup.string().required("يجب ادخال هذا الحقل"),
    price: Yup.number().required("يجب ادخال هذا الحقل"),
    description: Yup.string().required("يجب ادخال هذا الحقل"),
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      category: "",
      price: "",
      description: "",
      imageUrl: null,

    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values)
      let addprd = new FormData();
      addprd.append("name", values.name);
      addprd.append("quantity", values.quantity);
      addprd.append("category", values.category);
      addprd.append("price", values.price);
      addprd.append("description", values.description);
      addprd.append("imageUrl", values.img);
      let token = localStorage.getItem('token')
      axios.post(`http://localhost:3500/Product/addproductfarmer/${token}`, addprd).then(res => {
        if (res && res.data) {
          console.log(res.data)
          SetDonesend(res.data.message)
        }
        else {
          SetDonesend("error")
        }
      })
    }
  })
  const dispatch = useDispatch();
  const farmer = useSelector(state => state.FarmerSlice) // Get Al Products Array Kolaha
  const [prd, setprd] = useState([]);
  // const [prdd, setprdd] = useState([]);
  useEffect(() => {
    dispatch(getFarmerOne()).then((result) => {
      setprd(result.payload);
    })
  }, [])
  // ==================modal for edit====================================//
  const [visiblee, setVisiblee] = React.useState(false);
  const handlerr = () => setVisiblee(true);
  const closeHandlerr = () => {
    setVisiblee(false);
    console.log("closed");
  };
  // ========================edit farmer information=============================//
  // ======================================================================//
  const [info, setInfo] = useState([]);
  useEffect(() => {
    dispatch(getFarmerOne()).then((result) => {
      setInfo(result.payload);
      // console.log(result.payload);
    })
  }, [])

  const [newData, setNewData] = useState('');
  let schema = Yup.object().shape({
    fname: Yup.string().required("يجب ادخال هذا الحقل"),
    lname: Yup.string().required("يجب ادخال هذا الحقل"),
    email: Yup.string().email("هذا الايميل غير صحيح").required("يجب ادخال هذا الحقل"),
    password: Yup.string().min(6, "أدخل ٦ أحرف على الأقل ").required('يجب ادخال هذا الحقل'),
    phone: Yup.string().min(11, "رقم الهاتف يجب أن يكون ١١ رقم فأكثر").required('يجب ادخال هذا الحقل'),
    address: Yup.string().required('يجب ادخال هذا الحقل'),
    farmarea: Yup.number().required("يجب ادخال هذا الحقل"),
    cropamount: Yup.string().required("يجب ادخال هذا الحقل"),
    croptype: Yup.string().required("يجب ادخال هذا الحقل"),

  })
  const formikedit = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      farmaddress: "",
      farmarea: "",
      cropamount: "",
      croptype: "",
      farmingExperience: "",
      img: null
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values)
      const token = localStorage.getItem('token');
      /////////// update /////////////
      try {

        const response = await axios.put(`http://localhost:3500/Farmer/editfarmer/${token}`, {
          fname: values.fname,
          lname: values.lname,
          email: values.email,
          password: values.password,
          phone: values.phone,
          address: values.address,
          farmaddress: values.farmaddress,
          farmarea: values.farmarea,
          cropamount: values.cropamount,
          croptype: values.croptype,
          farmingExperience: values.farmingExperience,
          img: values.img.name
        });
        console.log(response.data);
        setNewData(response.data.data)
      } catch (error) {
        console.error(error);
      }
      // end/////////////////////////////////////////////
    },
  })
  useEffect(() => {
    if (newData) {
      setVisiblee(false);
      nav('/farmerprofile')
      dispatch(getFarmerOne()).then((result) => {
        setprd(result.payload);
      })
    }
  }, [newData]);


  useEffect(() => {
    if (donesend) {
      setVisible(false);
      nav('/product')
      dispatch(getfarmerproducts()).then((result) => {
        setFarmerPrd(result.payload);
      })
    }
  }, [donesend]);
  return (
    <>
      <FarmHeader Data={prd} />
      <div className="container">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

        <div className="row">

          {/* Profile Side Started*/}
          <div className={`col-md-3 ${FarmerStyle.profileNav}`}>
            <div>
              <div className={`${FarmerStyle.profile_heading} rounded-1`}>
                <h2 className={`text-center`}>{`${prd?.fname} ${prd?.lname}`}</h2>
                <h4 className={`text-center`}>{prd?.email}</h4>
              </div>
            </div>

            <ul className={`${FarmerStyle.nav_list}`}>
              <li>
                <Button className={FarmerStyle.iconn} color="success" onClick={() => {
                  setIsOpen(!isOpen)
                }}>
                  <i className="fa fa-user"></i>
                  معلومات</Button>
              </li>

              <li>
                <Button color="success" shadow onPress={handlerr} className={FarmerStyle.iconn}>
                  <i className="fa fa-edit"></i>
                  تعديل البيانات
                </Button>

              </li>

              <li>

                <Button color="success" shadow onPress={handler} className={FarmerStyle.iconn}>
                  <i className="fa fa-add"></i>
                  اضافة منتج
                </Button>
              </li>

              <li>
                <Button className={FarmerStyle.iconn} color="success" onClick={() => {
                  setIsOpen(!isOpen)
                }}>
                  <i class="fa-solid fa-heart"></i>
                  قائمة المفضلة </Button>
              </li>
              <li>
                <Button className={FarmerStyle.iconn} color="success" onClick={() => {
                  setIsOpenn(!isOpenn)
                }}>
                  <i class="fa-solid fa-shop"></i>
                  الطلبات</Button>
              </li>
              <li>
                <Button className={FarmerStyle.iconn} color="success" onClick={() => {
                  setIsOpennn(!isOpennn)
                }}>
                  <i class="fa-solid fa-bell"></i>
                  الأشـعارات</Button>
              </li>
              <li>
                <>
                  <Button className={FarmerStyle.iconn} color="success" onClick={() => {
                    joinRoom()
                    setShowwChat(true)
                  }}>
                    <i class="fa-solid fa-message"></i>
                    المحادثة</Button>
                  <Modal open={showwChat} onClose={() => {
                    setShowwChat(false)
                  }
                  }>
                    <Modal.Header>Live Chat</Modal.Header>
                    <Modal.Body>
                      <div className={FarmerStyle.chatWindow}>
                        <div className={FarmerStyle.chatHeader}>
                          <p>Live Chat  <button className={FarmerStyle.closeButton} onClick={() => setShowwChat(false)}>X</button></p>
                        </div>
                        <div className={FarmerStyle.chatBody}>
                          <ScrollToBottom className={FarmerStyle.messageContainer}>
                            {messageList && messageList.map((messageContent) => {
                              // console.log(prd, "aaaaaaaaaaaaaaaa");
                              return (
                                <div className={FarmerStyle.message}
                                  id={`${user === messageContent.author ? FarmerStyle.you : FarmerStyle.other}`}>
                                  <div>
                                    <div className={FarmerStyle.messageContent}>
                                      <p className={FarmerStyle.msg} >{messageContent.message}</p>
                                    <img id={FarmerStyle.author} src={`http://localhost:3500/${prd.img}`} />
                                    </div>
                                    <div className={FarmerStyle.messageMeta}>
                                      <p id='time'>{messageContent.img}{messageContent.time}</p>
                                      {/* <p id={FarmerStyle.author}>{messageContent.author}</p> */}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </ScrollToBottom>
                        </div>
                        <div className={FarmerStyle.chatFooter}>
                          <input
                            type='text'
                            value={currentMessage}
                            placeholder='مرحبا...'
                            onChange={(event) => {
                              setCurrentMessage(event.target.value)
                            }}
                            onKeyPress={(event) => {
                              event.key === "Enter" && sendMessage()
                            }}
                          />
                          <button onClick={sendMessage}>&#9668;</button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              </li>
            </ul>
          </div>
          {/* Bio Graph Started */}
          <div className="col-md-9">
            <div style={{
              display: '', width: 900, padding: 30
            }}>
              <Collapse isOpen={!isOpen}>
                <FarmarBio FarmerData={prd} />
              </Collapse>
            </div >
            <div style={{
              display: 'block', padding: 30
            }}>
              <Collapse isOpen={isOpen}>
                <FarmerFav />
              </Collapse>
            </div >
            <div style={{
              display: 'block', padding: 30
            }}>
              <Collapse isOpen={isOpenn}>
                <FarmerOrder FarmerData={prd} />
              </Collapse>
            </div >
            <div style={{
              display: 'block', padding: 30
            }}>
              <Collapse isOpen={isOpennn}>
                <Notifications FarmerData={prd} />
              </Collapse>
            </div >
            <div>
              <h4>المنتجات المضافة :</h4>
              <hr style={{ color: "white", widht: "70%" }} />
              <FarmerProduct FarmerPrds={farmerprd} />
            </div>
          </div>
        </div>

      </div>


      <div>
        {/*===========================add product======================== */}
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header className={FarmerStyle.bgmodal} style={{ backgroundColor: "#33642e", marginBottom: 20 }}>
            <Text id="modal-title" size={18} style={{ color: "#3c3939" }}>
              اضافة منتج
            </Text>
          </Modal.Header>
          <Modal.Body>
            <form dir="rtl" lang="ar" onSubmit={formik.handleSubmit} >
              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="اسم المنتج"
                  name='name'
                  onChange={formik.handleChange}
                />
                {formik.errors.name && <small id="name" style={{ color: "red", fontSize: "10px" }}>  {formik.errors.name} </small>}
              </div>


              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="كمية المنتج"
                  name='quantity'
                  type='text'
                  onChange={formik.handleChange}

                />
                {formik.errors.productNum && <small id="productNum" style={{ color: "red", fontSize: "10px" }}>  {formik.errors.productNum} </small>}
              </div>

              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="نـوع المنتج"
                  name='category'
                  type='text'
                  onChange={formik.handleChange}
                />
                {formik.errors.productStatus && <small id="productStatus" style={{ color: "red", fontSize: "10px" }}>  {formik.errors.productStatus} </small>}
              </div>

              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="السعر"
                  name='price'
                  type='number'
                  onChange={formik.handleChange}
                />
                {formik.errors.price && <small id="price" style={{ color: "red", fontSize: "10px" }}>  {formik.errors.price} </small>}
              </div>

              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="الوصف"
                  name='description'
                  type='text'
                  onChange={formik.handleChange}
                />
                {formik.errors.type && <small id="type" style={{ color: "red", fontSize: "10px" }}>  {formik.errors.type} </small>}
              </div>

              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="صورة المنتج"
                  name='imageUrl'
                  type='file'
                  onChange={(e) => { formik.setFieldValue('img', e.currentTarget.files[0]) }}

                />
              </div>
              <div style={{ marginLeft: 100 }}>
                <button type="submit" className={`${'btn btn-block'} ${FarmerStyle.formbtn} `} auto onPress={closeHandler} >
                  أضف المنتج
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        {/*===========================edit farmer information======================== */}
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visiblee}
          onClose={closeHandlerr}
          width="600px"
        >
          <Modal.Header className={FarmerStyle.bgmodal} style={{ backgroundColor: "#33642e", marginBottom: 20 }}>
            <Text id="modal-title" size={18} style={{ color: "#3c3939" }}>
              تعديل
            </Text>
          </Modal.Header>
          <Modal.Body>
            <form dir="rtl" lang="ar" onSubmit={formikedit.handleSubmit} >
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.fname}
                    name='fname'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.fname && <small id="fname" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.fname} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.lname}
                    name='lname'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.lname && <small id="lname" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.lname} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.email}
                    name='email'
                    type='text'
                    onChange={formikedit.handleChange}

                  />
                  {formikedit.errors.email && <small id="email" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.email} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="كلمة المرور"
                    name='password'
                    type='password'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.password && <small id="password" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.password} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.phone}
                    name='phone'
                    type='number'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.phone && <small id="phone" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.phone} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.address}
                    name='address'
                    type='text'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.address && <small id="address" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.address} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.farmaddress}
                    name='farmaddress'
                    type='text'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.farmaddress && <small id="farmaddress" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.farmaddress} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.farmarea}
                    name='farmarea'
                    type='number'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.farmarea && <small id="farmarea" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.farmarea} </small>}
                </div>
              </div>
              <div className='row'>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.cropamount}
                    name='cropamount'
                    type='number'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.cropamount && <small id="cropamount" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.cropamount} </small>}
                </div>
                <div style={{ marginBottom: 15 }} className='col-6'>
                  <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder={info?.croptype}
                    name='croptype'
                    type='text'
                    onChange={formikedit.handleChange}
                  />
                  {formikedit.errors.croptype && <small id="croptype" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.croptype} </small>}
                </div>
              </div>
              <div style={{ marginBottom: 15 }}>
                <Input
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={info?.farmingExperience}
                  name='farmingExperience'
                  type='number'
                  onChange={formikedit.handleChange}
                />
                {formikedit.errors.farmingExperience && <small id="farmingExperience" style={{ color: "red", fontSize: "10px" }}>  {formikedit.errors.farmingExperience} </small>}
              </div>

              <div style={{ marginBottom: 15 }}>
                <Input
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
                <button type="submit" className={`${'btn btn-block'} ${FarmerStyle.formbtn}`} auto onPress={closeHandler}>
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
  )
}

export default FarmarProfileSide