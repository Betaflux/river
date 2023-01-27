import React from "react";
import Input from "./Input";

interface IFormData {
  name: string;
  type: string;
  label: string;
  error: any;
  value: any;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface IPreOrderForm {
  title: string;
  formData: IFormData[];
}

const PreOrderForm = ({ title, formData }: IPreOrderForm) => {
  return (
    <section className="px-5 mb-[63px] lg:px-[270px] lg:mb-[190px]">
      <div className="font-sohneHalbfett text-blue-37 text-10xl leading-11 mb-[20px] lg:text-12xl lg:leading-12 lg:mb-[92px]">
        {/* 1/3:Contact Details */}
        {title}
      </div>
      <div className="flex flex-col gap-5 lg:gap-10">
        {formData.map((ele) => {
          return (
            <Input
              key={ele.name}
              name={ele.name}
              type={ele.type}
              label={ele.label}
              error={ele.error}
              value={ele.value}
              placeholder={ele.placeholder}
              handleChange={ele.handleChange}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PreOrderForm;
