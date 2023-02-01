import React from "react";
import Image from "next/image";

interface ICommonImage {
  alt: string;
  smallImage: string;
  largeImage: string;
}
const CommonImage = ({ alt, smallImage, largeImage }: ICommonImage) => {
  return (
    <section className="w-full">
      <div className="md:hidden">
        <Image
          src={smallImage}
          fill
          alt={alt}
          quality={100}
          className="relative w-full h-full "
        />
      </div>
      <div className="hidden md:flex">
        <Image
          src={largeImage}
          fill
          alt="bike"
          quality={100}
          className="relative w-full h-full"
        />
      </div>
    </section>
  );
};

export default CommonImage;
