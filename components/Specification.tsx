import React from "react";
import Button from "../commonComponents/Button";
import Specifications, {
  ISpecifications,
} from "../commonComponents/Specifications";
import {
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";

interface ISpecification {
  specificationData: ISpecifications[];
}
const Specification = ({ specificationData }: ISpecification) => {
  return (
    <section className="w-full  px-5 bg-blue-19 flex flex-col lg:px-10 lg:flex-row padding-top-bottom">
      {/* Title */}
      <div
        className="w-full font-manukaBold 
           text-13xl leading-13 text-left text-blue-86 mb-[65px] lg:w-1/3 lg:mb-0"
      >
        Specifications
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col gap-[20px] lg:w-2/3 lg:ml-[60px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[20px]">
          {specificationData?.map((ele) => {
            return <Specifications title={ele.title} desc={ele.desc} />;
          })}
        </div>
        <div className="w-full text-center mt-[50px] lg:text-left lg:mt-[126px]">
          <Button
            variant={Variant.secondaryDark}
            size={Size.large}
            disabled={false}
            color={TextColor["blue-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-86"]}
            hoverTextColor={HoverTextColor["blue-37"]}
            handleClick={() => {
              console.log("working");
            }}
          >
            View Detailed Specifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Specification;
