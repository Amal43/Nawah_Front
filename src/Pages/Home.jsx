import React from "react";
import HeaderHome from "../Components/Home/HeaderHome";
import AboutHome from "../Components/Home/About-Home";
import TrendingHome from "../Components/Home/Trending-Home";
import ServiceHome from "../Components/Home/Service-Home";
import SubscriptHome from "../Components/Home/Subscript-Home";

function Home() {
  return (
    <>
      <HeaderHome />
      <AboutHome />
      <TrendingHome />
      <ServiceHome />
      <SubscriptHome />
    </>
  );
}

export default Home;
