import React from "react";
import Card, { ICard } from "../commonComponents/Card";

interface IAccessories {
  accessoriesData: ICard[];
  title: string;
}
const Accessories = ({ accessoriesData, title }: IAccessories) => {
  return (
    <section className="w-full py-[100px] px-5 lg:py-[200px] lg:px-10">
      {/* Title */}
      <div
        className="w-full font-manukaBold 
           text-13xl leading-13 text-left text-blue-37 mb-[65px] lg:mb-[108px]"
      >
        {title}
      </div>
      {/* Cards */}
      <div className="w-full grid grid-cols-1  gap-y-[20px] md:grid-cols-2 md:gap-x-[20px] lg:grid-cols-3 lg:gap-x-[20px]">
        {accessoriesData.map((cards) => {
          return (
            <Card
              key={cards.title}
              image={cards.image}
              title={cards.title}
              paragraph={cards.paragraph}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Accessories;
