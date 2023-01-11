import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../commonComponents/Button";
import Input from "../commonComponents/Input";
import Radio from "../commonComponents/Radio";


import handleValidation from "../utils/commonFunctions/validation";

interface IInitialState {
  value: string;
  error: string;
}


const radioBtn = [
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
    <div>
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
        variant="secondary"
        disabled={false}
        handleClick={() => {
          console.log("working");
        }}
      >
        Pay Rs. 2500 to Preorder
      </Button>
      <div>
        <h1>working</h1>
      </div>
      {radioBtn.map((e) => {
        return (
          <Radio
            key={e.value}
            name="radiobtn"
            label={e.label}
            value={e.value}
            disabled={false}
            selected={radio}
            handleChange={() => setRadio(e.value)}
          />
        );
      })}
    </div>
  );
};

export default Details;
