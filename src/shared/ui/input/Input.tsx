import { InputHTMLAttributes, Ref, useId } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

interface IInput extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "disabled"
> {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}

export function Input(props: IInput) {
  const { label, errorMessage, placeholder, inputRef, disabled, ...rest } =
    props;

  const inputId = useId();
  const errorId = `${inputId}-error`;
  const isError = Boolean(errorMessage);
  const errorStyle = isError && styles.error;
  const disabledStyle = disabled && styles.disabled;

  return (
    <div className={styles.main}>
      <label
        htmlFor={inputId}
        className={classNames(styles.label, {}, [errorStyle, disabledStyle])}
      >
        <input
          id={inputId}
          ref={inputRef}
          aria-label={label || placeholder}
          disabled={disabled}
          className={styles.input}
          {...rest}
          placeholder=" "
          aria-invalid={isError}
          aria-describedby={isError ? errorId : undefined}
        />
        {placeholder && (
          <span
            className={classNames(styles.plholder, {}, [
              errorStyle,
              disabledStyle,
            ])}
          >
            {placeholder}
          </span>
        )}
      </label>
      <span id={errorId} className={styles.errorMessage} aria-live="assertive">
        {isError && errorMessage}
      </span>
    </div>
  );
}
