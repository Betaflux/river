import React from "react";

export interface ISpecifications {
  title: string;
  desc: string;
}

const Specifications = ({ title, desc }: ISpecifications) => {
  return (
    <div className="text-blue-86">
      <div className="border-b-1 border-blue-86  pb-5">
        <div className="mt-5 font-sohneHalbfett text-10xl leading-11xl lg:text-12xl lg:leading-12">
          {title}
        </div>
        <p className="font-sohneBuch text-10xl leading-11xl lg:text-12xl lg:leading-12">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Specifications;
