import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../commonComponents/Button";
import PreOrderForm from "../commonComponents/PreOrderForm";
import Radio from "../commonComponents/Radio";
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

interface IInitialState {
  value: string;
  error: string;
}
interface IFormData {
  name: string;
  type: string;
  label: string;
  error: any;
  value: any;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PaymentDetails = () => {
  const initialState = {
    value: "",
    error: "",
  };
  const [username, setUserName] = useState<IInitialState>(initialState);
  const [email, setEmail] = useState<IInitialState>(initialState);
  const [confirmEmail, setConfirmEmail] = useState<IInitialState>(initialState);
  const [phone, setPhone] = useState<IInitialState>(initialState);
  const [pinCode, setPinCode] = useState<IInitialState>(initialState);
  const [city, setCity] = useState<IInitialState>(initialState);
  const [addressOne, setAddressOne] = useState<IInitialState>(initialState);
  const [addressTwo, setAddressTwo] = useState<IInitialState>(initialState);
  const [state, setState] = useState<IInitialState>(initialState);
  const [notifications, setNotifications] = useState<string>("");
  const [privacypolicy, setPrivacyPolicy] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    setValue: Dispatch<SetStateAction<any>>
  ) => {
    const { value } = e.target;
    const error = handleValidation(value, name);
    setValue({ value, error });
  };

  const contactDetails: IFormData[] = [
    {
      name: "name",
      type: "text",
      label: "Name",
      error: username.error,
      value: username.value,
      placeholder: "Name",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "name", setUserName),
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      error: email.error,
      value: email.value,
      placeholder: "Email",
      handleChange: (e: any) => handleChange(e, "email", setEmail),
    },
    {
      name: "confirmEmail",
      type: "email",
      label: "Confirm Email",
      error: confirmEmail.error,
      value: confirmEmail.value,
      placeholder: "Confirm Email",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "confirmEmail", setConfirmEmail),
    },
    {
      name: "phone",
      type: "number",
      label: "Number",
      error: phone.error,
      value: phone.value,
      placeholder: "Phone",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "phone", setPhone),
    },
  ];
  const shippingDetails: IFormData[] = [
    {
      name: "pincode",
      type: "number",
      label: "Pincode",
      error: pinCode.error,
      value: pinCode.value,
      placeholder: "Pincode",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "pincode", setPinCode),
    },
    {
      name: "city",
      type: "text",
      label: "Cityname",
      error: city.error,
      value: city.value,
      placeholder: "Cityname",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "city", setCity),
    },
  ];
  const billingDetails: IFormData[] = [
    {
      name: "addressone",
      type: "text",
      label: "Address Line 1",
      error: addressOne.error,
      value: addressOne.value,
      placeholder: "Address Line 1",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "addressone", setAddressOne),
    },
    {
      name: "addresstwo",
      type: "text",
      label: "Address Line 2",
      error: addressTwo.error,
      value: addressTwo.value,
      placeholder: "Address Line 2",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "addresstwo", setAddressTwo),
    },
    {
      name: "pincode",
      type: "number",
      label: "Pincode",
      error: pinCode.error,
      value: pinCode.value,
      placeholder: "Pincode",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "pincode", setPinCode),
    },
    {
      name: "city",
      type: "text",
      label: "Cityname",
      error: city.error,
      value: city.value,
      placeholder: "Cityname",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "city", setCity),
    },
    {
      name: "state",
      type: "text",
      label: "State",
      error: state.error,
      value: state.value,
      placeholder: "State",
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e, "state", setState),
    },
  ];
  const preOrderUpdates = [
    {
      label: "Email + SMS",
      value: "email+sms",
    },
    {
      label: "Email only",
      value: "emailonly",
    },
    {
      label: "SMS only",
      value: "smsonly",
    },
  ];
  const ultraBold = ctl(
    `text-blue-37 font-manukaUltra uppercase  text-13xl leading-13 lg:text-14xl lg:leading-14`
  );
  const title = ctl(
    `font-sohneBuch text-blue-86 text-10xl leading-11 lg:text-12xl lg:leading-12`
  );
  const option = ctl(
    `font-sohneHalbfett text-blue-86 text-10xl leading-11 lg:text-12xl lg:leading-12`
  );
  return (
    <div className="bg-blue-86">
      {/* Header */}
      <Header />
      {/* preorder Inde text */}
      <section className="w-full px-5 py-[100px] lg:px-10 lg:py-[200px]">
        <div className="text-blue-37 text-10xl leading-11 lg:text-12xl lg:leading-12 font-sohneBuch">
          Preordering Indie
        </div>
        <div className={ultraBold}>PAYMENT</div>
        <div className={ultraBold}>DETAILS</div>
      </section>
      {/* contact details */}
      <PreOrderForm title="1/3:Contact Details" formData={contactDetails} />
      {/* billing details */}
      <PreOrderForm title="2/3:Billing Details" formData={billingDetails} />
      {/* Shipping Address */}
      <PreOrderForm title="3/3:Shipping Details" formData={shippingDetails} />
      {/* confirm booking information */}
      <section className="bg-blue-19 flex flex-col px-5 py-[100px] lg:px-10 lg:flex-row lg:gap-5 lg:py-[200px]">
        <div className="w-full lg:w-1/4">
          <div className="w-1/3 font-manukaBold text-blue-86 mb-[45px] text-13xl leading-13 lg:w-full  lg:mb-[93px]">
            Confirm Booking Information
          </div>

          <div className="relative mb-[25px] lg:hidden">
            <Image
              src="/images/paymentdetails/scooter.png"
              alt="scooter"
              quality={100}
              fill
              className="relative w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="w-full lg:w-2/3">
            {/* booking information */}
            <div>
              <div className="relative mb-[25px] hidden lg:flex">
                <Image
                  src="/images/paymentdetails/scooter.png"
                  alt="scooter"
                  quality={100}
                  fill
                  className="relative w-full"
                />
              </div>
            </div>
            {/* colour */}
            <div className="pb-[25px] lg:pb-[33px] border-b-1 border-blue-86">
              <div className="hidden md:flex flex-col">
                <div className={title}>Colour</div>
                <div className="flex flex-row justify-between items-center">
                  <div className={option}>RIO Blue</div>
                  <div
                    className={`${title} underline underline-offset-8 cursor-pointer`}
                  >
                    Change
                  </div>
                </div>
              </div>
              {/* mobile view */}
              <div className="md:hidden">
                <div className={title}>Colour: RIO Blue</div>
                <div
                  className={`${title} underline underline-offset-8 cursor-pointer`}
                >
                  Change
                </div>
              </div>
            </div>
            {/* Booking id and date */}
            <div className="pb-[25px] lg:pb-[33px] border-b-1 border-blue-86">
              <div className="mt-[25px] lg:mt-[33px] border-b-1 border-blue-86 pb-[25px] lg:border-none lg:pb-0">
                <div className={title}>Booking ID</div>
                <div className={option}>RIO 345609</div>
              </div>
              <div className="mt-[25px] lg:mt-[33px]">
                <div className={title}>Booking Date, Time</div>
                <div className={option}>26 December 2022</div>
                <div className={option}>12:42PM</div>
              </div>
            </div>
            {/* Booking Amount */}
            <div className="pb-[25px] lg:pb-[33px] mt-[33px] border-b-1 border-blue-86">
              <div className={title}>Booking Amount</div>
              <div className={option}>Rs. 2500</div>
            </div>
            {/* preorder updates */}
            <div className="mt-[25px] lg:mt-[33px]  mb-[93px]">
              <div className="mb-[33px]">
                <div className={option}>Preorder Updates</div>
                <div className={title}>
                  How would you like to receive product- and delivery-related
                  updates?
                </div>
              </div>
              {/* radio buttons */}
              <div className="flex flex-col border-b-1 border-blue-86 pb-[33px] gap-3.5 lg:gap-2.5">
                {preOrderUpdates.map((e) => {
                  return (
                    <Radio
                      key={e.value}
                      name="preOrderUpdates"
                      label={e.label}
                      value={e.value}
                      disabled={false}
                      selected={notifications}
                      handleChange={() => setNotifications(e.value)}
                    />
                  );
                })}
              </div>
              {/* checkbox */}
              <div className="mt-[33px] flex flex-row gap-[39px] items-start">
                <div>
                  <input
                    className="form-checkbox focus:ring-0 w-[30px] h-[30px] bg-transparent border-2 border-blue-86"
                    type="checkbox"
                    checked={privacypolicy}
                    name="privacypolicy"
                    onChange={() => setPrivacyPolicy(!privacypolicy)}
                  />
                </div>
                <div className={title}>
                  I have read and I agree to the RIVER Terms and Conditions and
                  Privacy Policy
                </div>
              </div>
            </div>
            {/* preorder button */}
            <div className="text-center lg:text-left">
              <div className="hidden lg:flex">
                <Button
                  variant={Variant.primary}
                  size={Size.small}
                  disabled={false}
                  backGroundColor={BackgroundColor["blue-86"]}
                  hoverBackgroundColor={HoverBackgroundColor.disabled}
                  color={TextColor["blue-19"]}
                  hoverTextColor={HoverTextColor.disabled}
                  handleClick={() => {
                    console.log("");
                  }}
                >
                  Pay Rs 2500 to preorder
                </Button>
              </div>
              <div className="lg:hidden">
                <Button
                  variant={Variant.primary}
                  size={Size.small}
                  disabled={false}
                  backGroundColor={BackgroundColor["yellow-86"]}
                  hoverBackgroundColor={HoverBackgroundColor.disabled}
                  color={TextColor["blue-19"]}
                  hoverTextColor={HoverTextColor.disabled}
                  handleClick={() => {
                    console.log("");
                  }}
                >
                  Pay Rs 2500 to preorder
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="lg:hidden">
        <Footer />
      </section>
    </div>
  );
};

export default PaymentDetails;
