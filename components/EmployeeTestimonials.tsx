import Link from "next/link";
import React from "react";
import CommonImage from "../commonComponents/CommonImage";

const EmployeeTestimonials = ({ careersData }: any) => {
  return (
    <section className="padding-top-bottom padding-left-right flex flex-col md:flex-row lg:flex-col">
      <div className="w-1/3 md:w-1/3 lg:w-full">
        <div className=" text-blue-37 font-manukaBold font-semibold text-13xl leading-13 mb-[58px] md:mb-0 lg:mb-[95px]">
          {careersData?.attributes?.employeeTestimonials?.title}
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-full">
        <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-5 md:gap-[60px]">
          {careersData?.attributes?.employeeTestimonials?.data?.map(
            (data: any) => {
              return (
                <div key={data.id}>
                  <div>
                    <div className="body-text text-blue-37 font-sohneBuch font-normal mb-3 lg:mb-[35px]">
                      {data?.description}
                    </div>
                    <div className="mb-2.5 lg:mb-[45px]">
                      <div className="font-sohneHalbfett font-semibold body-text text-blue-37">
                        {data?.title}
                      </div>
                      <div className="font-sohneBuch font-normal body-text text-blue-37">
                        {data?.subtitle}
                      </div>
                    </div>
                    <div className="mb-[64px] md:mb-5 lg:mb-[37px]">
                      <Link
                        href="/"
                        className="font-sohneBuch font-normal body-text text-blue-37 underline underline-offset-8"
                      >
                        {data?.outro}
                      </Link>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <CommonImage
                      alt="asset1"
                      smallImage={`${careersData?.attributes?.asset2?.data?.attributes?.url}`}
                      largeImage={`${careersData?.attributes?.asset2?.data?.attributes?.url}`}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;
