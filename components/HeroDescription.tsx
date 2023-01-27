import { useRouter } from "next/router";
import React from "react";
import Button from "../commonComponents/Button";
import {
  BackgroundColor,
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";

const HeroDescription = () => {
  const router = useRouter();
  return (
    <section className="hidden w-full py-[94px] px-5 lg:flex  lg:px-10 lg:flex-row lg:py-[193px]">
      {/* Title */}
      <div
        className="w-1/2 font-manukaBold 
           text-13xl leading-13 text-left text-blue-37 mb-[45px] lg:w-1/2 lg:mb-0"
      >
        <div className="w-3/4">
          Hero-line: A single-sentence description of INDIE
        </div>
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col gap-[20px] lg:w-1/2 lg:flex-col-reverse">
        <div className="w-full text-center lg:text-left">
          <Button
            variant={Variant.primary}
            size={Size.medium}
            disabled={false}
            backGroundColor={BackgroundColor["yellow-86"]}
            color={TextColor["blue-19"]}
            hoverTextColor={HoverTextColor["yellow-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
            handleClick={() => {
              router.push("/preorder");
            }}
          >
            Preorder Indie Online
          </Button>
        </div>
        <div className="w-full">
          <div className="text-blue-37  mb-[20px] font-sohneBuch text-10xl leading-11 w-4/5 lg:text-12xl lg:leading-12 lg:mb-[10px]">
            Longer description: There are over 200 million two-wheelers on
            Indian roads, and for each rider, the two wheels are much more than
            a mere mode of transportation. For some, it is a tool that powers
            day-to-day lives.
          </div>
          <div className="text-blue-37  font-sohneBuch text-10xl leading-11 lg:text-12xl lg:leading-12 lg:mb-[50px]">
            For many, it is freedom of movement.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDescription;