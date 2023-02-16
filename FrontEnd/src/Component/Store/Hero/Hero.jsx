import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper";

import "./Style.css";

import slide1 from "../../../Asset/img/hero/slide-01.jpg";
import slide2 from "../../../Asset/img/hero/slide-02.jpg";
import slide3 from "../../../Asset/img/hero/slide-03.jpg";

function Hero() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="w-full relative">
          <img className="w-full" src={slide1} alt="" />
          <div className="container absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
            <h6 className="text-2xl font-semibold">Summer 2023</h6>
            <h3 className="text-6xl font-extrabold my-5">
              New Arrival Collection
            </h3>
            <a
              href="#"
              className="w-40 h-12 flex justify-center items-center bg-black text-white"
            >
              <span>Explore Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img className="w-full" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img className="w-full" src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
