import ctl from "@netlify/classnames-template-literals";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../commonComponents/Button";
import Input from "../commonComponents/Input";
import {
  BackgroundColor,
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";
import handleValidation from "../utils/commonFunctions/validation";
import Footer from "./Footer";
import Header from "./Header";

const SignIn = () => {
  const initialState = {
    value: "",
    error: "",
  };
  const router = useRouter();
  const [email, setEmail] = useState(initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    setValue: Dispatch<SetStateAction<any>>
  ) => {
    const { value } = e.target;
    const error = handleValidation(value, name);
    setValue({ value, error });
  };
  const fontsize = ctl(
    `text-10xl leading-11 md:text-11xl md:leading-[30px] lg:text-12xl lg:leading-12`
  );
  return (
    <div>
      {/* header */}
      <Header />
      <main className="px-5 lg:px-[385px] md:px-[156] padding-top-bottom">
        <div className={`font-sohneHalbfett ${fontsize} text-blue-61`}>
          Sign in to your River Account
        </div>
        <div
          className={`font-sohneBuch  ${fontsize} text-blue-61 mb-[25px] mt-5`}
        >
          Enter your email address or phone number and we’ll send you an instant
          access link.
        </div>
        <div className="mb-[30px] border-1 border-blue-19 bg-white">
          <Input
            name="signIn"
            type="text"
            label="Email or Number"
            error={email?.error}
            value={email.value}
            placeholder="Email or Number"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "email", setEmail)
            }
          />
        </div>
        <div className="text-center lg:text-left md:hidden">
          <Button
            variant={Variant.primary}
            size={Size.medium}
            disabled={false}
            backGroundColor={BackgroundColor["yellow-86"]}
            color={TextColor["blue-19"]}
            hoverTextColor={HoverTextColor["yellow-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
            handleClick={() => {
              router.push("/preorder");
            }}
          >
            Send Link
          </Button>
        </div>
        <div className="text-center lg:text-left hidden md:flex">
          <Button
            variant={Variant.primary}
            size={Size.small}
            disabled={false}
            backGroundColor={BackgroundColor["yellow-86"]}
            color={TextColor["blue-19"]}
            hoverTextColor={HoverTextColor["yellow-86"]}
            hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
            handleClick={() => {
              router.push("/preorder");
            }}
          >
            Send Link
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
