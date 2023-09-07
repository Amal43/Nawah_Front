import React from "react";
import Headercart from "../Components/Cart/Headercart";
import Tablecart from "../Components/Cart/Tablecart";
import Nav from "../Components/NavBar/Navbar";
import Footer from '../Components/Footer/Footer';


function Cart() {
  return (
    <>
      <Nav/>
      <Headercart />
      <Tablecart />
      <Footer/>
      <div className='row'>
      </div>
    </>
  );
}

export default Cart;
