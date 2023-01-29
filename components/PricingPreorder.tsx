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

const PricingPreorder = () => {
  const router = useRouter();
  return (
    <section className="w-full  px-5 flex flex-col lg:px-10 lg:flex-row padding-top-bottom">
      {/* Title */}
      <div
        className="w-3/4 font-manukaBold 
           text-13xl leading-13 text-left text-blue-37 mb-[45px] lg:w-1/2 lg:mb-0"
      >
        Pricing & Preorder
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
        <div className="w-full lg:w-3/4">
          <div className="text-blue-37 mt-[43px] mb-[20px] font-sohneBuch text-10xl leading-11 w-4/5 lg:text-12xl lg:leading-12 lg:mb-[10px] lg:mt-0">
            Ex. Showroom Price, Bangalore starts at{" "}
            <span className="font-sohneHalbfett">Rs. 1,25,000</span>
          </div>
          <div className="text-blue-37 cursor-pointer underline underline-offset-4 font-sohneBuch text-10xl leading-11 lg:text-12xl lg:leading-12 lg:mb-[50px]">
            View Price Breakup
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreorder;
