/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../commonComponents/Button";
import {
  BackgroundColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes/commonTypes";

const navItems = [
  { title: "Inde", path: "/inde" },
  { title: "Purpose", path: "/purpose" },
  { title: "People", path: "/people" },
  { title: "Menu", path: "/menu" },
];
const Header = () => {
  const router = useRouter();

  return (
    <nav className="w-full flex flex-col lg:flex-row items-center px-5 lg:py-10 lg:px-8">
      {/* -----left side------  */}
      <div className="w-full relative lg:w-1/5 mr-auto pt-5  pb-6 lg:pt-0 lg:pb-0">
        <Image
          src={`/images/header/${
            router.pathname.includes("preorder")
              ? `blueriverlogo.svg`
              : `yellowriverlogo.svg`
          }`}
          fill
          alt="headerLogo"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="relative w-full h-full"
        />
      </div>
      {/* --------------right side-------- */}
      <div className="w-full lg:w-2/3">
        <div className="flex w-full justify-between items-center">
          <div
            className="text-10xl font-sohneBuch w-full flex justify-between 
          lg:justify-arround lg:text-12xl leading-12  lg:pl-8"
          >
            {navItems.map((items, index) => {
              return (
                <Link
                  href={items.path}
                  key={index}
                  className={`${
                    router.pathname.includes("preorder")
                      ? `text-blue-37`
                      : `text-blue-92`
                  }`}
                >
                  {items.title}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex justify-end w-2/3">
            <div
              className={`${
                router.pathname.includes("preorder") ? `hidden` : ``
              }`}
            >
              <Button
                variant={Variant.primary}
                size={Size.small}
                disabled={false}
                backGroundColor={BackgroundColor["blue-19"]}
                color={TextColor["blue-86"]}
                handleClick={() => {
                  router.push("/preorder");
                }}
              >
                Preorder Indie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
