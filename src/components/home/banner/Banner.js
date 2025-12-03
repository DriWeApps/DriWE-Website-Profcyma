import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Banner.css";
import axios from "axios";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Banner() {
  const bannerdata = [
    { image: '/assets/images/home/home-banner/banner.png' },
    { image: '/assets/images/home/home-banner/banner.png' },
    { image: '/assets/images/home/home-banner/banner.png' },
  ];

  return (
    <section className="home_banner_sec">
      <div className="container-fluid p-0">
        <div className="slide_section">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {bannerdata.map((data, index) => (
              <SwiperSlide>
                <div className="slide_item">
                  <img className='bannerimg' src={process.env.PUBLIC_URL + data.image} alt="Banner 1" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Banner;
