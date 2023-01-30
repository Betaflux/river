import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import { useRouter } from "next/router";
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
const fontsize = ctl(
  `text-10xl leading-11 md:text-11xl md:leading-[30px] lg:text-12xl lg:leading-12`
);
const PreOrder = () => {
  const router = useRouter();
  return (
    <div className="bg-blue-86">
      {/* header */}
      <Header />
      {/* preorder inde text */}
      <section className="w-full px-5 py-[100px] lg:px-10 lg:py-[200px]">
        <div className={ultraBold}>Preorder</div>
        <div className={ultraBold}>INDIE</div>
      </section>
      {/* select color */}
      <section className="px-5 lg:px-10 mb-[78px] lg:mb-[200px]">
        <div className="w-full flex flex-col-reverse lg:flex-row lg:gap-2.5">
          <div className="w-full lg:w-2/3">
            {" "}
            <div className="flex flex-col gap-2.5">
              {images.map((ele) => {
                return (
                  <div key={ele.url} className="relative  w-full">
                    <Image
                      src={ele.url}
                      quality={100}
                      fill
                      alt="products"
                      className="relative w-full h-full "
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="sticky top-0 mb-[50px] lg:mb-0">
              {/* color */}
              <div className="flex flex-col gap-4">
                <div className={`${fontsize} font-sohneBuch text-blue-19`}>
                  Select Colour
                </div>
                <div className="flex gap-5">
                  <div className="bg-red-61 w-[55px] h-[55px] lg:w-[95px] lg:h-[95px] rounded-full" />
                  <div
                    className="bg-blue-37 w-[55px] h-[55px] lg:w-[95px] lg:h-[95px] 
                  rounded-full outline -outline-offset-[5px] outline-[5px] 
                  lg:-outline-offset-[10px] lg:outline-[10px] outline-blue-19 
                  flex items-center justify-center"
                  >
                    1
                  </div>
                  <div className="bg-yellow-86 w-[55px] h-[55px] lg:w-[95px]  lg:h-[95px] rounded-full" />
                </div>
                <div className={`${fontsize} font-sohneBuch text-blue-61`}>
                  Selected: Rio Blue
                </div>
              </div>
              {/* preorder button */}
              <div className="mt-[97px] hidden lg:flex flex-col">
                <div>
                  <Button
                    variant={Variant.primary}
                    size={Size.medium}
                    disabled={false}
                    backGroundColor={BackgroundColor["yellow-86"]}
                    color={TextColor["yellow-19"]}
                    hoverTextColor={HoverTextColor["yellow-86"]}
                    hoverBackgroundColor={HoverBackgroundColor["yellow-19"]}
                    handleClick={() => {
                      router.push("/paymentdetails");
                    }}
                  >
                    Preorder for Rs. 2,500
                  </Button>
                </div>
                <div
                  className={`${fontsize} text-blue-37 font-sohneBuch  mt-5`}
                >
                  Ex. Showroom Price, Bangalore starts at Rs. 1,25,000
                </div>
                <div
                  className={`${fontsize} text-blue-37 font-sohneBuch  mt-5 underline underline-offset-8 cursor-pointer`}
                >
                  View Price Breakup
                </div>
              </div>
            </div>
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
              router.push("/paymentdetails");
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
