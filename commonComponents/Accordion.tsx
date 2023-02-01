/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import Image from "next/image";
import React from "react";

export interface IAccordion {
  title: string | undefined;
  desc: string | undefined;
  color: string;
  itemIndex: number;
  isOpen: boolean;
  imageUrl?: string;
  toggleHandler: (index: number) => void;
}

const Accordion = ({
  title,
  desc,
  color,
  isOpen,
  itemIndex,
  toggleHandler,
  imageUrl,
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
      {imageUrl && (
        <div className="w-full mt-4">
          <Image
            src={imageUrl}
            alt="accordionImage"
            fill
            quality={100}
            className="w-full h-full relative"
          />
        </div>
      )}
    </details>
  );
};

export default Accordion;
