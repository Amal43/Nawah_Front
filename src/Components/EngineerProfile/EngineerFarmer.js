import React, { useEffect, useState } from 'react'
import styles from './Engineer.module.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { Button, Modal, Table, Input, Image, User, Card, Col, Row, Textarea, Text, Checkbox } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddNotes, getAllF } from '../../Redux/Slices/EngineerSlice';
import { getallfertilizer } from '../../Redux/Slices/ProductSlice';
import ScrollToBottom from 'react-scroll-to-bottom';

import io from 'socket.io-client'
import axios from 'axios';
const socket = io.connect("http://localhost:3500")

function EngineerFarmer() {




    //     const [far , setFar] = useState([]);
    //     const [far2 , setFar2] = useState([]);
    //     useEffect(() => {
    //         dispatch(getAllF())
    //           .then((res) => {
    //                 setFar(res.payload)
    //                 far.forEach(element => {
    //                   console.log(element._id)
    //                   setFar2(element._id)
    //               });

    //           })

    //       }, []);


    // console.log(far2)











    const [idfarmer, setidfarmer] = useState([]);
    const [user, setUser] = useState("");
    const [room, setRoom] = useState(null)
    const [currentMessage, setCurrentMessage] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [messageList, setMessageList] = useState([])
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [showwChat, setShowwChat] = useState(false);
    const [ChatOpen, setChatOpen] = useState(false);
    const { EngineerFarmer } = useSelector((state) => state.EngineerSlice)
    console.log(EngineerFarmer, "xzcxzczxcz")

    function clearchat() {
        setShowwChat(false)
        setMessageList([])
        // alert("ASdsad")
      }

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: idfarmer,
                author: user,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes()
            };
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData])
            // axios.post(`http://localhost:3500/Farmer/message/${EngineerFarmer._id}`, {
            //     messageData
            // })
            setCurrentMessage("")
        }
    }
    console.log(messageList)
    const joinRoom = () => {

        setShowChat(true)

    }

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            console.log(data)
            console.log("sswww")
            setMessageList((list) => [...list, data])
        });
    }, [socket]);

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };

    const [visiblee, setVisiblee] = React.useState(false);
    const handlerr = () => setVisiblee(true);
    const closeHandlerr = () => {
        setVisiblee(false);
        // console.log("closed");
    };
    const api = "http://localhost:3500/"




    const [prod, setprod] = useState([]);
    const [oneprd, setOneprd] = useState([]);
    const [note, setnote] = useState([]);
    // setEng(EngineerFarmer)
    // console.log(Eng);



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallfertilizer()).then((result) => {
            setprod(result.payload);
        })
    }, [])

    const [disabled, setDisabled] = useState(false);

    function dis() {
        setDisabled(prev => !prev);
    }
    console.log(idfarmer)
    return (

        <div className='d-flex justify-content-around gap-3'>
            {
                EngineerFarmer.farmers?.map((item, index) => {
                    return <div className={styles.card}>
                        <div className={styles.ds_top} />
                        <div className={styles.avatar_holder}>
                            <img src={`${api}${item?.img}`} />
                        </div>
                        <div className={styles.name}>
                            <h3>{item?.fname} {item?.lname}</h3>
                            {/* <h6 title="Followers"><i className="fas fa-users" /> <span className="followers">90</span></h6> */}
                        </div>
                        <div className={styles.ds_info}>

                            <div className={styles.projects}>
                                <h6 title="Number of projects created by the user">نـوع المحصول
                                    <br></br>
                                    <i class="fa-solid fa-seedling"></i>
                                </h6>
                                <p>{item.croptype}</p>
                            </div>
                            <div className={styles.posts}>
                                <h6 title="Number of posts">كمية المحصول
                                    <br></br>
                                    <i class="fa-solid fa-seedling"></i>
                                </h6>
                                <p>{item.cropamount}</p>
                            </div>
                        </div>
                        <div className={styles.ds_info}>
                            <>
                                <Button onClick={() => {
                                    setShowwChat(true)
                                    setidfarmer(item._id)
                                    //    Socket --> Fire Conversation 
                                    setidfarmer(item._id)
                                    socket.emit("join_room", item._id)



                                    setUser(item.name)
                                }} color="#81ba00" className={styles.butt} auto>ابدأ المحادثة
                                    <i class="fa-brands fa-facebook-messenger"></i>
                                </Button>
                                <Modal open={showwChat} onClose={() => clearchat()}>
                                    <Modal.Header>Live Chat</Modal.Header>
                                    <Modal.Body>
                                        <div className={styles.chatWindow}>
                                            <div className={styles.chatHeader}>
                                                <p> <img src={`${api}${item?.img}`} alt="farmer Image" className={styles.imgHeader} />{item?.fname} <button className={styles.closeButton} onClick={() => setShowwChat(false)}>X</button></p>
                                            </div>
                                            <div className={styles.chatBody}>
                                                <ScrollToBottom className={styles.messageContainer}>
                                                    {messageList.map((messageContent) => {
                                                        return (
                                                            <div
                                                                className={styles.message}
                                                                id={`${user === messageContent.author ? styles.you : styles.other}`}
                                                            >
                                                                <div>
                                                                    <div className={styles.photo}>
                                                                        <div className={styles.messageContent}>
                                                                            <p>{messageContent.message}</p>
                                                                        </div>
                                                                        {user !== messageContent.author && (
                                                                            <div >
                                                                                <img src={`${api}${item?.img}`} alt="farmer Image" className={styles.imgContent} />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className={styles.messageMeta}>
                                                                        <p id='time'>{messageContent.time}</p>
                                                                        <p id={styles.author}>{messageContent.author}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </ScrollToBottom>
                                            </div>
                                            <div className={styles.chatFooter}>
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
                            <Button color="#81ba00" className={styles.butt} auto flat onPress={() => {
                                setVisible(true)
                                setidfarmer(item._id)
                            }}
                            >
                                اسـتشاره زراعـيه
                                <i class="fa-solid fa-clipboard"></i>
                            </Button>
                        </div>
                    </div>
                })
            }



            {/*  */}
            <Modal width='1200px' open={visible} onClose={closeHandler}>
                <Modal.Header
                    css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                </Modal.Header>
                <Modal.Body>

                    <div className={styles.modal_body}>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Table
                                bordered
                                shadow={false}
                                color="secondary"
                                aria-label="Example pagination  table"
                                css={{
                                    height: "auto",
                                    minWidth: "100%",
                                }}
                            // selectionMode="multiple"
                            >
                                <Table.Header>
                                    <Table.Column>صورة المنتج</Table.Column>
                                    <Table.Column>نـوع المنتج</Table.Column>
                                    <Table.Column>الـوصـف</Table.Column>
                                    <Table.Column>  سـعـر الـمـنـتـج</Table.Column>
                                    <Table.Column>اضافة الي المزارع</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {
                                        prod.map((item, index) => {
                                            console.log(item);
                                            return <Table.Row key={item?._id}>
                                                <Table.Cell
                                                    // width={50}
                                                    // height={50}
                                                    noMargin
                                                >
                                                    <User
                                                        src={`${api}${item?.imageUrl}`}
                                                        name={item?.name}
                                                        size="xl"
                                                    />
                                                </Table.Cell>
                                                <Table.Cell>{item.category}</Table.Cell>
                                                <Table.Cell>{item.description}</Table.Cell>
                                                <Table.Cell>{item.price}</Table.Cell>
                                                <Table.Cell>
                                                    <Button
                                                        onPress={() => {
                                                            handlerr()
                                                            setOneprd(item)
                                                        }}

                                                        light color="primary" auto>
                                                        <i className="fa fa-add"></i>
                                                    </Button>

                                                </Table.Cell>
                                            </Table.Row>

                                        })
                                    }
                                </Table.Body>
                                <Table.Pagination
                                    shadow
                                    noMargin
                                    align="center"
                                    rowsPerPage={3}
                                    onPageChange={(page) => console.log({ page })}
                                />
                            </Table>
                        </div>
                        <Modal
                            closeButton
                            aria-labelledby="modal-title"
                            open={visiblee}
                            onClose={closeHandlerr}

                        >
                            <Modal.Header>
                            </Modal.Header>
                            <Modal.Body>
                                <Card css={{ w: "100%", h: "400px" }}>
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                        <Col>
                                            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                                {oneprd.category}
                                            </Text>
                                            <Text h3 color="black">
                                                {oneprd.name}
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            // src=
                                            src={`${api}${oneprd.imageUrl}`}
                                            width="100%"
                                            height="100%"
                                            objectFit="cover"
                                            alt="Card example background"
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
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <Text color="#000" size={12}>
                                                    {oneprd.price}
                                                </Text>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                                <Textarea
                                    placeholder="الأرشادات"
                                    minRows={2}
                                    css={{ margin: "15px" }}
                                    onChange={e => { setnote(e.currentTarget.value); }}
                                />
                            </Modal.Body>
                            <Modal.Footer>

                                <Button auto onPress={() => {
                                    closeHandlerr()
                                    dispatch(AddNotes({ note, idfarmer, oneprd }))
                                }
                                }
                                style={{background:"white" , border: "1px solid #81ba00" , color: "#81ba00" ,margin:"auto"}}
                                >
                                    ارسـال
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Modal.Body>

            </Modal>
            {/*  */}


















        </div >
    )
}

export default EngineerFarmer