import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";

interface ICommonIMgae {
  title: string;
  heroImageMobile?: string;
  heroImageDesktop?: string;
}
const fontSize = ctl(
  `text-13xl leading-13 md:text-[200px] md:leading-[180px]  lg:text-[250px] lg:leading-[230px] lg:font-semibold`
);
const CommonHero = ({
  title,
  heroImageMobile,
  heroImageDesktop,
}: ICommonIMgae) => {
  return (
    <section className="w-full relative">
      <div className="absolute z-50 w-full">
        <Header />
      </div>
      <div
        className={`px-5 font-manukaBold absolute z-20 w-full bottom-5 text-blue-98  lg:bottom-10 lg:px-10 ${fontSize}`}
      >
        <div>{title}</div>
      </div>
      <div className="hidden lg:flex">
        <Image
          src={`${heroImageDesktop}`}
          fill
          quality={100}
          alt="headerLogo"
          className="relative w-full h-screen"
        />
      </div>
      <div className="lg:hidden">
        <Image
          src={`${heroImageDesktop || heroImageMobile}`}
          fill
          quality={100}
          alt="headerLogo"
          className="relative w-full h-full"
        />
      </div>
    </section>
  );
};

export default CommonHero;
