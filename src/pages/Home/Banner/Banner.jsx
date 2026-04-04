import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center p-10 ">
      <div className="flex-2">
        <p className="text-6xl font-bold max-w-168 leading-20">
          We Make Sure Your
          <span className="text-primary"> Parcel Arrives</span> On Time - No
          Fuss.
        </p>
      </div>
      <div className="flex-1">
        <div>
          <img className="object-cover w-100 h-100" src={banner1} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
