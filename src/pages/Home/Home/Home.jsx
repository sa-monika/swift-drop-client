import React from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/Works";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
    </div>
  );
};

export default Home;
