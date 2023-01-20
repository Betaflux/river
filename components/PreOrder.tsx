import Image from 'next/image';
import Button from '../commonComponents/Button';
import { BackgroundColor, HoverBackgroundColor, HoverTextColor, Size, TextColor, Variant } from '../utils/commonFunctions/commonTypes/commonTypes';
import Footer from './Footer';
import Header from './Header';
import PreOrderQuestions from './PreOrderQuestions';

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

const PreOrder = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* preorder inde text */}
      <section className="w-full px-5 py-[61px] lg:px-10 lg:py-[67px]">
        <div className="text-blue-37 font-manukaUltra uppercase italic text-13xl leading-13 lg:text-14xl lg:leading-14">
          Preorder
        </div>
        <div className="text-blue-37 font-manukaUltra uppercase italic text-13xl leading-13 lg:text-14xl lg:leading-14">
          INDIE
        </div>
      </section>
      {/* select color */}
      <section>
        {/* color */}
        <div className="flex flex-col gap-2.5 px-5 lg:px-10">
          <div className="font-sohneBuch text-blue-19 text-10xl leading-11 lg:text-12xl lg:leading-12">
            Select Colour
          </div>
          <div className="flex flex-row items-center">
            <div className="w-3/4 flex flex-row gap-4">
              <div className="w-[55px] h-[55px] lg:w-[210px] lg:h-[98px]  bg-red-61" />
              <div className="w-[55px] h-[55px] lg:w-[210px] lg:h-[98px]  bg-blue-19 flex justify-center items-center">
                <Image
                  src="/images/preorder/checked.svg"
                  alt="selected colour"
                  width={45}
                  height={30}
                />
              </div>
              <div className="w-[55px] h-[55px] lg:w-[210px] lg:h-[98px] bg-yellow-86" />
            </div>
            <div className="w-1/4 hidden lg:inline">
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
                Preorder for Rs. 2,500
              </Button>
            </div>
          </div>
          <div className="font-sohneBuch text-blue-61 text-10xl leading-11 lg:text-12xl lg:leading-12">
            Selected: <span>Rio Blue</span>
          </div>
        </div>
        {/* bike */}
        <div className="w-full flex flex-col px-5 py-[55px] lg:py-[100px] lg:px-10 lg:flex-row lg:gap-[20px]">
          <div className="w-full flex flex-col gap-[20px] lg:w-3/4">
            <div className="w-full">
              <Image
                src="/images/product/bike1.png"
                fill
                alt="bike"
                className="relative w-full h-auto"
              />
            </div>
            <div className="w-full flex gap-[20px]">
              <div className="w-1/2">
                <Image
                  src="/images/product/bike2.png"
                  fill
                  alt="bike"
                  className="relative w-full h-auto"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/product/bike3.png"
                  fill
                  alt="bike"
                  className="relative w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/images/product/bike4.png"
                fill
                alt="bike"
                className="relative w-full h-auto"
              />
            </div>
          </div>
          <div className="w-1/4 hidden lg:flex lg:flex-col">
            <div className="w-full">
              <div className="text-blue-37  mb-[20px] font-sohneBuch text-10xl leading-11 w-4/5 ">
                Ex. Showroom Price, Bangalore starts at{" "}
                <span className="font-sohneHalbfett">Rs. 1,25,000</span>
              </div>
              <div className="text-blue-37 cursor-pointer underline underline-offset-4 font-sohneBuch text-10xl leading-11">
                View Price Breakup
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* showroom price mobile only */}
      <div className="w-full flex flex-col gap-[20px] pb-[100px] px-5 lg:hidden">
        <div className="w-full mb-[45px]">
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
    </>
  );
}

export default PreOrder;