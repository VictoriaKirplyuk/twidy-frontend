import styles from "shared/ui/checkbox/Checkbox.module.scss";
import { InputHTMLAttributes, Ref } from "react";

interface ICheckbox extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  title: string;
  type?: "checkbox";
  ref?: Ref<HTMLInputElement>;
}

export function Checkbox(props: ICheckbox) {
  const { title, type = "checkbox", ref, ...rest } = props;

  return (
    <div className={styles.checkboxOutline}>
      <input type={type} id="connection" ref={ref} {...rest} />
      <label htmlFor="connection">{title}</label>
    </div>
  );
}
