import { Header } from "shared/ui/header/Header";
import { Footer } from "shared/ui/footer/Footer";
import styles from "shared/ui/layouts/pageLayout/PageLayout.module.scss";
import { ReactNode } from "react";

interface IPageLayout {
  children: ReactNode;
}

export function PageLayout({ children }: IPageLayout) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
