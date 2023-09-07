import React from "react";
import HeaderHome from "../Components/Home/HeaderHome";
import AboutHome from "../Components/Home/About-Home";
import TrendingHome from "../Components/Home/Trending-Home";
import ServiceHome from "../Components/Home/Service-Home";
import SubscriptHome from "../Components/Home/Subscript-Home";
import Nav from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import SliderHome from "../Components/Home/SliderHome";

function Home() {
  return (
    <>
      <Nav />
      <HeaderHome />
      <AboutHome />
      <TrendingHome />
      <ServiceHome />
      <SliderHome />
      <SubscriptHome />
      <Footer/>
    </>
  );
}

export default Home;
