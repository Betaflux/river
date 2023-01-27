import React from "react";
import {
  BackgroundColor,
  TextColor,
} from "../utils/commonFunctions/commonTypes";
import Accordion from "./Accordion";
import ClaimCard, { IClaimCard } from "./ClaimCard";

interface IFeatures {
  feature: string;
  title: string;
  claimCards: IClaimCard[];
  textColor: TextColor;
  backgroundColor?: BackgroundColor;
}

const Features = ({
  feature,
  title,
  claimCards,
  textColor,
  backgroundColor,
}: IFeatures) => {
  return (
    <section
      className={`w-full py-[100px] px-5 ${backgroundColor} flex flex-col lg:px-10 lg:flex-row lg:py-[193px]`}
    >
      {/* Title */}
      <div
        className={`w-full font-manukaBold 
           text-13xl leading-13 text-left ${textColor} mb-[65px] lg:mb-0 lg:w-1/3`}
      >
        <div>{feature}</div>
        <div>{title}</div>
      </div>
      {/* Cards */}
      <div className="lg:hidden w-full grid grid-cols-1 gap-y-[70px] lg:w-2/3 lg:grid-cols-2 lg:gap-x-[20px] lg:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.slice(0, 3).map((cards) => {
          return (
            <ClaimCard
              key={cards.url}
              url={cards.url}
              title={cards.title}
              description={cards.description}
              color={textColor}
            />
          );
        })}
        <div className="w-full  lg:hidden">
          <div className="border-t-1 border-blue-86 pt-5">
            <Accordion
              title={claimCards[claimCards.length - 1]?.title || ""}
              desc={claimCards[claimCards.length - 1]?.description || ""}
              color={textColor}
            />
          </div>
          <div className="mt-[15px]">
            <ClaimCard url={claimCards[claimCards.length - 1].url} />
          </div>
        </div>
      </div>
      <div className="hidden w-full lg:grid grid-cols-1 gap-y-[70px] lg:w-2/3 lg:grid-cols-2 lg:gap-x-[20px] lg:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.map((cards) => {
          return (
            <ClaimCard
              key={cards.url}
              url={cards.url}
              title={cards.title}
              description={cards.description}
              color={textColor}
            />
          );
        })}
        <div className="w-full  lg:hidden">
          <div className="border-t-1 border-blue-86 pt-5">
            <Accordion
              title={claimCards[claimCards.length - 1]?.title || ""}
              desc={claimCards[claimCards.length - 1]?.description || ""}
              color={textColor}
            />
          </div>
          <div className="mt-[15px]">
            <ClaimCard url={claimCards[claimCards.length - 1].url} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
