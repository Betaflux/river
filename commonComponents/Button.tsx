import ctl from "@netlify/classnames-template-literals";
import {
  BackgroundColor,
  BorderColor,
  HoverBackgroundColor,
  HoverTextColor,
  Size,
  TextColor,
  Variant,
} from "../utils/commonFunctions/commonTypes";

type ButtonType = JSX.IntrinsicElements["button"]["type"];

interface IButton {
  children: string | React.ReactNode;
  variant: Variant;
  disabled: boolean;
  type?: ButtonType;
  color?: TextColor;
  hoverTextColor?: HoverTextColor;
  backGroundColor?: BackgroundColor;
  borderColor?: BorderColor;
  hoverBackgroundColor?: HoverBackgroundColor;
  size?: Size;
  handleClick: () => void;
}
interface IButtonStyle {
  primary: string;
  secondaryDark: string;
  secondaryLight: string;
}
interface IButtonSize {
  small: string;
  medium: string;
  large: string;
}
const buttonStyle: string = ctl(`leadeing-[25px] outline-none
font-sohneBuch
text-10xl sm:text-11xl
`);

const buttonSize: IButtonSize = {
  small: `min-w-[60px]  py-[18px] px-[37.5px] sm:py-[20px]`,
  medium: `min-w-[280px]  py-[18px] px-[37.5px] sm:px-[37.5px] sm:py-[24px]`,
  large: `min-w-[280px]  py-[18px] px-[37.5] sm:px-[65px] sm:py-[20px]`,
};
const getbuttonType = (
  variant: string,
  color: string,
  hoverTextColor: HoverTextColor,
  backGroundColor: BackgroundColor,
  hoverBackgroundColor: HoverBackgroundColor,
  borderColor: BorderColor
): string => {
  console.log("backGroundColor", backGroundColor);

  const buttonType: IButtonStyle = {
    secondaryDark: `border-3 ${color} ${borderColor} ${hoverBackgroundColor} ${hoverTextColor} hover:transition ease-in-out delay-300 rounded-4xl`,
    secondaryLight: `border-3 ${color} ${borderColor} ${hoverBackgroundColor} ${hoverTextColor} hover:transition ease-in-out delay-300 rounded-4xl`,
    primary: `${backGroundColor} ${color} ${hoverBackgroundColor} ${hoverTextColor} hover:transition ease-in-out delay-300 rounded-4xl`,
  };
  return buttonType[variant as keyof IButtonStyle];
};
const getButtonClass = (
  variant: string,
  color: string,
  hoverTextColor: HoverTextColor,
  size: string,
  backGroundColor: BackgroundColor,
  hoverBackgroundColor: HoverBackgroundColor,
  borderColor: BorderColor
): string => {
  const buttonWidth = buttonSize[size as keyof IButtonSize];
  return ctl(`${buttonStyle}
              ${buttonWidth}
              ${getbuttonType(
                variant,
                color,
                hoverTextColor,
                backGroundColor,
                hoverBackgroundColor,
                borderColor
              )}`);
};
const Button = ({
  children,
  disabled,
  type = "button",
  variant,
  color = TextColor.black,
  hoverTextColor = HoverTextColor.black,
  size = Size.medium,
  backGroundColor = BackgroundColor["yellow-86"],
  hoverBackgroundColor = HoverBackgroundColor.disabled,
  borderColor = BorderColor["blue-86"],
  handleClick,
}: IButton) => (
  <button
    disabled={disabled}
    type={type === "button" ? "button" : "submit"}
    className={`${getButtonClass(
      variant,
      color,
      hoverTextColor,
      size,
      backGroundColor,
      hoverBackgroundColor,
      borderColor
    )}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
