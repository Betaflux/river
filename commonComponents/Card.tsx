import Image from 'next/image';
import React from 'react'
 
interface ICard{
  title:string;
  paragraph:string;
  image:string;
}
const Card = ({title,paragraph,image}:ICard) => {
  return (
    <div className="w-full bg-92 p-5 lg:p-10">
      <div className="w-full">
        <Image
          src={image}
          fill
          alt="cardImage"
          className="relative w-full h-full"
        />
      </div>
      <div className="w-full">
        <div className="text-blue-37 font-sohneBuch text-10xl leading-11 lg:leading-12 lg:text-12xl">
          {title}
        </div>
        <div className="text-blue-37 font-sohneHalbfett leading-11 text-10xl lg:text-12xl">
          {paragraph}
        </div>
      </div>
    </div>
  );
}

export default Card