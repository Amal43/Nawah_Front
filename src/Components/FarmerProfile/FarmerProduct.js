import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getfarmerproducts, deletePrdByFarmer, showproduct,editPrdByFarmer } from '../../Redux/Slices/ProductSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";
import { Modal, Input } from "@nextui-org/react";
import FarmerStyle from "./FarmerStyle.module.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function FarmerProduct({FarmerPrds}) {

  const [isDelete, SetIsDelete] = useState(false);
  const api = "http://localhost:3500/";
  const dispatch = useDispatch();
  const { farmproduct } = useSelector((state) => state.ProductSlice)
  let id = farmproduct[0]?._id
  console.log(id)
  const farmer = useSelector(state => state.FarmerSlice)
  const [Farmerprds, setFarmerprds] = useState([]);
  
  useEffect(() => {
    setFarmerprds(FarmerPrds)
    dispatch(getfarmerproducts()).then((result) => {
      setFarmerprds(result.payload);
    })
  }, [])
  // ==================modal for editprd====================================//
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  // ========================edit prd=============================//
  //==============================================================//
  const [donesend, SetDonesend] = useState(null);
  let nav = useNavigate();

  const one = /^\d+$/;
  let Schema = Yup.object().shape({
    name: Yup.string().required("يجب ادخال هذا الحقل"),
    quantity: Yup.string().required("يجب ادخال هذا الحقل").matches(one, { message: "يجب أن يكون رقم" }),
    status: Yup.string().required("يجب ادخال هذا الحقل"),
    price: Yup.number().required("يجب ادخال هذا الحقل"),
    description: Yup.string().required("يجب ادخال هذا الحقل"),
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      status: "",
      price: "",
      description: "",
      imageUrl: null,
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        const response = await axios.put(`http://localhost:3500/Product/updateee/${id}`,{
          name:values.name,
          quantity:values.quantity,
          status:values.status,
          price:values.price,
          description:values.description,
          imageUrl: values.imageUrl.name,
        },{
          headers: {
            'Content-Type': 'multipart/form-data'
          }        });
        console.log(response.data);
        SetDonesend(response.data.data);
        
      
      } catch (error) {
        console.error(error);
      }
    }
    
  });
  useEffect(() => {
    if (donesend) {
      setVisible(false);
      dispatch(getfarmerproducts()).then((result) => {
        setFarmerprds(result.payload);
      })
    }
  }, [donesend]);
  useEffect(() => {
    if (isDelete) {
      dispatch(getfarmerproducts()).then((result) => {
        setFarmerprds(result.payload);
      })
      SetIsDelete(false);
    }
  }, [isDelete]);
  

  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {Farmerprds && Farmerprds?.map((item, index) => (
          
          <div className={FarmerStyle.nft}>
            <div className={FarmerStyle.main}>
              <img
                className={FarmerStyle.tokenImage}
                src={`${api}${item.imageUrl}`}
                alt="NFT"
              />
              <h2 style={{color:"rgb(95, 91, 91)" , marginTop:"15px"}}>{item.name}</h2>
              <div className={FarmerStyle.tokenInfo}>
                <div className={FarmerStyle.price}>
                  <p> السعر : {item.price} EGP</p>
                </div>
                <div className={FarmerStyle.duration}>
                  <p>الكميه : {item.quantity}</p>
                </div>
              </div>
              <hr />
              <div style={{ display:"flex" ,  justifyContent: "space-evenly" }}>
                <Button flat auto rounded color="rgb(95, 91, 91)" onClick={() => { dispatch(deletePrdByFarmer(item._id) ,SetIsDelete(true))} }>
                  <Text
                    css={{ color: "rgb(95, 91, 91)" }}
                    size={16}
                    weight="bold"
                    transform="uppercase"
                  >
                    <i className="fa fa-edit"></i>
                    حذف
                  </Text>
                </Button>

                <Button flat auto rounded color="rgb(95, 91, 91)" style={{ marginLeft: 10 }} onClick={() => { dispatch(showproduct(item)); handler() }} >
                  <Text
                    css={{ color: "rgb(95, 91, 91)" }}
                    size={16}
                    weight="bold"
                    transform="uppercase"

                  >
                    <i className="fa fa-edit"></i>
                    تعديل
                  </Text>
                </Button>
              </div>
            </div>
          </div>

        ))}
      </Grid.Container>

      {/*===========================edit product======================== */}
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header className={FarmerStyle.bgmodal} style={{ backgroundColor: "#33642e", marginBottom: 20 }}>
          <Text id="modal-title" size={18} style={{ color: "#3c3939" }}>
            تعديل المنتج
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form dir="rtl" lang="ar" onSubmit={formik.handleSubmit} >
            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={farmproduct[0]?.name}
                name='name'
                onChange={formik.handleChange}
              />
              {formik.errors.name && <small id="name" style={{ color: "red" }}>  {formik.errors.name} </small>}
            </div>


            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={farmproduct[0]?.quantity}
                name='quantity'
                type='text'
                onChange={formik.handleChange}

              />
              {formik.errors.productNum && <small id="productNum" style={{ color: "red" }}>  {formik.errors.productNum} </small>}
            </div>

            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={farmproduct[0]?.status}
                name='status'
                type='text'
                onChange={formik.handleChange}
              />
              {formik.errors.productStatus && <small id="productStatus" style={{ color: "red" }}>  {formik.errors.productStatus} </small>}
            </div>

            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={farmproduct[0]?.price}
                name='price'
                type='number'
                onChange={formik.handleChange}
              />
              {formik.errors.price && <small id="price" style={{ color: "red" }}>  {formik.errors.price} </small>}
            </div>

            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={farmproduct[0]?.description}
                name='description'
                type='text'
                onChange={formik.handleChange}
              />
              {formik.errors.type && <small id="type" style={{ color: "red" }}>  {formik.errors.type} </small>}
            </div>
            <div style={{ marginBottom: 15 }}>
              <Input
                // clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="صورة المنتج"
                name='imageUrl'
                id='imageUrl'
                type='file'
                onChange={(e) => { formik.setFieldValue('imageUrl', e.currentTarget.files[0]) }}

              />
            </div>
            <div style={{ marginLeft: 100 }}>
              <button type="submit" className={`${'btn btn-block'} ${FarmerStyle.formbtn} `} auto onPress={closeHandler}>
                تعديل المنتج
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

    </>
  );
}
