import styles from "shared/ui/input/Input.module.scss";
import { InputHTMLAttributes, Ref, useId } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export function Input(props: IInput) {
  const { label, errorMessage, placeholder, inputRef, ...rest } = props;

  const inputId = useId();
  const isError = Boolean(errorMessage);
  const errorStyle = isError && styles.error;

  return (
    <div className={styles.main}>
      <label
        htmlFor={inputId}
        className={classNames(styles.label, {}, [errorStyle])}
      >
        <input
          id={inputId}
          ref={inputRef}
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
      <span className={styles.errorMessage}>{isError && errorMessage}</span>
    </div>
  );
}
