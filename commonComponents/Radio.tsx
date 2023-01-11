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
    <div>
      <input
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
