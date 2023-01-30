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
    <section className="px-5 mb-[63px] lg:px-10 lg:mb-[190px] lg:pt-[30px]">
      <div className="flex flex-col lg:flex-row pt-[30px] md:border-t-1 md:border-blue-37">
        <div className="w-full lg:w-1/3">
          <div className="font-sohneHalbfett  sticky top-0 text-blue-37 text-10xl leading-11 mb-[22px] lg:text-12xl lg:leading-12 lg:mb-0">
            {/* 1/3:Contact Details */}
            {title}
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:gap-10">
          {formData.map((ele) => {
            return (
              <div className="w-full">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreOrderForm;
