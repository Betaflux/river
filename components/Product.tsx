import Image from "next/image";
import React from "react";

import {
  BackgroundColor,
  TextColor,
} from "../utils/commonFunctions/commonTypes/commonTypes";
import Footer from "./Footer";
import Header from "./Header";
import IntroductionToIndie from "./IntroductionToIndie";
import Versatility from "./Versatility";
import CommonImage from "../commonComponents/CoomonImage";
import Features from "../commonComponents/Features";
import Accessories from "./Accessories";
import Warenty from "./Warenty";
import Specification from "./Specification";
import PricingPreorder from "./PricingPreorder";
import IndeDescription from "./IndeDescription";
import Introduction from "../commonComponents/Introduction";
import RiverProducts from "./RiverProducts";


const claimCards = [
  {
    url: "",
    title: "Claim 1: Multiple Kickstands",
    description: "hort description in a sentence or two at most.",
  },
  {
    url: "",
    title: "Claim 1: Multiple Kickstands",
    description: "hort description in a sentence or two at most.",
  },
  {
    url: "",
    title: "Claim 1: Multiple Kickstands",
    description: "hort description in a sentence or two at most.",
  },
  {
    url: "",
    title: "Claim 1: Multiple Kickstands",
    description: "hort description in a sentence or two at most.",
  },
];
const accordionData = [
  {
    title: "Builtin Safeguards",
    desc: "hort description in a sentence or more, this time showing an expanded view below.",
  },
  {
    title: "Builtin Safeguards",
    desc: "hort description in a sentence or more, this time showing an expanded view below.",
  },
];
const accessoriesData = [
  {
    image: "/images/product/pannier.png",
    title: "Pannier Boxes",
    paragraph: "Short description in a sentence or two at most.",
  },
  {
    image: "/images/product/topbox.png",
    title: "Top Boxes",
    paragraph: "hort description in a sentence or two at most.",
  },
  {
    image: "/images/product/pannierbox.png",
    title: "Pannier Boxes",
    paragraph: "hort description in a sentence or two at most.",
  },
  {
    image: "/images/product/floorcage.png",
    title: "Floor Cage",
    paragraph: "hort description in a sentence or two at most.",
  },
  {
    image: "/images/product/mobileholder.png",
    title: "Mobile holder",
    paragraph: "hort description in a sentence or two at most.",
  },
];
const specificationData = [
  { title: "Range", desc: "132 kilometers per charge" },
  { title: "Charging time", desc: "6 Hours" },
  {
    title: "Carrying Capacity",
    desc: "20 kgs built-in + up to 260 kgs with optional RIO accessories.",
  },
  {
    title: "Wheels",
    desc: "14 on purpose-built alloys",
  },
];
const Product = () => {
  return (
    <>
      {/* header and hero */}
      <section className="w-full">
        <div className="absolute z-20 w-full">
          <div className="w-full text-center font-[14px] font-sohneBuch leading-11 bg-blue-86 text-blue-19 py-[11px] lg:hidden">
            Preorder Indie Now
          </div>
          <Header />
        </div>
        <div className="hidden lg:flex">
          <Image
            src="/images/product/desktopbanner.png"
            fill
            alt="headerLogo"
            className="relative w-full h-screen"
          />
        </div>
        <div className="lg:hidden">
          <Image
            src="/images/product/mobilebanner.png"
            fill
            alt="headerLogo"
            className="relative w-full h-full"
          />
        </div>
      </section>
      <main>
        {/* introduction to indie */}
        <IntroductionToIndie />
        {/* introduction to inde desktop */}
        <Introduction />
        {/* inde description */}
        <IndeDescription />
        {/* river products */}
        <RiverProducts />
        {/* product carousel */}

        {/* <ProductCarousel /> */}

        {/* versatility section */}
        <Versatility claimCards={claimCards} />
        {/* bike image */}
        <CommonImage
          alt="bike"
          smallImage="/images/product/mobilebike.png"
          largeImage="/images/product/desktopbike.png"
        />
        {/* comfort features blue */}
        <Features
          feature="Design Features"
          title="(Small-title)"
          claimCards={claimCards}
          accordionData={accordionData}
          textColor={TextColor["blue-86"]}
          backgroundColor={BackgroundColor["blue-19"]}
        />
        {/* comfort feature white */}
        <Features
          feature="Comfort Features"
          title="(Small-title)"
          claimCards={claimCards}
          accordionData={accordionData}
          textColor={TextColor["blue-37"]}
        />
        {/* video section */}
        <CommonImage
          alt="bikevideo"
          smallImage="/images/product/mobilevideo.png"
          largeImage="/images/product/desktopvideo.png"
        />
        {/* accesories */}
        <Accessories title=" Accessories" accessoriesData={accessoriesData} />
        {/* warenty section */}
        <Warenty />
        {/* image section */}
        <CommonImage
          alt="helmet"
          smallImage="/images/product/mobilehelmet.png"
          largeImage="/images/product/desktophelmet.png"
        />
        {/* specification */}
        <Specification specificationData={specificationData} />
        {/* pricing and preorder */}
        <PricingPreorder />
      </main>
      <Footer />
    </>
  );
};

export default Product;
