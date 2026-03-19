import Select, { OnChangeValue, Props as SelectProps } from "react-select";
import "./CustomSelect.scss";
import { Ref, useId } from "react";

interface IOption {
  value: string | number;
  label: string;
}

interface ISelect extends Omit<
  SelectProps<IOption, false>,
  "onChange" | "value"
> {
  label?: string;
  placeholder: string;
  options: IOption[];
  onChange?: (option: IOption) => void;
  value?: IOption;
  disabled?: boolean;
  ref?: Ref<any>;
}

export function CustomSelect(props: ISelect) {
  const {
    label,
    placeholder,
    options,
    onChange,
    value,
    disabled,
    ref,
    ...rest
  } = props;

  const selectId = useId();

  const onSelectChange = (currentValue: OnChangeValue<IOption, false>) => {
    if (currentValue && onChange) {
      onChange(currentValue);
    }
  };

  return (
    <div>
      {label && <label htmlFor={selectId}>{label}</label>}
      <Select
        classNamePrefix="custom-select"
        {...rest}
        id={selectId}
        instanceId={selectId}
        ref={ref}
        name={label || placeholder}
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={onSelectChange}
        isDisabled={disabled}
        isClearable={false}
      />
    </div>
  );
}
