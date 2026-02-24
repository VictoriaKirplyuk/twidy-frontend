import styles from "shared/ui/layouts/authLayout/AuthLayout.module.scss";
import { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

export function AuthLayout({ children }: IAuthLayout) {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <div>
          <h1>TWIDY - Твой новый цифровой дом</h1>
          <h3>Здесь мысли обретают форму, а общение — смысл</h3>
          <h3>Присоединяйся к тем, кто на твоей волне ღ</h3>
        </div>
      </div>
      <div className={styles.contentRight}>{children}</div>
    </div>
  );
}
