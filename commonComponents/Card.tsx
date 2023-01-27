import Image from "next/image";
import React from "react";

export interface ICard {
  title: string;
  paragraph: string;
  image: string;
}
const Card = ({ title, paragraph, image }: ICard) => {
  return (
    <article className="w-ful">
      <div className="w-full">
        <Image
          src={image}
          fill
          alt="cardImage"
          quality={100}
          className="relative w-full h-full"
        />
      </div>
      <div className="w-full py-[14px] pl-[20px] pr-[32px] lg:py-[38px] lg:pl-[40px] lg:pr-[64px] bg-blue-92">
        <div className="text-blue-37  font-sohneHalbfett  text-10xl leading-11 lg:leading-12 lg:text-12xl">
          {title}
        </div>
        <p className="text-blue-37 font-sohneBuch leading-11 text-10xl lg:text-12xl lg:leading-12">
          {paragraph}
        </p>
      </div>
    </article>
  );
};

export default Card;
