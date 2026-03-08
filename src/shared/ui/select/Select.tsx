import { ChangeEvent, Ref, SelectHTMLAttributes, useId } from "react";
import styles from "./Select.module.scss";

interface IOption {
  value: string;
  label: string;
}

interface ISelect extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "onChange" | "value"
> {
  label: string;
  options: (string | IOption)[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  ref?: Ref<HTMLSelectElement>;
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
    ref,
    ...rest
  } = props;

  const selectId = useId();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={selectId} className={styles.selectLabel}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        className={styles.select}
        name={name}
        ref={ref}
        value={value}
        id={selectId}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...rest}
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
