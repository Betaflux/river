import React from 'react'
import Image from "next/image";

interface ICommonImage{
  alt:string,
  smallImage:string,
  largeImage:string
}
const CommonImage = ({alt,smallImage,largeImage}:ICommonImage) => {
  return (
    <section className="w-full">
          <div className="lg:hidden">
            <Image
              src={smallImage}
              fill
              alt={alt}
              className="relative w-full h-full"
            />
          </div>
          <div className="hidden lg:flex">
            <Image
              src={largeImage}
              fill
              alt="bike"
              className="relative w-full h-full"
            />
          </div>
        </section>
  )
}

export default CommonImage;