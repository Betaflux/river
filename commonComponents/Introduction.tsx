import Link from "next/link";
import React from "react";

const indeItems = [
  { title: "Features", path: "/features" },
  { title: "Accessories", path: "/accessories" },
  { title: "Specs", path: "/specs" },
  { title: "Pricing", path: "/pricing" },
  { title: "Preorder", path: "/preorder" },
];
const Introduction = () => {
  return (
    <section className="w-full hidden lg:flex flex-row  px-10">
      <div className="w-1/2" />
      <div className="w-1/2 flex flex-row justify-between items-end">
        {indeItems.map((items) => {
          return (
            <Link
              href={items.path}
              className="text-blue-37 text-12xl leading-12"
            >
              {items.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;
