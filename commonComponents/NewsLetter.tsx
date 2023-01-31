import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import React from "react";

const bodyText = ctl(
  `text-10xl leading-11xl md:text-11xl md:leading-[30px] lg:text-12xl lg:leading-12`
);

interface INewsLetter {
  name: string;
  value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  error?: string;
}

const NewsLetter = ({
  value,
  handleChange,
  label,
  name,
  placeholder,
  error,
}: INewsLetter) => {
  return (
    <section className="w-full bg-blue-19 flex justify-end padding-top-bottom padding-left-right">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div
          className={`w-full border-b-1 ${
            error ? `border-red-600` : `border-blue-61`
          }`}
        >
          <div className={`text-blue-61 ${bodyText} mb-[29px] font-sohneBuch`}>
            {label}
          </div>
          <div className="flex justify-between items-center">
            <input
              name={name}
              className="w-full form-input bg-transparent appearance-none outline-none focus:outline-none focus:ring-0  border-none text-blue-61 text-lg leading-11 lg:text-12xl lg:leading-12"
              type="email"
              autoComplete="off"
              placeholder={placeholder || ""}
              value={value}
              onChange={handleChange}
            />
            <div>
              <Image
                alt="arrow"
                src="/images/purpose/arrow.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
