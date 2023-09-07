import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Store } from "./Redux/Store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Descript from "./Components/Description/Descript";
import Contact from "./Pages/Contact";
import Description from "./Pages/Description";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import WelcomeLoing from "./Pages/WelcomeLoing";
import UserSignUp from "./Pages/UserSingUp";
import UserLogiN from "./Pages/UserLogiN";
import FarmerLogiN from "./Pages/FarmerLogiN";
import FarmerSingUp from "./Pages/FarmerSingUp";
import CheckOut from "./Pages/CheckOut";
import Welcome from "./Components/Welcome/Welcome";
import UserPage from "./Pages/UserPage";
import FarmarPage from "./Pages/FarmarPage";
import EngineerPage from './Pages/EngineerPage'
import EngineerLogIn from "./Pages/EngineerLogIn";

function App() {
  return (
    <Provider store={Store}>
      <div className="xx">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="welcome" element={<Welcome/>}/>
            <Route path="userlogin" element={<UserLogiN/>}/>
            <Route path="usersignup" element={<UserSignUp/>}/>
            <Route path="farmerlogin" element={<FarmerLogiN/>}/>
            <Route path="farmersignup" element={<FarmerSingUp/>}/>
            <Route path="engineerlogin" element={<EngineerLogIn/>}/>
            <Route path="userprofile" element={<UserPage/>}/>
            <Route path="farmerprofile" element={<FarmarPage/>}/>
            <Route path='home' element={<Home />} />
            <Route path='description' element={<Descript/>} />
            <Route path='product' element={<Products />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='cart' element={<Cart />} />
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="engineerprofile" element={<EngineerPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
