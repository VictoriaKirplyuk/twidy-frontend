import { ChangeEvent, useId } from "react";

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  label: string;
  options: (string | IOption)[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export function Select(props: ISelect) {
  const {
    label,
    options,
    value,
    onChange,
    error,
    placeholder,
    name,
    required,
  } = props;

  const selectId = useId();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={selectId}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        name={name}
        value={value}
        id={selectId}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          const isString = typeof option === "string";
          const currentValue = isString ? option : option.value;
          const currentLabel = isString ? option : option.label;

          return (
            <option key={currentLabel} value={currentValue}>
              {currentLabel}
            </option>
          );
        })}
      </select>
      {error && (
        <span id={`${selectId}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
