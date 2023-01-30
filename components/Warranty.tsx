import React from "react";

const Warranty = () => {
  return (
    <section className="px-5  bg-blue-86 w-full flex flex-col gap-[20px] lg:px-10 lg:flex-row padding-top-bottom lg:gap-[135px]">
      <div className="w-full lg:w-1/3">
        <div className="mb-1 text-blue-37 w-full  font-manukaBold text-[100px] leading-[120px] lg:text-[200px] lg:leading-[170px]">
          IP67
        </div>
        <p className="text-blue-37 w-full text-10xl leading-11 font-sohneBuch lg:text-12xl lg:leading-12">
          Rated for water and something else damage protection for all-weather
          use.
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <div className="mb-1 text-blue-37 w-full  font-manukaBold text-[100px] leading-[120px] lg:text-[200px] lg:leading-[170px]">
          3<span className="font-manukaThin">YEARS</span>
        </div>
        <p className="text-blue-37 w-full text-10xl leading-11 font-sohneBuch lg:text-12xl lg:leading-12">
          Rated for water and something else damage protection for all-weather
          use.
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <div className="mb-1 text-blue-37 w-full  font-manukaBold text-[100px] leading-[120px] lg:text-[200px] lg:leading-[170px]">
          100,000
        </div>
        <p className="text-blue-37 w-full text-10xl leading-11 font-sohneBuch lg:text-12xl lg:leading-12">
          Rated for water and something else damage protection for all-weather
          use.
        </p>
      </div>
    </section>
  );
};

export default Warranty;
