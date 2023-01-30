import Image from "next/image";
import React from "react";

const products = [
  {
    image: "/images/product/productone.png",
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

const RiverProducts = () => {
  return (
    <section className="px-5 lg:px-10 mb-[88px] hidden md:flex flex-col">
      <div className="hidden  md:grid grid-cols-3 gap-[20px]">
        {products.map((ele) => {
          return (
            <div className="w-full mb-5" key={ele.description}>
              <div className="w-full">
                <Image
                  src={ele.image}
                  quality={100}
                  fill
                  alt="riverProduct"
                  className="relative w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-3">
        <div className="col-start-2 col-end-4 text-blue-37 font-sohneBuch text-12xl leading-13">
          Caption of the image explaining how different people find livelihoods
          via River.
        </div>
      </div>
    </section>
  );
};

export default RiverProducts;
