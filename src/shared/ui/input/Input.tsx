import styles from "shared/ui/input/Input.module.scss";
import { InputHTMLAttributes, useId } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
}

export function Input({ label, errorMessage, placeholder, ...rest }: IInput) {
  const inputId = useId();
  const hasError = Boolean(errorMessage);
  const errorStyle = hasError && styles.error;

  return (
    <div>
      <label
        htmlFor={inputId}
        className={classNames(styles.label, {}, [errorStyle])}
      >
        <input
          id={inputId}
          aria-label={label || placeholder}
          className={styles.input}
          {...rest}
          placeholder=" "
        />
        {placeholder && (
          <span className={classNames(styles.plholder, {}, [errorStyle])}>
            {placeholder}
          </span>
        )}
      </label>
      <span className={styles.errorMessage}>{hasError && errorMessage}</span>
    </div>
  );
}
