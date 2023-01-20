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
    <div className="w-full">
      {/* image */}
      <div className="w-full h-[187px] bg-blue-37">
        <Image src={url} fill alt="" className="relative w-full h-full" />
      </div>
      {/* contents */}
      <div className="w-full mt-[13px]">
        <div
          className={`w-full ${color} font-sohneHalbfett text-10xl leading-11 lg:text-12xl lg:leading-12`}
        >
          {title}
        </div>
        <div
          className={`w-full ${color} font-sohneBuch text-10xl leading-11 lg:text-12xl lg:leading-12`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export default ClaimCard;