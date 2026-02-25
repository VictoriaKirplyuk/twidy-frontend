import styles from "shared/ui/buttons/Button/Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({
  type = "button",
  isLoading,
  children,
  ...rest
}: IButton) {
  return (
    /* eslint-disable react/button-has-type */
    <button className={styles.btn} type={type} disabled={isLoading} {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
