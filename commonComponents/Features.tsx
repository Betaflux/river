import React, { useState } from "react";
import {
  BackgroundColor,
  TextColor,
} from "../utils/commonFunctions/commonTypes";
import Accordion from "./Accordion";
import FeatureCard, { IFeatureCard } from "./FeatureCard";

interface IFeatures {
  feature: string;
  title: string;
  claimCards: IFeatureCard[];
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
  const [isOpen, setIsOpen] = useState<boolean[]>(
    new Array(claimCards.length).fill(false)
  );
  const toggleHandler = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <section
      className={`w-full  px-5 ${backgroundColor} flex flex-col lg:px-10 lg:flex-row padding-top-bottom`}
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
      <div className="md:hidden w-full grid grid-cols-1 gap-y-[70px] lg:w-2/3 lg:grid-cols-2 lg:gap-x-[20px] lg:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.slice(0, 3).map((cards) => {
          return (
            <FeatureCard
              key={cards.url}
              url={cards.url}
              title={cards.title}
              description={cards.description}
              color={textColor}
            />
          );
        })}
        <div className="w-full  lg:hidden">
          {claimCards?.slice(3, claimCards.length).map((cards, index) => {
            return (
              <div className="border-t-1 mt-6 border-blue-86">
                <Accordion
                  itemIndex={index}
                  isOpen={isOpen[index]}
                  toggleHandler={toggleHandler}
                  title={cards?.title}
                  desc={cards?.description}
                  color={textColor}
                  imageUrl={cards.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Cards for desktop and tablet */}
      <div className="hidden w-full md:grid grid-cols-1 gap-y-[70px] lg:w-2/3 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.map((cards) => {
          return (
            <FeatureCard
              key={cards.url}
              url={cards.url}
              title={cards.title}
              description={cards.description}
              color={textColor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
