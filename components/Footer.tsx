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
    <footer className="flex flex-col-reverse md:flex-col w-full bg-blue-37">
      {/* contents  for desktop */}
      <div className="hidden mt-24 md:grid grid-cols-6 lg:grid-cols-12 gap-x-5 px-10 font-normal">
        {footerData?.map((items) => {
          return (
            <div key={items.title} className="col-span-2">
              <div className="font-sohneHalbfett leading-[30px] lg:leading-12 text-red-98 text-11xl lg:text-12xl mb-5">
                {items.title}
              </div>
              <div className="flex flex-col gap-5">
                {items.contents.map((contents) => {
                  return (
                    <Link
                      href={contents.path}
                      key={contents.path}
                      className="font-sohneBuch text-red-98  leading-[30px] text-11xl lg:leading-12 lg:text-12xl"
                    >
                      {contents.links}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* river pvt ltd for mobile */}
      <div className="md:hidden font-normal font-sohneBuch  text-red-98 text-10xl text-left px-5 mt-[60px] pb-[90px]">
        <div>© 2023 World of River Pvt. Ltd.</div>
        <div className="w-full mt-11">
          <div className="font-sohneHalbfett font-normal text-red-98 text-10xl leading-11">
            World Of River Private Limited
          </div>
          <div className="font-sohneBuch leading-11 text-red-98 text-10xl  font-normal">
            <div>Cin: U34300KA2020PTC142304</div> Registered Office: No. 25/3,
            KIADB EPIP Zone,Seetharampalya-Hoodi RoadMahadevapura, Whitefield
            Bengaluru 560048 <div>Email: info@rideriver.com</div>
            <div> Phone No: 9876543210</div>
          </div>
        </div>
      </div>
      {/* contents for mobile view */}
      <div className="px-5 md:hidden flex justify-between flex-wrap font-normal text-red-98">
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

      <div className="w-full flex flex-col relative md:mt-[91px]">
        {/* river pvt ltd */}
        <div className="hidden w-full md:grid md:grid-cols-6 lg:grid-cols-12 px-10 absolute z-10 ">
          <div className="col-start-1 font-normal col-end-4 lg:col-end-6 font-sohneBuch text-red-98 text-11xl leading-[30px] lg:text-12xl lg:leading-12">
            © 2023 World of River Pvt. Ltd.
          </div>
          <div className="col-start-4 col-end-7 lg:col-start-7 lg:col-end-12">
            <div className="font-sohneHalbfett font-normal text-red-98 text-11xl leading-[30px] lg:text-12xl lg:leading-12">
              World Of River Private Limited
            </div>
            <div className="font-sohneBuch leading-[30px] text-red-98 text-11xl lg:text-12xl lg:leading-12 font-normal">
              <div>Cin: U34300KA2020PTC142304</div> Registered Office: No. 25/3,
              KIADB EPIP Zone,Seetharampalya-Hoodi RoadMahadevapura, Whitefield
              Bengaluru 560048 <div>Email: info@rideriver.com</div>
              <div> Phone No: 9876543210</div>
            </div>
          </div>
        </div>
        {/* river logo div */}
        <div className="w-full md:mt-[170px] lg:mt-[150px]">
          <div className="hidden w-full md:flex">
            <Image
              src="/images/footer/footerLogo.png"
              fill
              alt="footerLogo"
              quality={100}
              className="relative w-full h-full"
            />
          </div>
          <div className="w-full md:hidden">
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
