import { InputHTMLAttributes, Ref } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckbox extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  title: string;
  type?: "checkbox";
  ref?: Ref<HTMLInputElement>;
  disabled?: boolean;
}

export function Checkbox(props: ICheckbox) {
  const { title, type = "checkbox", ref, disabled, ...rest } = props;

  return (
    <div className={styles.checkboxOutline}>
      <input
        type={type}
        id="connection"
        ref={ref}
        disabled={disabled}
        {...rest}
      />
      <label htmlFor="connection">{title}</label>
    </div>
  );
}
