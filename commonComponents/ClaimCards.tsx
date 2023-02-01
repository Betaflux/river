import React from "react";

interface IClaimCards {
  title?: string;
  subtitle?: string;
  description?: string;
  outro?: string;
}

const ClaimCards = ({ title, subtitle, description, outro }: IClaimCards) => {
  return (
    <div>
      {title && (
        <div className="text-blue-37 font-manukaBold font-semibold text-13xl leading-13 mb-2 lg:mb-6">
          {title}
        </div>
      )}
      {subtitle && (
        <div className="text-blue-37 body-text font-sohneHalbfett font-semibold mb-2 lg:mb-6">
          {subtitle}
        </div>
      )}
      {description && (
        <div className="text-blue-37 font-sohneBuch font-normal body-text mb-2 lg:mb-6">
          {description}
        </div>
      )}
      {outro && (
        <div className="hidden lg:flex text-blue-37 font-sohneBuch font-normal body-text">
          {outro}
        </div>
      )}
    </div>
  );
};

export default ClaimCards;
