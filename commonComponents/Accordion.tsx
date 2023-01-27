/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from "react";

export interface IAccordion {
  title: string;
  desc: string;
  color: string;
  itemIndex: number;
  isOpen: boolean;
  toggleHandler: (index: number) => void;
}

const Accordion = ({
  title,
  desc,
  color,
  isOpen,
  itemIndex,
  toggleHandler,
}: IAccordion) => {
  return (
    <details className={`${color} mt-5`}>
      <summary className="flex w-full text-lg leading-11 sm:text-2xl sm:leading-12 font-sohneHalbfett">
        <div className="w-2/3 justify-between">{title}</div>
        <div
          className="w-1/3 text-right"
          role="button"
          onClick={() => toggleHandler(itemIndex)}
        >
          {isOpen ? "-" : "+"}
        </div>
      </summary>
      <div className="text-lg leading-11 sm:text-2xl font-sohneBuch sm:leading-12">
        {desc}
      </div>
    </details>
  );
};

export default Accordion;
