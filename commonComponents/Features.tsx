import React from 'react';
import { BackgroundColor, TextColor } from '../utils/commonFunctions/commonTypes/commonTypes';
import Accordion from './Accordion';
import ClaimCard, { IClaimCard } from './ClaimCard';

type AccordionData={
  title:string,
  desc:string,
}
interface IFeatures{
  feature:string;
  title:string;
  claimCards:IClaimCard[];
  accordionData:AccordionData[];
  textColor:TextColor;
  backgroundColor?:BackgroundColor;
}

const Features = ({feature,title,claimCards,accordionData,textColor,backgroundColor}:IFeatures) => {
  return (
    <section
      className={`w-full py-[94px] px-5 ${backgroundColor} flex flex-col lg:px-10 lg:flex-row lg:py-[188px]`}
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
      <div className="w-full grid grid-cols-1 gap-y-[45px] lg:w-2/3 lg:grid-cols-2 lg:gap-x-[20px] lg:gap-y-[65px] lg:ml-[60px]">
        {claimCards.map((cards) => {
          return (
            <ClaimCard
              url={cards.url}
              title={cards.title}
              description={cards.description}
              color={textColor}
            />
          );
        })}
        <div className="w-full lg:hidden">
          {accordionData.map((items) => {
            return (
              <div className="border-t-1 border-blue-86 mt-5">
                <Accordion
                  title={items.title}
                  desc={items.desc}
                  color={textColor}
                />
              </div>
            );
          })}
          <div className="mt-[15px]">
            <ClaimCard url="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;