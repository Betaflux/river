import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import Button from "../commonComponents/Button";
import {
  BackgroundColor,
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";
import Footer from "./Footer";
import Header from "./Header";
import PreOrderQuestions from "./PreOrderQuestions";

const accordionData = [
  {
    title: "Builtin Safeguards1",
    desc: "hort description in a sentence or more, this time showing an expanded view below.",
  },
  {
    title: "Builtin Safeguards2",
    desc: "hort description in a sentence or more, this time showing an expanded view below.",
  },
  {
    title: "Builtin Safeguards3",
    desc: "hort description in a sentence or more, this time showing an expanded view below.",
  },
];

export const ultraBold = ctl(
  `text-blue-37 font-manukaUltra uppercase  text-13xl leading-13 lg:text-14xl lg:leading-14`
);
const images = [
  { url: "/images/preorder/color1.png" },
  { url: "/images/preorder/color2.png" },
  { url: "/images/preorder/color3.png" },
];
const PreOrder = () => {
  return (
    <div className="bg-blue-86">
      {/* header */}
      <Header />
      {/* preorder inde text */}
      <section className="w-full px-5 py-[88px] lg:px-10 lg:py-[135px]">
        <div className={ultraBold}>Preorder</div>
        <div className={ultraBold}>INDIE</div>
      </section>
      {/* select color */}
      <section className="px-5 lg:px-10 mb-[78px] lg:mb-[200px]">
        <div className="w-full flex flex-col gap-11 lg:gap-8">
          <div className="sticky z-30 top-0">
            <div className="text-10xl text-blue-19 font-sohneBuch leading-11 mb-[14px] lg:mb-[32px] lg:text-12xl lg:leading-12">
              Select Colour
            </div>

            <div className="flex justify-between ">
              <div className="w-2/3 flex flex-col gap-3.5 lg:gap-8">
                {" "}
                <div className="w-full flex flex-row gap-5">
                  <div className="bg-red-61 w-[55px] h-[55px] cursor-pointer lg:w-[210px] lg:h-[98px]" />
                  <div className="bg-blue-37 w-[55px] h-[55px] cursor-pointer lg:w-[210px] lg:h-[98px] flex justify-center items-center">
                    <Image
                      className="hidden lg:flex"
                      src="/images/preorder/checked.svg"
                      alt="checked"
                      width={55}
                      height={55}
                    />
                    <Image
                      className="lg:hidden"
                      src="/images/preorder/checked.svg"
                      alt="checked"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="bg-yellow-86 w-[55px] h-[55px] cursor-pointer lg:w-[210px] lg:h-[98px]" />
                </div>
                <div className="text-10xl text-blue-61 font-sohneBuch leading-11 lg:text-12xl lg:leading-12">
                  Selected: Rio Blue
                </div>
              </div>
              <div className="w-1/3 hidden lg:flex flex-col">
                <div className="mb-[26px] ">
                  <Button
                    variant={Variant.primary}
                    size={Size.small}
                    disabled={false}
                    backGroundColor={BackgroundColor["blue-37"]}
                    hoverBackgroundColor={HoverBackgroundColor.disabled}
                    hoverTextColor={HoverTextColor.disabled}
                    color={TextColor["blue-98"]}
                    handleClick={() => {
                      console.log("");
                    }}
                  >
                    Preorder for Rs. 2,500
                  </Button>
                </div>
                <div className="">
                  <div className="text-blue-37 w-4/5  text-10xl leading-11 lg:text-12xl lg:leading-12 font-sohneBuch">
                    Ex. Showroom Price, Bangalore starts at Rs. 1,25,000
                  </div>
                  <div className="text-blue-37 underline underline-offset-8 text-10xl leading-11 lg:text-12xl lg:leading-12 font-sohneBuch">
                    View Price Breakup
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {images.map((ele) => {
              return (
                <div key={ele.url} className="relative  w-full">
                  <Image
                    src={ele.url}
                    fill
                    alt="products"
                    className="relative w-full h-full "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* showroom price mobile only */}
      <div className="w-full flex flex-col gap-[20px] pb-[100px] px-5 lg:hidden">
        <div className="w-full mb-[70px]">
          <div className="text-blue-37  mb-[20px] font-sohneBuch text-10xl leading-11 w-4/5 ">
            Ex. Showroom Price, Bangalore starts at{" "}
            <span className="font-sohneHalbfett">Rs. 1,25,000</span>
          </div>
          <div className="text-blue-37 cursor-pointer underline underline-offset-4 font-sohneBuch text-10xl leading-11">
            View Price Breakup
          </div>
        </div>
        <div className="w-full text-center">
          <Button
            variant={Variant.primary}
            size={Size.medium}
            disabled={false}
            backGroundColor={BackgroundColor["yellow-86"]}
            color={TextColor["blue-19"]}
            hoverTextColor={HoverTextColor["yellow-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
            handleClick={() => {
              console.log("working");
            }}
          >
            Preorder Indie Online
          </Button>
        </div>
      </div>
      {/* Preorder questions */}
      <PreOrderQuestions accordionData={accordionData} />
      <Footer />
    </div>
  );
};

export default PreOrder;
