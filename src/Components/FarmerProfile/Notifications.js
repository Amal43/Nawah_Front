import React from 'react';
import { Card, Col, Row, Text } from "@nextui-org/react";
import { Button } from 'reactstrap';
import { textAlign } from '@mui/system';
import { add } from '../../Redux/Slices/ProductSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Notifications({ FarmerData }) {
    const dispatch = useDispatch();

    const api = "http://localhost:3500/"

    const notify = (x) => toast(`🦄 تـم أضافه ${x} الي السـله بنجـاح`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    return (
        <>
            <h4>
                الأشـعارات من قـبل المهـندس
                <i class="fa-solid fa-bell fa-shake" style={{ color: " #81ba00", marginRight: "15px", marginBottom: "25px" }}></i>
            </h4>
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    FarmerData?.notes && FarmerData?.notes.map((item, index) => {
                        console.log(item, "sad");
                        return <Card css={{ w: "27%", h: "460px"  , marginBottom:"55px"}}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 0 }}>
                                <Col>
                                    <Text h3 color="black">
                                        {item.prd.name}
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    // src="https://nextui.org/images/card-example-6.jpeg"
                                    src={`${api}${item.prd.imageUrl}`}

                                    width="100%"
                                    height="70%"
                                    objectFit="contain"
                                    alt="Card example background"
                                    style={{ marginTop: 10 }}
                                />
                            </Card.Body>
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff66",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: "end"
                                }}
                            >
                                <Row>
                                    <Col>

                                        <Text h4 color="#000" css={{ textAlign: "start" }} >
                                            {item?.notes}
                                        </Text>
                                        <Text size={16} weight="bold" transform="uppercase" color="#40dd2f" style={{direction:"ltr"}} >
                                             {"الـنوع : سـمـاد"}
                                        </Text>
                                        <Row justify='space-between'>
                                           
                                            <Text color="#000" size={16}>
                                                {"السعر: "}${item.prd.price}
                                            </Text>
                                            <Button style={{ backgroundColor: "white", border: "1px solid #40dd2f" }}
                                                onClick={() => {
                                                    dispatch(add({...item.prd, qq: 1, tot: item.prd.price, totalprice: 0 }),
                                                    notify(item.prd.name)
                                                    );
                                                }}
                                            >
                                                <i className="fa-solid fa-cart-shopping" style={{ color: "#40dd2f" }}></i>

                                            </Button>
                                        </Row>
                                    </Col>

                                </Row>

                            </Card.Footer>
                        </Card>
                        // return <Card css={{ w: "70%", h: "400px", marginRight:"15px"}}>
                        //     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        //         <Col>
                        //             <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        //                 {item.prd.category}
                        //             </Text>
                        //             <Text h3 color="black">
                        //                 {item.prd.name}
                        //             </Text>
                        //         </Col>
                        //     </Card.Header>
                        //     <Card.Body css={{ p: 0 }}>
                        //         <Card.Image
                        //             // src="https://nextui.org/images/card-example-6.jpeg"
                        //             src={`${api}${item.prd.imageUrl}`}
                        //             width="100%"
                        //             height="100%"
                        //             objectFit="cover"
                        //             alt="Card example background"
                        //         />
                        //     </Card.Body>
                        //     <Card.Footer
                        //         isBlurred
                        //         css={{
                        //             position: "absolute",
                        //             bgBlur: "#ffffff66",
                        //             borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        //             bottom: 0,
                        //             zIndex: 1,
                        //         }}
                        //     >
                        //         <Row>
                        //             <Col>
                        //                 <Text h4 color="#000">
                        //                     {item.notes}
                        //                 </Text>
                        //             </Col>
                        //         </Row>
                        //     </Card.Footer>
                        // </Card>
                    })
                }
            </div>
<ToastContainer/>

        </>
    )
}

export default Notifications;