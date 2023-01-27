interface IRadio {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
  disabled: boolean;
}
const Radio = ({
  label,
  disabled,
  name,
  value,
  handleChange,
  selected,
}: IRadio) => {
  return (
    <div className="flex items-center gap-[39px] font-sohneBuch text-blue-86 text-10xl leading-11 lg:text-12xl lg:leading-12">
      <input
        className="form-radio focus:ring-0 focus:ring-transparent w-[30px] h-[30px] bg-transparent border-2 border-blue-86 focus:outline-none"
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={selected === value}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Radio;
