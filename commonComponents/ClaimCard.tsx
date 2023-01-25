import React from 'react'
import Image from "next/image";
import { TextColor } from '../utils/commonFunctions/commonTypes/commonTypes';

export interface IClaimCard{
  url:string,
  title?:string,
  description?:string,
  color?:TextColor
}
const ClaimCard = ({url,title,description,color=TextColor['blue-37']}:IClaimCard) => {
  return (
    <article className="w-full">
      {/* image */}
      <div className="w-full">
        <Image src={url} fill alt={title||""} className="relative w-full h-full" />
      </div>
      {/* contents */}
      <div className="w-full mt-[13px] lg:mt-[29px]">
        <div
          className={`w-full ${color} font-sohneHalbfett text-10xl leading-11 lg:text-12xl lg:leading-12`}
        >
          {title}
        </div>
        <p
          className={`w-full ${color} font-sohneBuch text-10xl leading-11 lg:text-12xl lg:leading-12`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default ClaimCard;