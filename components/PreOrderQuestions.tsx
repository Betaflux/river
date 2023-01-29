/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import Accordion from "../commonComponents/Accordion";

type AccordionData = {
  title: string;
  desc: string;
};
interface IPreOrderQuestions {
  accordionData: AccordionData[];
}
const PreOrderQuestions = ({ accordionData }: IPreOrderQuestions) => {
  const [limit, setLimit] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean[]>(
    new Array(accordionData.length).fill(false)
  );
  const toggleHandler = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section className="w-full  px-5 bg-blue-19 flex flex-col padding-top-bottom lg:px-10 lg:flex-row">
      {/* Title */}
      <div
        className="w-full font-manukaBold 
           text-13xl leading-13 text-left text-blue-86 mb-[65px] lg:w-1/2 lg:mb-0"
      >
        Frequently Asked Questions
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col gap-[20px] lg:w-1/2">
        <div className="w-full grid grid-cols-1 lg:hidden">
          {accordionData?.slice(0, limit).map((items, index) => {
            return (
              <div
                key={items.title}
                className="border-b-1 border-blue-86 pb-5 last:border-none"
              >
                <Accordion
                  itemIndex={index}
                  isOpen={isOpen[index]}
                  toggleHandler={toggleHandler}
                  title={items.title}
                  desc={items.desc}
                  color="text-blue-86"
                />
              </div>
            );
          })}
        </div>
        {/* for desktop */}
        <div className="hidden  w-full lg:grid lg:grid-cols-1">
          {accordionData?.map((items, index) => {
            return (
              <div
                key={items.title}
                className="border-b-1 border-blue-86 pb-5 last:border-none"
              >
                <Accordion
                  itemIndex={index}
                  isOpen={isOpen[index]}
                  toggleHandler={toggleHandler}
                  title={items.title}
                  desc={items.desc}
                  color="text-blue-86"
                />
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {
            if (limit < accordionData.length) {
              setLimit(limit + 1);
            }
          }}
          className="cursor-pointer w-full text-left font-sohneBuch text-10xl leading-11 text-blue-86 underline underline-offset-8 mt-[50px] lg:hidden"
        >
          View More
        </div>
      </div>
    </section>
  );
};

export default PreOrderQuestions;
