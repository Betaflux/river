import React from "react";
import ClaimCards from "../commonComponents/ClaimCards";
import CommonHero from "../commonComponents/CommonHero";
import CommonImage from "../commonComponents/CommonImage";
import EmployeeTestimonials from "./EmployeeTestimonials";
import Footer from "./Footer";

const Careers = ({ careersData }: any) => {
  console.log(careersData);
  return (
    <>
      {/* hero and header */}
      <CommonHero
        title={careersData?.attributes?.title}
        heroImageDesktop={
          careersData?.attributes?.heroImage?.data?.attributes?.url
        }
      />
      {/* Claims */}
      <section className="padding-top-bottom padding-left-right flex justify-end">
        <div className="w-full md:w-1/2">
          <div className="body-text font-sohneHalbfett font-semibold text-blue-37">
            {careersData?.attributes?.claims?.title}
          </div>
          {/* claim cards */}
          <div className="mt-14 lg:mt-[86px] flex flex-col gap-[86px]">
            {careersData?.attributes?.claims?.data?.map((cards: any) => {
              return (
                <div key={cards.id}>
                  <ClaimCards
                    title={cards.title}
                    description={cards.description}
                    outro={cards.outro}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* asset1 */}
      <section>
        <CommonImage
          alt="asset1"
          smallImage={`${careersData?.attributes?.asset1?.data?.attributes?.url}`}
          largeImage={`${careersData?.attributes?.asset1?.data?.attributes?.url}`}
        />
      </section>
      {/* vision */}
      <section className="padding-top-bottom padding-left-right flex justify-end">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="text-blue-37 md:text-blue-19 lg:text-blue-37 body-text font-sohneHalbfett font-semibold  mb-[25px]">
            {careersData?.attributes?.vision?.title}
          </div>
          <div className="text-blue-37 font-manukaBold font-semibold text-13xl leading-13">
            {careersData?.attributes?.vision?.subtitle}
          </div>
        </div>
      </section>
      {/* values */}
      <section className="bg-blue-19 padding-top-bottom padding-left-right flex justify-end lg:bg-[url('/images/careers/gradient.png')]">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="text-blue-98 body-text font-sohneBuch font-normal  mb-[86px]">
            {careersData?.attributes?.values?.title}
          </div>
          <div className="flex flex-col gap-[70px] md:gap-[86px] ">
            {careersData?.attributes?.values?.data?.map((data: any) => {
              return (
                <div key={data.id}>
                  <div className="text-blue-86 text-13xl leading-13 font-semibold font-manukaUltra md:font-black">
                    {data.title}
                  </div>
                  <div className="text-blue-86 body-text font-sohneBuch font-normal">
                    {data.subtitle}
                  </div>
                  {data?.description && (
                    <div className="text-blue-86 body-text font-sohneBuch font-normal mt-4">
                      {data.description}
                    </div>
                  )}
                  {data?.outro && (
                    <div className="text-blue-86 body-text font-sohneBuch font-normal mt-4">
                      {data.outro}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* asset2 */}
      <section>
        <CommonImage
          alt="asset1"
          smallImage={`${careersData?.attributes?.asset2?.data?.attributes?.url}`}
          largeImage={`${careersData?.attributes?.asset2?.data?.attributes?.url}`}
        />
      </section>
      {/* employee testimonials */}
      <EmployeeTestimonials careersData={careersData} />
      {/* job openings */}
      <section className="bg-blue-19 padding-top-bottom padding-left-right flex flex-col lg:flex-row">
        <div className="w-1/3">Job Openings</div>
        <div className="w-2/3" />
      </section>
      <Footer />
    </>
  );
};

export default Careers;
