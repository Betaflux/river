import React from "react";
import ClaimCard from "../commonComponents/ClaimCard";

interface ClaimCardValues {
  url: string;
  title: string;
  description: string;
}
interface IClaimCards {
  claimCards: ClaimCardValues[];
}
const Versatility = ({ claimCards }: IClaimCards) => {
  return (
    <section className="w-full py-[94px] px-5 bg-blue-86 lg:px-10 flex flex-col lg:flex-row lg:py-[188px]">
      {/* Title */}
      <div
        className="w-full font-manukaBold 
           text-13xl leading-13 text-left text-blue-37 mb-[65px] lg:w-1/3 lg:mb-0"
      >
        <div className="lg:hidden"> Versatility (Single-sentence-title)</div>
        <div className="hidden lg:flex flex-col">
          {" "}
          Versatility
          <div>(Single-sentence-title)</div>
        </div>
      </div>
      {/* Cards */}
      <div className="w-full grid grid-cols-1 gap-y-[45px] lg:w-2/3 lg:grid-cols-2 lg:gap-x-[20px] lg:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.map((cards) => {
          return (
            <ClaimCard
              key={cards.title}
              url={cards?.url}
              title={cards?.title}
              description={cards?.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Versatility;
