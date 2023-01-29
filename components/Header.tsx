/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../commonComponents/Button";
import {
  BackgroundColor,
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";

const navItems = [
  { title: "Inde", path: "/inde" },
  { title: "Purpose", path: "/purpose" },
  { title: "People", path: "/people" },
  { title: "Menu", path: "/menu" },
];
const Header = () => {
  const router = useRouter();
  const [goingUp, setGoingUp] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 104) {
      setGoingUp(true);
      console.log(goingUp);
    } else {
      setGoingUp(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        goingUp ? `bg-blue-19` : ``
      }  w-full flex flex-col lg:flex-row items-center px-5 lg:py-5 lg:px-8 ${
        router.pathname.split("").length === 1 ? `fixed` : `sticky`
      }  z-50 top-0 left-0 lg:h-[121px]`}
    >
      {/* -----left side------  */}
      <div className="w-full flex justify-center relative lg:w-1/5 mr-auto pt-5  pb-6 lg:pt-0 lg:pb-0">
        <Link href="/" className="w-1/2 lg:w-full">
          <Image
            src={`/images/header/${
              router.pathname.split("").length === 1 ||
              router.pathname.includes("product")
                ? `yellowriverlogo.svg`
                : `blueriverlogo.svg`
            }`}
            fill
            quality={100}
            alt="headerLogo"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="relative w-full h-full"
          />
        </Link>
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
                    router.pathname.split("").length === 1 ||
                    router.pathname.includes("product")
                      ? `text-blue-92`
                      : `text-blue-37`
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
                router.pathname.includes("paymentdetails") ? `hidden` : ``
              }`}
            >
              <Button
                variant={Variant.primary}
                size={Size.small}
                disabled={false}
                backGroundColor={BackgroundColor["blue-19"]}
                hoverBackgroundColor={HoverBackgroundColor.disabled}
                hoverTextColor={HoverTextColor.disabled}
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
