import ctl from "@netlify/classnames-template-literals";

type ButtonType = JSX.IntrinsicElements["button"]["type"];
interface IButton {
  children: string | React.ReactNode;
  variant?: string;
  disabled: boolean;
  type?: ButtonType;
  handleClick: () => void;
}
interface IButtonStyle {
  primary: string;
  secondary: string;
}
const buttonStyle: string = ctl(`text-lg h-16 border-2
leadeing-[25px] 
border-black  
w-[279px] 
`);
const buttonType: IButtonStyle = {
  primary: "",
  secondary: "bg-green-700",
};
const getbuttonType = (variant: string): string => {
  return buttonType[variant as keyof IButtonStyle];
};
const getButtonClass = (variant: string): string => {
  return ctl(`${buttonStyle}
             ${getbuttonType(variant)}`);
};
const Button = ({
  children,
  disabled,
  type = "button",
  variant = "primary",
  handleClick,
}: IButton) => (
  <button
    disabled={disabled}
    type={type === "button" ? "button" : "submit"}
    className={`${getButtonClass(variant)}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
