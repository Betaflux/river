import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../commonComponents/Button";
import { BackgroundColor, Size, TextColor, Variant } from "../utils/commonFunctions/commonTypes/commonTypes";


const navItems = [
  { title: "Inde", path: "/inde" },
  { title: "Purpose", path: "/purpose" },
  { title: "People", path: "/people" },
  { title: "Menu", path: "/menu" },
];
const Header = () => {
  return (
    <nav className="w-full flex flex-col lg:flex-row items-center px-5 lg:py-10 lg:px-8">
      {/* -----left side------  */}
      <div className="w-full lg:w-1/5 mr-auto pt-5  pb-6 lg:pt-0 lg:pb-0">
        <Image
          src="/images/header/yellowriverlogo.svg"
          fill
          alt="headerLogo"
          className="relative w-full h-full"
        />
      </div>
      {/* --------------right side-------- */}
      <div className="w-full lg:w-2/3">
        <div className="flex w-full justify-between items-center">
          <div
            className="text-10xl font-sohneBuch w-full flex justify-between 
          lg:justify-arround lg:text-12xl leading-12 text-blue-92 lg:pl-8"
          >
            {navItems.map((items) => {
              return (
                <Link href={items.path} key={items.title}>
                  {items.title}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex justify-end w-2/3">
            <Button
              variant={Variant.primary}
              size={Size.small}
              disabled={false}
              backGroundColor={BackgroundColor["blue-19"]}
              color={TextColor["blue-92"]}
              handleClick={() => {
                console.log("working");
              }}
            >
              Preorder Indie
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
