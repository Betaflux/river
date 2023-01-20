import Image from 'next/image';
import React from 'react'

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

const RiverProducts = () => {
  return (
    <section className="hidden px-10 lg:flex flex-row gap-[20px] mb-[88px]">
      {products.map((ele)=>{
        return (
          <div className="w-1/3 mb-5" key={ele.description}>
            <div className="w-full">
              <Image
                src={ele.image}
                fill
                alt="riverProduct"
                className="relative w-full h-full"
              />
            </div>
            <div className="w-full font-sohneBuch text-12xl leading-12 text-blue-37">
              {ele.description}
            </div>
          </div>
        );
      })}
    </section>
  )
}

export default RiverProducts;