import ctl from "@netlify/classnames-template-literals";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import CommonImage from "../commonComponents/CommonImage";
import NewsLetter from "../commonComponents/NewsLetter";
import handleValidation from "../utils/commonFunctions/validation";
import Footer from "./Footer";
import Header from "./Header";

interface IInitialState {
  value: string;
  error: string;
}
const bodyText = ctl(`text-10xl leading-11xl lg:text-12xl lg:leading-12`);
const Purpose = ({ purposeData }: any) => {
  const initialState = {
    value: "",
    error: "",
  };
  const [newsletter, setNewsLetter] = useState<IInitialState>(initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    setValue: Dispatch<SetStateAction<any>>
  ) => {
    const { value } = e.target;
    const error = handleValidation(value, name);
    setValue({ value, error });
  };
  console.log(newsletter);
  return (
    <div className="bg-white lg:bg-blue-19">
      <Header />
      {/* title */}
      <section className="bg-white lg:bg-blue-19 padding-left-right text-blue-37 lg:text-blue-92 font-manukaUltra text-13xl leading-13 md:text-[240px] md:leading-[190px] lg:text-14xl lg:leading-14  padding-top-bottom">
        <div className="w-2/3 uppercase">{purposeData?.attributes?.title}</div>
      </section>
      {/* description to take people section */}
      <section className="bg-blue-86 flex padding-left-right padding-top-bottom">
        <div className="md:w-1/2 lg:w-2/5" />
        <div className="w-4/5 md:w-1/2 lg:w-3/5 font-manukaBold text-blue-37 text-13xl leading-13">
          <div className="lg:w-2/3">{purposeData?.attributes?.description}</div>
        </div>
      </section>
      {/* scooty image */}
      <section className="w-full">
        <CommonImage
          alt="scooty"
          smallImage={`${purposeData?.attributes?.productAsset1?.data?.attributes?.formats?.thumbnail?.url}`}
          largeImage={`${purposeData?.attributes?.productAsset1?.data?.attributes?.url}`}
        />
      </section>
      {/* foundermessage 1 */}
      <section className="bg-blue-86 md:bg-white padding-left-right padding-top-bottom">
        <div className="text-blue-37 md:text-blue-19 text-[24px] leading-[30px] font-sohneBuch md:text-3xl md:leading-10 lg:text-6xl lg:leading-[75px]">
          {purposeData?.attributes?.founderMessage1?.message}
        </div>
        <div className="w-full flex justify-start md:justify-end md:mt-[53px] lg:mt-[60px]">
          <div className="md:hidden flex gap-1 mt-[37px]">
            <div
              className={`text-blue-37 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {purposeData?.attributes?.founderMessage1?.name}
              {/*  eslint-disable-next-line react/jsx-curly-brace-presence */}
              {","}
            </div>
            <div
              className={`text-blue-37 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {
                purposeData?.attributes?.founderMessage1?.designation.split(
                  "and"
                )[0]
              }
            </div>
          </div>
          {/* desktop */}
          <div className="hidden lg:flex flex-col w-1/2">
            <div
              className={`text-blue-19 ${bodyText} md:text-11xl md:leading-[30px] font-sohneHalbfett`}
            >
              {purposeData?.attributes?.founderMessage1?.name}
            </div>
            <div
              className={`text-blue-19 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {purposeData?.attributes?.founderMessage1?.designation}
            </div>
          </div>
        </div>
      </section>
      {/* product asset2 */}
      <section className="w-full">
        <CommonImage
          alt="scooty"
          smallImage={`${purposeData?.attributes?.productAsset2?.data?.attributes?.formats?.thumbnail?.url}`}
          largeImage={`${purposeData?.attributes?.productAsset2?.data?.attributes?.url}`}
        />
      </section>
      {/* Approach mobile */}
      <section className="md:hidden bg-white padding-left-right padding-top-bottom flex justify-end">
        <div className="w-full md:w-3/5">
          <div
            className={`text-blue-37 md:text-blue-19 ${bodyText} font-sohneHalbfett mb-[12px] md:mb-[25px] md:hidden lg:flex`}
          >
            {purposeData?.attributes?.approach?.title}
          </div>
          <div className="font-manukaBold text-blue-37 text-13xl leading-13 mb-[55px] md:mb-[35px] lg:mb-[85px]">
            {purposeData?.attributes?.approach?.subtitle}
          </div>
          <div
            className={`text-blue-37 ${bodyText}  md:text-11xl md:leading-[30px] font-sohneBuch`}
          >
            {purposeData?.attributes?.approach?.description}
          </div>
          <div
            className={`text-blue-37 ${bodyText} md:text-11xl md:leading-[30px] mt-3 font-sohneBuch`}
          >
            {purposeData?.attributes?.approach?.outro}
          </div>
        </div>
      </section>
      {/* foundermessage 2 */}
      <section className="bg-blue-19 padding-left-right padding-top-bottom">
        <div className="text-blue-92 text-[24px] leading-[30px] md:text-3xl md:leading-10 font-sohneBuch lg:text-6xl lg:leading-[75px]">
          {purposeData?.attributes?.founderMessage2?.message}
        </div>
        <div className="w-full flex justify-start md:justify-end md:mt-[53px] lg:mt-[60px]">
          <div className="md:hidden flex gap-1 mt-[37px]">
            <div
              className={`text-blue-92 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {purposeData?.attributes?.founderMessage2?.name}
              {/*  eslint-disable-next-line react/jsx-curly-brace-presence */}
              {","}
            </div>
            <div
              className={`text-blue-92 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {
                purposeData?.attributes?.founderMessage2?.designation.split(
                  "and"
                )[0]
              }
            </div>
          </div>
          {/* desktop */}
          <div className="hidden lg:flex flex-col w-1/2">
            <div
              className={`text-blue-92 ${bodyText} md:text-11xl md:leading-[30px] font-sohneHalbfett`}
            >
              {purposeData?.attributes?.founderMessage2?.name}
            </div>
            <div
              className={`text-blue-92 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch`}
            >
              {purposeData?.attributes?.founderMessage2?.designation}
            </div>
          </div>
        </div>
      </section>
      {/* Approach */}
      <section className="hidden bg-white padding-left-right padding-top-bottom md:flex justify-end">
        <div className="w-full md:w-3/5">
          <div
            className={`text-blue-37 md:text-blue-19 ${bodyText} font-sohneHalbfett mb-[12px] md:mb-[25px] md:hidden lg:flex`}
          >
            {purposeData?.attributes?.approach?.title}
          </div>
          <div className="font-manukaBold text-blue-37 text-13xl leading-13 mb-[55px] md:mb-[35px] lg:mb-[85px]">
            {purposeData?.attributes?.approach?.subtitle}
          </div>
          <div
            className={`text-blue-37 ${bodyText}  md:text-11xl md:leading-[30px] font-sohneBuch`}
          >
            {purposeData?.attributes?.approach?.description}
          </div>
          <div
            className={`text-blue-37 ${bodyText} md:text-11xl md:leading-[30px] mt-3 font-sohneBuch`}
          >
            {purposeData?.attributes?.approach?.outro}
          </div>
        </div>
      </section>
      {/* first product */}
      <section className="bg-blue-86 padding-top-bottom">
        <div className="w-2/3 px-5 lg:px-10 md:w-full text-blue-19 text-13xl leading-13 md:text-11xl md:leading-[30px] font-manukaBold md:font-sohneHalbfett mb-[100px] md:mb-[25px] text-left md:text-center">
          {purposeData?.attributes?.firstProduct?.title}
        </div>
        <div className="px-0 lg:px-10">
          <CommonImage
            alt="scooty"
            smallImage={`${purposeData?.attributes?.firstProduct?.image?.data?.attributes?.url}`}
            largeImage={`${purposeData?.attributes?.firstProduct?.image?.data?.attributes?.url}`}
          />
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="w-full md:w-3/5 lg:pr-3">
            <div
              className={`text-blue-19 ${bodyText} md:text-11xl md:leading-[30px] mt-[61px] md:mt-5 mb-5 font-sohneBuch padding-left-right`}
            >
              {purposeData?.attributes?.firstProduct?.introduction}
            </div>
            <Link
              href="/"
              className={`text-blue-19 ${bodyText} md:text-11xl md:leading-[30px] font-sohneBuch padding-left-right`}
            >
              {purposeData?.attributes?.firstProduct?.linkText}
            </Link>
          </div>
        </div>
      </section>
      {/* news letter */}
      <NewsLetter
        name="newsLetter"
        label="Sign Up for the River Newsletter"
        placeholder="Email"
        value={newsletter.value}
        error={newsletter.error}
        handleChange={(e) => handleChange(e, "email", setNewsLetter)}
      />
      <Footer />
    </div>
  );
};

export default Purpose;
