import React from "react";
import Image from "next/image";
import { TextColor } from "../utils/commonFunctions/commonTypes";

export interface IFeatureCard {
  url: string;
  title?: string;
  description?: string;
  color?: TextColor;
}
const FeatureCard = ({
  url,
  title,
  description,
  color = TextColor["blue-37"],
}: IFeatureCard) => {
  return (
    <article className="w-full">
      {/* image */}
      <div className="w-full">
        <Image
          src={url}
          fill
          quality={100}
          alt={title || ""}
          className="relative w-full h-full"
        />
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
};

export default FeatureCard;
