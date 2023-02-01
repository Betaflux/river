import Image from "next/image";
import React from "react";

import {
  BackgroundColor,
  TextColor,
} from "../utils/commonFunctions/commonTypes";
import Footer from "./Footer";
import Header from "./Header";
import Versatility from "./Versatility";
import CommonImage from "../commonComponents/CommonImage";
import Features from "../commonComponents/Features";
import Accessories from "./Accessories";
import Specification from "./Specification";
import PricingPreorder from "./PricingPreorder";
import RiverProducts from "./RiverProducts";
import Warranty from "./Warranty";
import Carousel from "../commonComponents/Carousel";
import ProductDescription from "./ProductDescription";
import MenuBar from "../commonComponents/MenuBar";
// import Carousel from "../commonComponents/Carousel";

const claimCards = [
  {
    url: "/images/product/frontstorage.png",
    title: "Front Storage 12L",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
  {
    url: "/images/product/backstorage.png",
    title: "Back Storage 43L",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
  {
    url: "/images/product/seatholder.png",
    title: "Quick Utility Mounts - Pannier",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
  {
    url: "/images/product/grabhandle.png",
    title: "Quick Utility Mounts - Grab Handle",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
  {
    url: "/images/product/footpegs.png",
    title: "Foot Pegs",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
];
const designFeature = [
  {
    url: "/images/product/headlight.png",
    title: "Dual Headlights",
    description:
      "More visibility and light throw Unique design identity, design language",
  },
  {
    url: "/images/product/lamp.png",
    title: "Tail Lamp",
    description: "Short description in a sentence or two at most.",
  },
  {
    url: "/images/product/handlebar.png",
    title: "Aluminium Clip-on Handlebars",
    description:
      "Short description in a sentence, two, three with points maybe at most.",
  },
  {
    url: "/images/product/safeguard.png",
    title: "Builtin Safeguards",
    description: "Short description in a sentence or two at most.",
  },
  {
    url: "/images/product/safeguard.png",
    title: "Builtin Safeguards",
    description: "Short description in a sentence or two at most.",
  },
];
const comfortFeature = [
  {
    url: "/images/product/widerseat.png",
    title: "Wider Comfortable Seat",
    description: "hort description in a sentence or two at most.",
  },
  {
    url: "/images/product/wheels.png",
    title: "14 Wheels",
    description:
      "Superior architecture to give better control over rough roads and potholes.",
  },
  {
    url: "/images/product/suspension.png",
    title: "Dual Suspension",
    description: "Better Balance, Made for rugged conditions",
  },
  {
    url: "/images/product/footpegs.png",
    title: "15-inch Wide Flat Footboard",
    description: "hort description in a sentence or two at most.",
  },
  {
    url: "/images/product/footpegs.png",
    title: "15-inch Wide Flat Footboard",
    description: "hort description in a sentence or two at most.",
  },
];
// const accordionData = [
//   {
//     title: "Builtin Safeguards",
//     desc: "hort description in a sentence or more, this time showing an expanded view below.",
//   },
//   {
//     title: "Builtin Safeguards",
//     desc: "hort description in a sentence or more, this time showing an expanded view below.",
//   },
// ];
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
      <section className="w-full relative">
        <div className="absolute z-50 w-full">
          <Header />
        </div>
        <div className="px-5 font-manukaUltra absolute z-20 w-full bottom-5 text-blue-98 text-13xl leading-13 lg:bottom-10  lg:px-10 lg:text-14xl lg:leading-14">
          <div>SUV OF</div>
          <div>SCOOTERS</div>
        </div>
        <div className="hidden lg:flex">
          <Image
            src="/images/product/desktopbanner.png"
            fill
            quality={100}
            alt="headerLogo"
            className="relative w-full h-screen"
          />
        </div>
        <div className="lg:hidden">
          <Image
            src="/images/product/mobilebanner.png"
            fill
            quality={100}
            alt="headerLogo"
            className="relative w-full h-full"
          />
        </div>
      </section>
      <main>
        {/* introduction to indie mobile only */}
        {/* <ProductInformation /> */}
        {/* introduction to inde desktop */}
        <MenuBar />
        {/* inde description */}
        <div className="lg:hidden">
          <ProductDescription description="" />
        </div>
        <div className="hidden lg:flex">
          <ProductDescription description="Hero-line: A single-sentence description of INDIE" />
        </div>
        {/* river products */}
        <RiverProducts />
        {/* product carousel */}

        <Carousel />

        {/* versatility section */}
        <Versatility claimCards={claimCards} />
        {/* bike image */}
        <CommonImage
          alt="bike"
          smallImage="/images/product/bluescootymobile.png"
          largeImage="/images/product/bluescooty.png"
        />
        {/* comfort features blue */}
        <Features
          feature="Design Features"
          title="(Single-sentence-title)"
          claimCards={designFeature}
          textColor={TextColor["blue-86"]}
          backgroundColor={BackgroundColor["blue-19"]}
        />
        {/* comfort feature white */}
        <Features
          feature="Comfort Features"
          title="(Single-sentence-title)"
          claimCards={comfortFeature}
          textColor={TextColor["blue-37"]}
        />
        {/* video section */}
        <CommonImage
          alt="bikevideo"
          smallImage="/images/product/yellowscootymobile.png"
          largeImage="/images/product/yellowscootydesktop.png"
        />
        {/* accesories */}
        <Accessories title=" Accessories" accessoriesData={accessoriesData} />
        {/* warenty section */}
        <Warranty />
        {/* image section */}
        <CommonImage
          alt="helmet"
          smallImage="/images/product/rxmobile.png"
          largeImage="/images/product/rxdesktop.png"
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
