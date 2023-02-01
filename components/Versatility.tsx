import React from "react";
import FeatureCard from "../commonComponents/FeatureCard";

interface FeatureCardValues {
  url: string;
  title: string;
  description: string;
}
interface IFeatureCards {
  claimCards: FeatureCardValues[];
}
const Versatility = ({ claimCards }: IFeatureCards) => {
  return (
    <section className="w-full  px-5 bg-blue-86 lg:px-10 flex flex-col lg:flex-row padding-top-bottom">
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
      <div className="w-full grid grid-cols-1 gap-y-[45px] lg:w-2/3 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[65px] lg:ml-[60px]">
        {claimCards?.map((cards) => {
          return (
            <FeatureCard
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
