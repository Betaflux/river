import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../commonComponents/Button";
import Input from "../commonComponents/Input";
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

const preOrderUpdates = [
  {
    label: "Email+Sms",
    value: "Email+Sms",
  },
  {
    label: "phone+Sms",
    value: "phone+Sms",
  },
];
const Details = () => {
  const initialState = {
    value: "",
    error: "",
  };
  const [email, setEmail] = useState<IInitialState>(initialState);
  const [phone, setPhone] = useState<IInitialState>(initialState);
  const [radio, setRadio] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    setValue: Dispatch<SetStateAction<any>>
  ) => {
    const { value } = e.target;
    const error = handleValidation(value, name);
    setValue({ value, error });
  };
  return (
    <div className="bg-blue-86">
      <Header />
      <Input
        name="email"
        type="email"
        error={email.error}
        value={email.value}
        placeholder="Email"
        handleChange={(e) => handleChange(e, "email", setEmail)}
      />
      <Input
        name="phone"
        type="text"
        error={phone.error}
        value={phone.value}
        placeholder="Number"
        handleChange={(e) => handleChange(e, "phone", setPhone)}
      />
      <Button
        variant={Variant.secondaryDark}
        size={Size.medium}
        disabled={false}
        backGroundColor={BackgroundColor["yellow-86"]}
        color={TextColor["blue-19"]}
        hoverTextColor={HoverTextColor["yellow-19"]}
        hoverBackgroundColor={HoverBackgroundColor["blue-19"]}
        handleClick={() => {
          console.log("working");
        }}
      >
        Preorder Indie Online
      </Button>
      {preOrderUpdates.map((e) => {
        return (
          <Radio
            key={e.value}
            name="preOrderUpdates"
            label={e.label}
            value={e.value}
            disabled={false}
            selected={radio}
            handleChange={() => setRadio(e.value)}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Details;
