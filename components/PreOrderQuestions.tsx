import React, { useState } from 'react'
import Accordion from '../commonComponents/Accordion';
import Button from '../commonComponents/Button';
import { HoverBackgroundColor, Size, TextColor, Variant } from '../utils/commonFunctions/commonTypes/commonTypes';

type AccordionData = {
  title: string;
  desc: string;
};
interface IPreOrderQuestions{
  accordionData:AccordionData[]
}
const PreOrderQuestions = ({accordionData}:IPreOrderQuestions) => {
  const[limit,setLimit]=useState<number>(3);
  return (
    <section className="w-full py-[94px] px-5 bg-blue-19 flex flex-col lg:px-10 lg:flex-row">
      {/* Title */}
      <div
        className="w-full font-manukaBold italic
           text-13xl leading-13 text-left text-blue-86 mb-[65px] lg:w-1/2 lg:mb-0"
      >
        Frequently Asked Questions
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col gap-[20px] lg:w-1/2">
        <div className="w-full grid grid-cols-1">
          {accordionData?.slice(0,limit).map((items) => {
            return (
              <div className="border-b-1 border-blue-86 pb-5 last:border-none">
                <Accordion
                  title={items.title}
                  desc={items.desc}
                  color="text-blue-86"
                />
              </div>
            );
          })}
        </div>
        <div className="w-full text-center mt-[50px] lg:hidden">
          <Button
            variant={Variant.secondaryDark}
            size={Size.large}
            disabled={false}
            color={TextColor["blue-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-86"]}
            handleClick={() => {
             if(limit<accordionData.length-1){
              setLimit(limit+1);
             }
            }}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PreOrderQuestions;