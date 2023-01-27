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

const ProductInformation = () => {
  return (
    <section className="w-full mt-[100px] lg:hidden">
      {/* mobile view */}
      <div className="w-full">
        <div className="px-5 w-1/3 text-13xl leading-13 text-blue-37 font-manukaUltra sm:w-full lg:hidden">
          INTRODUCING INDIE
        </div>
        <div className="px-5 py-[70px]">
          <p className="mb-2.5 mt-2.5 font-sohneBuch text-10xl leading-11 text-blue-37">
            Longer description: There are over 200 million two-wheelers on
            Indian roads, and for each rider, the two wheels are much more than
            a mere mode of transportation.
          </p>
          <p className="font-sohneBuch text-10xl leading-11 text-blue-37">
            For some, it is a tool that powers day-to-day lives. For many, it is
            freedom of movement.
          </p>
        </div>
      </div>
      <div className="w-full text-center mb-[100px] lg:hidden">
        <Button
          variant={Variant.primary}
          size={Size.medium}
          disabled={false}
          backGroundColor={BackgroundColor["yellow-86"]}
          color={TextColor["blue-19"]}
          hoverTextColor={HoverTextColor["yellow-86"]}
          hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
          handleClick={() => {
            console.log("working");
          }}
        >
          Preorder Indie Online
        </Button>
      </div>
    </section>
  );
};

export default ProductInformation;
