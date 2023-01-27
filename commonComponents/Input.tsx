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
    className={`w-full bg-transparent lg:bg-white p-4 lg:px-4 lg:py-7 border-1 ${
      error ? "border-red-600" : "border-blue-19"
    }`}
  >
    {label && (
      <label
        htmlFor={name}
        style={labelStyle}
        className="text-blue-61 pl-3.5 text-sm leading-11"
      >
        {label}
      </label>
    )}
    <input
      className="w-full appearance-none focus:outline-none focus:ring-0 focus:ring-transparent border-none text-blue-19 bg-transparent text-lg leading-11 lg:text-12xl lg:leading-12"
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
