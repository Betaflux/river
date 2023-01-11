import React from "react";

interface IInput {
  placeholder: string;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: any;
  error?: string;
  label?: string;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}
const Input = ({
  placeholder,
  type = "text",
  handleChange,
  value,
  name,
  error,
  label,
  inputStyle = {},
  labelStyle = {},
}: IInput) => (
  <div
    className={`w-full p-4 border-2 ${
      error ? "border-red-600" : "border-black"
    }`}
  >
    {label && (
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
    )}
    <input
      className="w-full px-1 focus:outline-none text-lg leading-[25px]"
      type={type}
      name={name}
      autoComplete="off"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleChange}
      style={inputStyle}
    />
  </div>
);
export default Input;
