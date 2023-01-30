import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";

const products = [
  {
    image: "/images/product/product1.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
  {
    image: "/images/product/producttwo.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
  {
    image: "/images/product/productthree.png",
    description:
      "Caption of the image explaining how different people find livelihoods via River.",
  },
];
const Carousel = () => {
  return (
    <div className=" w-full md:hidden">
      <Swiper
        direction="vertical"
        // eslint-disable-next-line react/jsx-boolean-value
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper h-[600px]"
      >
        {products.map((ele, ind) => {
          return (
            <SwiperSlide>
              <Image
                src={ele.image}
                alt=""
                quality={100}
                width={320}
                height={476}
                className="w-full h-full"
              />
              <div className="flex flex-col items-center p-[22px] bg-blue-19 font-sohneBuch text-10xl leading-11 absolute bottom-[20px] ml-[20px] gap-2 text-blue-61">
                <div>
                  <Image
                    src="/images/product/uparrow.svg"
                    alt=""
                    quality={100}
                    width={25}
                    height={0}
                  />
                </div>
                <div className="flex gap-1">
                  <div>{ind + 1}</div>
                  <div>/</div>
                  <div>3</div>
                </div>
                <div>
                  <Image
                    src="/images/product/downarrow.svg"
                    quality={100}
                    alt=""
                    width={25}
                    height={0}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
