import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import amazon from "../../../assets/brands/amazon.png";
import amazon2 from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const Brands = () => {
  const brands = [casio, moonstar, randstad, amazon2, star, startPeople];
  return (
    <div className="max-w-11/12 mx-auto mb-20 ">
      <h1 className="text-secondary text-center text-4xl font-bold mb-15">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {brands.map((b) => (
          <SwiperSlide>
            <img src={b} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
