import { ReactNode } from "react";
import styles from "./AuthLayout.module.scss";

interface IAuthLayout {
  isWelcomeContent: boolean;
  children: ReactNode;
}

export function AuthLayout({ isWelcomeContent, children }: IAuthLayout) {
  return (
    <div className={styles.content}>
      {isWelcomeContent && (
        <div className={styles.contentLeft}>
          <div>
            <h1>TWIDY - Твой новый цифровой дом</h1>
            <h3>Здесь мысли обретают форму, а общение — смысл</h3>
            <h3>Присоединяйся к тем, кто на твоей волне ღ</h3>
          </div>
        </div>
      )}
      <div className={styles.contentRight}>{children}</div>
    </div>
  );
}
