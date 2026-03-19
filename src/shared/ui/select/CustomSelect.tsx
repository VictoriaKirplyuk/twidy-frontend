import Select from "react-select";
import "./CustomSelect.scss";

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  options: IOption[];
}

export function CustomSelect(props: ISelect) {
  const { options } = props;

  return (
    <Select
      options={options}
      classNamePrefix="custom-select"
      placeholder="Гендер"
    />
  );
}
