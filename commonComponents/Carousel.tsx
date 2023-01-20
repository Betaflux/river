/* eslint-disable react/jsx-boolean-value */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./carousel.css";
// import required modules
import { Pagination, Mousewheel } from "swiper";
import Image from "next/image";

const products = [
  {
    image: "/images/product/product1.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
  {
    image: "/images/product/product2.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
  {
    image: "/images/product/product3.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
];

const Carousel = () => {
  return (
    <div className="">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
      >
        {products.map((product) => {
          return (
            <SwiperSlide>
              <div className="w-full h-fit">
                <Image
                  src={product.image}
                  fill
                  alt="riverProduct"
                  className="object-cover  h-[474px] relative"
                />
                {/* <div className="w-full">{product.description}</div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
