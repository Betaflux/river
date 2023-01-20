import React, {  useRef, useState } from "react";

export interface IAccordion {
  title: string;
  desc: string;
  color:string;
}

const Accordion = ({ title, desc, color }: IAccordion) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef<any>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current?.scrollHeight}px` : "0px");
  };
  return (
    <div className={`${color}`}>
      <div className="flex justify-between">
        <div className="w-5/6 pt-3">
          <div className="text-lg leading-11 sm:text-2xl sm:leading-12 font-sohneHalbfett">
            {title}
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={HandleOpening}
            className="w-1/6 pt-3 outline-none text-2xl"
          >
            {isOpened ? "-" : "+"}
          </button>
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height }}
        className="overflow-hidden transition-all duration-200"
      >
        <p className="text-lg leading-11 sm:text-2xl font-sohneBuch sm:leading-12">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
