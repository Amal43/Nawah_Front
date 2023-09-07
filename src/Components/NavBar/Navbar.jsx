import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import navStyle from "./navbarStyle.module.css";
import logo from "../../assets/images/palm-leaf-products.jpg";
import { NavLink, useNavigate } from 'react-router-dom'
import { Dropdown, Text, User } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserOne, logoutUser } from '../../Redux/Slices/UserSlice';
import { getFarmerOne, logoutFarmer } from '../../Redux/Slices/FarmerSlice';
import { getOneEng, logoutEngineer } from '../../Redux/Slices/EngineerSlice';

function Nav() {

  // CONSTANTS
  let nav = useNavigate();
  const api = "http://localhost:3500/";
  const dispatch = useDispatch();

  // states of navbar
  const [prdpage, setprdpage] = useState(true);
  const [isload, setisload] = useState(false);
  const [userr, setuser] = useState([]);
  const [farmerr, setfarmer] = useState([]);
  const [engineerr, setengineer] = useState([]);

  // Useselector to get info
  let { user } = useSelector(state => state.UserSlice) // Get one user
  let { Farmers } = useSelector(state => state.FarmerSlice) // Get one farmer
  let { engineer } = useSelector(state => state.EngineerSlice) // Get one engineer


  // LOG OUT
  function logout() {
    localStorage.clear();
    nav('/home')
    setprdpage(true);
    setisload(false);
    dispatch(logoutUser());
    dispatch(logoutFarmer());
    dispatch(logoutEngineer());
  }


  useEffect(() => {

    // dispatch get info
    dispatch(getUserOne()).then((result) => {
      setuser(result.payload);
      setisload(true);
    })
    dispatch(getFarmerOne()).then((result) => {
      setfarmer(result.payload);
      setisload(true)
    })
    dispatch(getOneEng()).then((result) => {
      setengineer(result.payload);
      setisload(true)
    })
  }, [isload]);

  return (
    <nav className={`navbar navbar-expand-lg  ${navStyle.nav}`}>
      <div
        className={`container-fluid text-dark  rounded-3 ${navStyle.container}`}
      >
        <NavLink className="navbar-brand" to="/home">
            <img
              src={logo}
              alt="logo"
              className="img-fluid ms-2 "
              style={{ width: "50px", height: "100%" }}
            />
            <h3 className={`${navStyle.logo}`} >نـواة</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-sm-center mx-auto mb-2 mb-lg-0">
            <li className={`nav-item px-1 ${navStyle.list}`}>
              <NavLink className={`${"nav-link active"}`} aria-current="page" to="/home" activeClassName="is-active">  الصفحة الرئيسية  </NavLink>
            </li>
            {prdpage && !engineerr && <li className={`nav-item px-1 ${navStyle.list}`}>
              <NavLink className={`${"nav-link "}`} aria-current="page" to="/product">    منتجاتنا  </NavLink>
            </li>}
            <li className={`nav-item px-1 ${navStyle.list}`}>
              <NavLink className={`${"nav-link "}`} aria-current="page" to="/about">      من نحن </NavLink>
            </li>
            <li className={`nav-item px-1 ${navStyle.list}`}>
              <NavLink className={`${"nav-link "}`} aria-current="page" to="/contact">    تواصل معنا </NavLink>
            </li>
          </ul>


          {!userr && !farmerr && !engineerr &&(<NavLink className={`${"btn btn-secondary"} ${navStyle.navbtn}`} to="/welcome">
            أنشئ حساب
          </NavLink>) }

          {userr && isload && <Dropdown placement="bottom-left">
            <Dropdown.Trigger> 
              <User
                bordered
                as="button"
                size="lg"
                color="success"
                name={`${user?.fname}  ${user?.lname}`}
                description={user?.email}
                src={`${api}${user?.img}`}              
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color="success" aria-label="User Actions">
              <Dropdown.Item key="role" >
                <Text b color="inherit" css={{ d: "flex" }}>
                  مسجل كمستخدم
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="profile" withDivider>
                <NavLink className={`${"nav-link "}`} aria-current="page" to="/userprofile">المستخدم</NavLink>
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                <button onClick={logout} className={navStyle.logout_btn}>
                  تسجيل الخروج
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}

          {farmerr && isload && <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <User
                bordered
                as="button"
                size="lg"
                color="success"
                name={`${Farmers?.fname} ${Farmers?.lname}`} 
                description={Farmers?.email}
                src={`${api}${Farmers?.img}`}           
                />
            </Dropdown.Trigger>
            <Dropdown.Menu color="success" aria-label="User Actions">
              <Dropdown.Item key="role" >
                <Text b color="inherit" css={{ d: "flex" }}>
                  مسجل كمزارع
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="profile" withDivider>
                <NavLink className={`${"nav-link "}`} aria-current="page" to="/farmerprofile">الـصـفحه الـشخـصيه </NavLink>
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                <button onClick={logout} className={navStyle.logout_btn}>
                  تسجيل الخروج
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}

          {engineerr && isload && <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <User
                bordered
                as="button"
                size="lg"
                color="success"
                name={`${engineerr?.fname} ${engineerr?.lname}`}
                description={engineerr?.email}
                src={`${api}${engineerr?.img}`}          
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color="success" aria-label="User Actions">
              <Dropdown.Item key="role" >
                <Text b color="inherit" css={{ d: "flex" }}>
                  مسجل كمهندس
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="profile" withDivider>
                <NavLink className={`${"nav-link "}`} aria-current="page" to="/engineerprofile">الـصـفحه الـشخـصيه</NavLink>
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                <button onClick={logout} className={navStyle.logout_btn}>
                  تسجيل الخروج
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}

        </div> 
      </div>
    </nav>
  );
}

export default Nav;
