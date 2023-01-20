import React from "react";

interface IAccordion {
  title: string;
  desc: string;
  color: string;
}

const Accordion = ({ title, desc, color}: IAccordion) => {
  return (
    <details className={`${color}`}>
      <summary className="flex w-full text-lg leading-11 sm:text-2xl sm:leading-12 font-sohneHalbfett">
        <div className="w-2/3 justify-between">{title}</div>
        <div className="w-1/3 text-right">+</div>
        <div className="w-1/3 text-right hidden">-</div>
      </summary>
      <div className="text-lg leading-11 sm:text-2xl font-sohneBuch sm:leading-12">
        {desc}
      </div>
    </details>
  );
};

export default Accordion;
