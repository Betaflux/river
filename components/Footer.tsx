import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerData = [
  { title: "Account", contents: [{ links: "Sign In", path: "/signin" }] },
  {
    title: "River",
    contents: [
      { links: "People", path: "/people" },
      { links: "Purpose", path: "/purpose" },
      { links: "Company", path: "/company" },
      { links: "Careers", path: "/careers" },
      { links: "Presskit", path: "/presskit" },
    ],
  },
  {
    title: "Products",
    contents: [
      { links: "RIO", path: "/rio" },
      { links: "Preorder RIO", path: "/preorderrio" },
      { links: "Scooter#2", path: "/scooter#2" },
      { links: "Accessories", path: "/accessories" },
      { links: "Subscription", path: "/subscription" },
    ],
  },
  {
    title: "Info",
    contents: [
      { links: "Blog + Newsletter", path: "/blog+newsletter" },
      { links: "Support", path: "/Support" },
      { links: "FAQs", path: "/faqs" },
    ],
  },
  {
    title: "Social",
    contents: [
      { links: "Instagram", path: "/instagram" },
      { links: "Facebook", path: "/facebook" },
      { links: "LinkedIn", path: "/linkedin" },
      { links: "EIIo", path: "/eiio" },
      { links: "GitHub", path: "/github" },
    ],
  },
  {
    title: "Legal",
    contents: [
      { links: "Terms", path: "/terms" },
      { links: "Privacy Policy", path: "/privacypolicy" },
      { links: "Return + Refunds", path: "return" },
    ],
  },
];
const footerDataMobile = [
  {
    title: "Products",
    contents: [
      { links: "RIO", path: "/rio" },
      { links: "Preorder RIO", path: "/preorderrio" },
      { links: "Scooter#2", path: "/scooter#2" },
      { links: "Accessories", path: "/accessories" },
      { links: "Subscription", path: "/subscription" },
    ],
  },
  {
    title: "Info",
    contents: [
      { links: "Blog + Newsletter", path: "/blog+newsletter" },
      { links: "Support", path: "/Support" },
      { links: "FAQs", path: "/faqs" },
    ],
  },
  {
    title: "Social",
    contents: [
      { links: "Instagram", path: "/instagram" },
      { links: "Facebook", path: "/facebook" },
      { links: "LinkedIn", path: "/linkedin" },
      { links: "EIIo", path: "/eiio" },
      { links: "GitHub", path: "/github" },
    ],
  },
  { title: "Account", contents: [{ links: "Sign In", path: "/signin" }] },
  {
    title: "River",
    contents: [
      { links: "People", path: "/people" },
      { links: "Purpose", path: "/purpose" },
      { links: "Company", path: "/company" },
      { links: "Careers", path: "/careers" },
      { links: "Presskit", path: "/presskit" },
    ],
  },
  {
    title: "Legal",
    contents: [
      { links: "Terms", path: "/terms" },
      { links: "Privacy Policy", path: "/privacypolicy" },
      { links: "Return + Refunds", path: "return" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="flex flex-col-reverse lg:flex-col w-full bg-blue-37">
      {/* contents  for desktop */}
      <div className="hidden mt-24 lg:grid grid-cols-6 px-10">
        {footerData?.map((items) => {
          return (
            <div key={items.title} className="flex flex-col gap-5">
              <div className="font-sohneHalbfett leading-[35px] text-red-98 text-12xl">
                {items.title}
              </div>
              {items.contents.map((contents) => {
                return (
                  <Link
                    href={contents.path}
                    key={contents.path}
                    className="font-sohneBuch text-red-98  leading-[25px] text-12xl"
                  >
                    {contents.links}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* river pvt ltd for mobile */}
      <div className="lg:hidden font-sohneBuch  text-red-98 text-10xl text-left px-5 mt-[60px] pb-[29px]">
        © 2022 World of River Pvt. Ltd.
      </div>
      {/* contents for mobile view */}
      <div className="px-5 lg:hidden flex justify-between flex-wrap  text-red-98">
        <div className="w-1/2">
          {footerDataMobile.slice(0, 3).map((items) => {
            return (
              <div
                key={items.title}
                className="flex flex-col gap-2.5 w-full h-fit underline underline-offset-4 mb-[40px]"
              >
                <div className="font-sohneHalbfett leadng-12 text-10xl">
                  {items.title}
                </div>
                {items.contents.map((contents) => {
                  return (
                    <Link
                      href={contents.path}
                      key={contents.path}
                      className="w-1/2 text-10xl leading-11 font-sohneBuch  sm:w-full"
                    >
                      {contents.links}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
          {footerDataMobile.slice(3, 6).map((items) => {
            return (
              <div
                key={items.title}
                className="flex flex-col gap-2.5 w-full h-fit underline underline-offset-4 mb-[40px]"
              >
                <div className=" font-sohneHalbfett leading-11 text-10xl">
                  {items.title}
                </div>
                {items.contents.map((contents) => {
                  return (
                    <Link
                      href={contents.path}
                      key={contents.path}
                      className="w-1/2 font-sohneBuch leading-11 text-10xl sm:w-full"
                    >
                      {contents.links}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* river logo */}
      <div className="hidden w-full lg:grid grid-cols-6">
        <div className="col-start-4 col-end-6 font-sohneBuch text-red-98 text-12xl  pt-[91px]">
          © 2022 World of River Pvt. Ltd.
        </div>
      </div>
      <div className="w-full flex flex-col ">
        {/* river pvt ltd */}
        {/* river logo div */}
        <div className="w-full">
          <div className="hidden w-full lg:flex">
            <Image
              src="/images/footer/footerLogo.png"
              fill
              alt="footerLogo"
              quality={100}
              className="relative w-full h-full"
            />
          </div>
          <div className="w-full lg:hidden">
            <Image
              src="/images/footer/footerLogoMobile.png"
              fill
              alt="footerLogo"
              quality={100}
              className="relative w-full h-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
