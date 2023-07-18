"use client";

import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Banner.module.sass";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Banner(params) {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img src="https://picsum.photos/1920/700?random=1" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/1920/700?random=2" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/1920/700?random=3" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
